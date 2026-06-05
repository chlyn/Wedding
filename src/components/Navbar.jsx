import { useEffect, useState } from "react";
import "../styles/components/navbar.css";

const navItems = [
    { id: "home", label: "Home", route: "/home" },
    { id: "schedule", label: "Schedule", route: "/home/schedule" },
    { id: "details", label: "Details", route: "/details" },
    { id: "registry", label: "Registry", route: "/details/registry" },
    { id: "thingsToDo", label: "Things To Do", route: "/things-to-do" },
    { id: "contact", label: "Contact Us", route: "/home/contact-us" },
];

function Navbar({ activePage, onNavigate }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handlePageChange = (route) => {
        onNavigate(route);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar${isScrolled ? " scrolled" : ""}`} aria-label="Main navigation">
                <div className="navbar-links">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            className={`navbar-button${activePage === item.id ? " active" : ""}`}
                            onClick={() => handlePageChange(item.route)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button
                    className={`navbar-menu-button${isMenuOpen ? " open" : ""}`}
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            <div
                className={`navbar-drawer-backdrop${isMenuOpen ? " open" : ""}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <aside
                className={`navbar-drawer${isMenuOpen ? " open" : ""}`}
                id="mobile-navigation"
                aria-hidden={!isMenuOpen}
            >
                <div className="navbar-drawer-links">
                    {navItems.map((item) => (
                        <button
                            key={`drawer-${item.id}`}
                            type="button"
                            className={`navbar-drawer-button${activePage === item.id ? " active" : ""}`}
                            onClick={() => handlePageChange(item.route)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </aside>
        </>
    );
}

export default Navbar;
