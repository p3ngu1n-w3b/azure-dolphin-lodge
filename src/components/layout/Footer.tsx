import { Link } from "react-router-dom";
import { BookNowButton } from "../booking/BookNowButton";
import {
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  SITE_WHATSAPP_URL,
} from "../../config/site";
import { LODGE_ADDRESS } from "../../data/locations";
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
          <address className="site-footer__address">
            {LODGE_ADDRESS}
            <br />
            Garden Route, Western Cape, South Africa
            <br />
            <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            {" · "}
            <a
              href={SITE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {SITE_PHONE_DISPLAY}
            </a>
            {" · "}
            <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
          </address>
        </div>
        <div className="site-footer__actions">
          <Link to="/contact" className="text-link">
            Contact
          </Link>
          <BookNowButton variant="secondary" />
        </div>
      </div>
      <p className="site-footer__note">
        Klein Brak River · Garden Route · Check-in 2:00 pm · Check-out 10:00 am
        · Reservations via NightsBridge.
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
