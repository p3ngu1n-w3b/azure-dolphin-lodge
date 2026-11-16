import { Link } from "react-router-dom";
import { BookNowButton } from "../booking/BookNowButton";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Azur Dolphin Lodge</p>
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
    </footer>
  );
}
