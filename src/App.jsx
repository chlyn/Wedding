import { useEffect, useState } from "react";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Registry from "./pages/Registry";
import Schedule from "./pages/Schedule";
import ThingsToDo from "./pages/ThingsToDo";
import Travel from "./pages/Travel";
import Navbar from "./components/Navbar";

const pages = {
  home: Home,
  details: Details,
  schedule: Schedule,
  registry: Registry,
  travel: Travel,
  thingsToDo: ThingsToDo,
};

function App() {
  const [activePage, setActivePage] = useState("home");
  const ActivePage = pages[activePage];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [activePage]);

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onPageChange={setActivePage} />
      <main className="page-shell">
        <ActivePage />
      </main>
    </div>
  );
}

export default App;
