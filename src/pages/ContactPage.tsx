import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookNowButton } from "../components/booking/BookNowButton";
import { BookingEmbed } from "../components/booking/BookingEmbed";
import { LodgeMap } from "../components/LodgeMap";
import {
  bookingConfig,
  getBookingHref,
  isBookingLive,
} from "../config/booking";
import { LODGE_ADDRESS } from "../data/locations";

export function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#book") {
      const el = document.getElementById("book");
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  const live = isBookingLive();
  const href = getBookingHref();

  return (
    <div className="page contact-page">
      <header className="page-intro">
        <div className="page-intro__inner">
          <p className="page-header__eyebrow">Contact &amp; Bookings</p>
          <h1 className="page-header__title">Azur Dolphin Lodge</h1>
          <p className="page-header__lead">
            Enquire about a Garden Route stay or book online once NightsBridge
            is connected. We are happy to help you plan dates.
          </p>
          <div className="page-intro__actions">
            <a
              className="book-now book-now--primary"
              href="https://wa.me/27827802022"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp +27 82 780 2022
            </a>
            <a
              className="book-now book-now--secondary"
              href="mailto:azurdolphin@gmail.com"
            >
              Email us
            </a>
          </div>
        </div>
      </header>

      <section className="section contact-details">
        <div className="section__inner contact-details__grid">
          <div>
            <h2 className="section__title">Enquiry details</h2>
            <p className="section__lead">
              Prefer to talk first? Reach out and we will help you plan dates
              for your Garden Route stay.
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-list__label">Location</span>
                <span>
                  {LODGE_ADDRESS} — Garden Route, between George and Mossel Bay
                </span>
              </li>
              <li>
                <span className="contact-list__label">Key distances</span>
                <span>
                  George Airport 28 km · George Central 33 km · Mossel Bay
                  central 18 km · Hartenbos 10 km · Klein Brak Blue Flag Beach
                  3.5 km
                </span>
              </li>
              <li>
                <span className="contact-list__label">Check-in</span>
                <span>From 2:00 pm</span>
              </li>
              <li>
                <span className="contact-list__label">Check-out</span>
                <span>By 10:00 am</span>
              </li>
              <li>
                <span className="contact-list__label">Email</span>
                <a href="mailto:azurdolphin@gmail.com">azurdolphin@gmail.com</a>
              </li>
              <li>
                <span className="contact-list__label">WhatsApp</span>
                <a
                  href="https://wa.me/27827802022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +27 82 780 2022
                </a>
              </li>
              <li>
                <span className="contact-list__label">Alternative</span>
                <span>
                  Petro at{" "}
                  <a href="tel:+27712781529">+27 71 278 1529</a>
                </span>
              </li>
            </ul>
            <p className="section__lead contact-local-links">
              Local guides:{" "}
              <a
                href="https://visitmosselbay.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Mossel Bay
              </a>
              {" · "}
              <a
                href="https://gardenwalk.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garden Walk
              </a>
              {" · "}
              <a
                href="https://www.facebook.com/groups/livemusicvideosgardenroute"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live entertainment
              </a>
            </p>
          </div>
          <aside className="contact-aside">
            <p className="contact-aside__eyebrow">Reservations</p>
            <h2 className="contact-aside__title">Ready to book?</h2>
            <p>
              Online reservations will run through NightsBridge. Until that
              connection is confirmed for Azur Dolphin Lodge, Book Now brings
              you here to enquire.
            </p>
            <BookNowButton variant="secondary" />
          </aside>
        </div>
      </section>

      <section id="book" className="section booking-section">
        <div className="section__inner">
          <p className="section__eyebrow">Reservations</p>
          <h2 className="section__title">Book your stay</h2>
          <p className="section__lead">
            Check availability below, or continue to NightsBridge when online
            booking is live.
          </p>
          {live && bookingConfig.mode === "link" && href ? (
            <div className="booking-link-panel">
              <p>
                Online booking is live. Continue to the NightsBridge booking
                engine to select dates and complete your reservation.
              </p>
              <a
                className="book-now book-now--primary"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check availability &amp; book
              </a>
            </div>
          ) : (
            <BookingEmbed />
          )}
        </div>
      </section>

      <section className="section location-section">
        <div className="section__inner">
          <p className="section__eyebrow">Find us</p>
          <h2 className="section__title">Lodge location</h2>
          <p className="section__lead">
            Pin the lodge on Google Maps before you travel — we are in Klein
            Brak River on the Garden Route.
          </p>
          <LodgeMap />
        </div>
      </section>
    </div>
  );
}
