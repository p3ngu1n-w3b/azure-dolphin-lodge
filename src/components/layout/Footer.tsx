import { Link } from "react-router-dom";
import { BookNowButton } from "../booking/BookNowButton";
import { SiteLogo } from "../SiteLogo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link
            to="/"
            className="site-footer__logo"
            aria-label="Azur Dolphin Lodge home"
          >
            <SiteLogo className="site-logo__image--footer" />
          </Link>
          <p className="site-footer__tagline">
            Tranquil valley living, just minutes from the beach.
          </p>
        </div>
        <div className="site-footer__actions">
          <Link to="/contact" className="text-link">
            Contact
          </Link>
          <BookNowButton variant="secondary" />
        </div>
      </div>
      <p className="site-footer__note">
        Klein Brak · Garden Route · Check-in 2:00 pm · Check-out 10:00 am ·
        Reservations via NightsBridge when connected.
      </p>
      <p className="site-footer__credit">
        Built by{" "}
        <a
          href="https://jacoroux.co.za"
          target="_blank"
          rel="noopener noreferrer"
        >
          jacoroux.co.za
        </a>
      </p>
    </footer>
  );
}
