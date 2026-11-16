import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookNowButton } from "../booking/BookNowButton";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/lodge", label: "Lodge", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-logo" onClick={closeMenu}>
          Azur Dolphin Lodge
        </Link>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "site-nav__link is-active" : "site-nav__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
          <BookNowButton variant="nav" />
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__panel">
          <nav className="site-nav site-nav--mobile" aria-label="Mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                tabIndex={menuOpen ? undefined : -1}
                className={({ isActive }) =>
                  isActive ? "site-nav__link is-active" : "site-nav__link"
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <BookNowButton variant="primary" onNavigate={closeMenu} />
          </nav>
        </div>
      </div>
    </header>
  );
}
