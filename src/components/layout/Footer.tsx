import { Link } from "react-router-dom";
import { BookNowButton } from "../booking/BookNowButton";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">Azur Dolphin Lodge</p>
          <p className="site-footer__tagline">
            Luxury self-catering in Olivedale, Johannesburg.
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
        Reservations powered by NightsBridge. Formerly Littlefield Luxury Suite.
      </p>
    </footer>
  );
}
