import { useEffect, useState } from "react";
import Details from "./pages/Details";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import ThingsToDo from "./pages/ThingsToDo";
import Navbar from "./components/Navbar";

const routes = {
  "/home": { page: Home, activePage: "home", sectionId: "home-page-start" },
  "/home/schedule": { page: Home, activePage: "schedule", sectionId: "home-schedule", smoothScroll: true },
  "/home/contact-us": { page: Home, activePage: "contact", sectionId: "home-contact", smoothScroll: true },
  "/details": { page: Details, activePage: "details", sectionId: "details-page-start" },
  "/details/registry": { page: Details, activePage: "registry", sectionId: "details-registry", smoothScroll: true },
  "/things-to-do": { page: ThingsToDo, activePage: "thingsToDo", sectionId: "things-to-do-page" },
  "/faq": { page: FAQ, activePage: "faq", sectionId: "faq-page-start" },
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const revealSelectors = [
  ".home-hero-overlay",
  ".page-hero-title",
  ".home-date-visual",
  ".home-date-copy",
  ".home-schedule-frame",
  ".home-gallery-track",
  ".details-dress-info",
  ".details-attire-image",
  ".details-travel-title",
  ".details-travel-intro",
  ".details-travel-card",
  ".details-registry-frame",
  ".thingstodo-intro",
  ".thingstodo-destination",
  ".faq-intro",
  ".faq-item",
  ".contact-banner-copy",
];

function getRouteFromLocation() {
  const redirectedRoute = new URLSearchParams(window.location.search).get("route");

  if (redirectedRoute) {
    const cleanRoute = redirectedRoute.split("?")[0].split("#")[0];
    window.history.replaceState({}, "", `${basePath}${cleanRoute}`);
    return cleanRoute;
  }

  const route = window.location.pathname.slice(basePath.length) || "/";
  return route === "/" ? "/home" : route;
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(getRouteFromLocation);
  const [isMobileLayout, setIsMobileLayout] = useState(() => window.matchMedia("(max-width: 768px)").matches);
  const [navigationRequest, setNavigationRequest] = useState(0);
  const routeConfig = routes[currentRoute] || routes["/home"];
  const ActivePage = routeConfig.page;

  const navigate = (route) => {
    window.history.pushState({}, "", `${basePath}${route}`);
    setCurrentRoute(route);
    setNavigationRequest((request) => request + 1);
  };

  useEffect(() => {
    if (window.location.pathname === `${basePath}/` || window.location.pathname === basePath) {
      window.history.replaceState({}, "", `${basePath}/home`);
    }

    const handlePopState = () => setCurrentRoute(getRouteFromLocation());
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const mobileLayoutQuery = window.matchMedia("(max-width: 768px)");
    const handleLayoutChange = (event) => setIsMobileLayout(event.matches);

    mobileLayoutQuery.addEventListener("change", handleLayoutChange);

    return () => mobileLayoutQuery.removeEventListener("change", handleLayoutChange);
  }, []);

  useEffect(() => {
    if (routeConfig.sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(routeConfig.sectionId)?.scrollIntoView({
          behavior: isMobileLayout || routeConfig.smoothScroll ? "smooth" : "auto",
        });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentRoute, isMobileLayout, navigationRequest, routeConfig.sectionId, routeConfig.smoothScroll]);

  useEffect(() => {
    const revealElements = [...document.querySelectorAll(revealSelectors.join(","))];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.documentElement.classList.add("reveal-ready");

    revealElements.forEach((element, index) => {
      element.dataset.reveal = "up";
      element.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`);
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [currentRoute, isMobileLayout]);

  return (
    <div className="app-shell">
      <Navbar activePage={routeConfig.activePage} onNavigate={navigate} />
      <div className="page-shell">
        {isMobileLayout ? (
          <div className="mobile-page-flow">
            <Home showContact={false} />
            <Details />
            <ThingsToDo />
            <FAQ showContact onNavigate={navigate} />
          </div>
        ) : (
          <ActivePage onNavigate={navigate} />
        )}
      </div>
    </div>
  );
}

export default App;
