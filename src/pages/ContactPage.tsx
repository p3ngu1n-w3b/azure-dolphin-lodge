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
          className="page-hero__image"
          src="/images/suite-lounge.jpg"
          alt=""
        />
        <div className="page-hero__veil" aria-hidden="true" />
        <div className="page-hero__content">
          <p className="page-header__eyebrow">Contact &amp; Bookings</p>
          <h1 className="page-header__title page-header__title--on-dark">
            We would love to host you
          </h1>
          <p className="page-header__lead page-header__lead--on-dark">
            Enquire about a stay, ask a question, or book online through
            NightsBridge.
          </p>
        </div>
      </header>

      <section className="section contact-details">
        <div className="section__inner contact-details__grid">
          <div>
            <h2 className="section__title">Enquiry</h2>
            <p className="section__lead">
              Prefer to talk first? Reach us directly — the same warm hosts
              guests have thanked for years on the previous Littlefield Suite
              site.
            </p>
            <ul className="contact-list">
              <li>
                <span className="contact-list__label">Email</span>
                <a href="mailto:littlefieldsuite@gmail.com">
                  littlefieldsuite@gmail.com
                </a>
              </li>
              <li>
                <span className="contact-list__label">Phone</span>
                <a href="tel:+27117044978">+27 11 704 4978</a>
              </li>
              <li>
                <span className="contact-list__label">Mobile</span>
                <span>
                  <a href="tel:+27721162908">+27 72 116 2908</a>
                  {" · "}
                  <a href="tel:+27827802022">+27 82 780 2022</a>
                </span>
              </li>
              <li>
                <span className="contact-list__label">Location</span>
                <span>Olivedale, Greater Johannesburg, Gauteng</span>
              </li>
            </ul>
          </div>
          <div className="contact-aside">
            <p>
              Online reservations are powered by NightsBridge. Use Book Now
              anywhere on the site, or open the booking section below.
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
            Select dates and guests, view live availability and pricing, and
            complete your reservation through the official NightsBridge booking
            engine.
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
