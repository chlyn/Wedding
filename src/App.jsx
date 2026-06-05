import { useEffect, useState } from "react";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Registry from "./pages/Registry";
import ThingsToDo from "./pages/ThingsToDo";
import Navbar from "./components/Navbar";

const routes = {
  "/home": { page: Home, activePage: "home" },
  "/home/schedule": { page: Home, activePage: "schedule", sectionId: "home-schedule" },
  "/home/contact-us": { page: Home, activePage: "contact", sectionId: "home-contact" },
  "/details": { page: Details, activePage: "details" },
  "/registry": { page: Registry, activePage: "registry" },
  "/things-to-do": { page: ThingsToDo, activePage: "thingsToDo" },
};

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

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
  const routeConfig = routes[currentRoute] || routes["/home"];
  const ActivePage = routeConfig.page;

  const navigate = (route) => {
    window.history.pushState({}, "", `${basePath}${route}`);
    setCurrentRoute(route);
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
    if (routeConfig.sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(routeConfig.sectionId)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [currentRoute, routeConfig.sectionId]);

  return (
    <div className="app-shell">
      <Navbar activePage={routeConfig.activePage} onNavigate={navigate} />
      <main className="page-shell">
        <ActivePage />
      </main>
    </div>
  );
}

export default App;
