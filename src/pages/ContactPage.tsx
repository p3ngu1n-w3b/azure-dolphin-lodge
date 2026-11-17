import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookNowButton } from "../components/booking/BookNowButton";
import { BookingEmbed } from "../components/booking/BookingEmbed";
import {
  bookingConfig,
  getBookingHref,
  isBookingLive,
} from "../config/booking";

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
    <div className="page">
      <header className="page-hero page-hero--short">
        <img
          className="page-hero__image photo-filter--exterior"
          src="/images/lodge-exterior.jpg"
          alt=""
        />
        <div className="page-hero__veil" aria-hidden="true" />
        <div className="page-hero__content">
          <p className="page-header__eyebrow">Contact &amp; Bookings</p>
          <h1 className="page-header__title page-header__title--on-dark">
            We would love to host you
          </h1>
          <p className="page-header__lead page-header__lead--on-dark">
            Azur Lodge — situated to give you the best of both worlds. Enquire
            about a stay or book online once NightsBridge is connected.
          </p>
        </div>
      </header>

      <section className="section contact-details">
        <div className="section__inner contact-details__grid">
          <div>
            <h2 className="section__title">Enquiry</h2>
            <p className="section__lead">
              Prefer to talk first? Reach out and we will help you plan dates
              for your Garden Route stay.
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-list__label">Location</span>
                <span>
                  Klein Brak / Garden Route — between George and Mossel Bay
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
          <div className="contact-aside">
            <p>
              Online reservations will run through NightsBridge. Until that
              connection is confirmed for Azur Dolphin Lodge, Book Now brings
              you here to enquire.
            </p>
            <BookNowButton variant="secondary" />
          </div>
        </div>
      </section>

      <section id="book" className="section booking-section">
        <div className="section__inner">
          <p className="section__eyebrow">Reservations</p>
          <h2 className="section__title">Book with NightsBridge</h2>
          <p className="section__lead">
            When enabled, this section opens the official NightsBridge booking
            interface so you can choose dates, guest numbers, and complete your
            reservation with live availability and pricing.
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
    </div>
  );
}
