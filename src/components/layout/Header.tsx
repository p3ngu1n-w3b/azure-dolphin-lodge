import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BookNowButton } from "../booking/BookNowButton";
import { SiteLogo } from "../SiteLogo";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/lodge", label: "Lodge", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const unlockScrollY = useRef<number | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollY = window.scrollY;
    const { style: body } = document.body;
    const { style: html } = document.documentElement;

    body.position = "fixed";
    body.top = `-${scrollY}px`;
    body.left = "0";
    body.right = "0";
    body.overflow = "hidden";
    html.overflow = "hidden";

    return () => {
      body.position = "";
      body.top = "";
      body.left = "";
      body.right = "";
      body.overflow = "";
      html.overflow = "";
      const y = unlockScrollY.current ?? scrollY;
      unlockScrollY.current = null;
      window.scrollTo(0, y);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const goToTop = () => {
    if (menuOpen) {
      unlockScrollY.current = 0;
      closeMenu();
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <>
      <header className={`site-header${menuOpen ? " is-menu-open" : ""}`}>
        <div className="site-header__inner">
          <Link
            to="/"
            className="site-logo"
            onClick={goToTop}
            aria-label="Azur Dolphin Lodge home"
          >
            <SiteLogo />
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
                onClick={goToTop}
              >
                {item.label}
              </NavLink>
            ))}
            <BookNowButton variant="nav" />
          </nav>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
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
      </header>
      {menuOpen ? (
        <div className="site-header__spacer" aria-hidden="true" />
      ) : null}

      {/* Outside sticky/backdrop-filter header so position:fixed uses the viewport */}
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
                onClick={goToTop}
              >
                {item.label}
              </NavLink>
            ))}
            <BookNowButton variant="primary" onNavigate={closeMenu} />
          </nav>
        </div>
      </div>
    </>
  );
}
