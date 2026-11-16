import { Link } from "react-router-dom";
import { BookNowButton } from "../components/booking/BookNowButton";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img
            className="hero__image"
            src="/images/hero-coast.jpg"
            alt=""
            fetchPriority="high"
          />
          <div className="hero__veil" />
        </div>
        <div className="hero__content">
          <p className="hero__brand">Azur Dolphin Lodge</p>
          <h1 className="hero__headline">
            Tranquil valley living, just minutes from the beach
          </h1>
          <p className="hero__support">
            A private Garden Route retreat with quiet comfort, privacy, and easy
            access to the Klein Brak coast.
          </p>
          <div className="hero__actions">
            <BookNowButton variant="primary" />
            <Link to="/lodge" className="btn btn--ghost">
              Explore the lodge
            </Link>
          </div>
        </div>
      </section>

      <section className="section atmosphere">
        <div className="section__inner atmosphere__grid">
          <div className="atmosphere__copy">
            <p className="section__eyebrow">The lodge</p>
            <h2 className="section__title">
              Unwind in the heart of Klein Brak
            </h2>
            <p className="section__lead">
              Azur Dolphin Lodge is a private, non-smoking self-catering retreat
              nestled in a peaceful pocket along the Garden Route. Offering
              partial valley views, the lodge is thoughtfully designed for
              guests seeking quiet comfort and privacy. Wake up to birdsong and
              green hills rather than busy beachfront crowds, while still
              enjoying effortless access to the coast.
            </p>
            <Link to="/lodge" className="text-link atmosphere__link">
              Discover the space
            </Link>
          </div>
          <figure className="atmosphere__media">
            <img
              src="/images/deck-morning.jpg"
              alt="Quiet outdoor space for relaxing with a drink"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section stay-promise">
        <div className="section__inner stay-promise__inner">
          <p className="section__eyebrow">The best of both worlds</p>
          <h2 className="section__title">
            Serene valley living with the coast nearby
          </h2>
          <ul className="stay-list">
            <li>
              <strong>Valley calm</strong>
              <span>
                Partial valley views, birdsong, and a sheltered setting away
                from beachfront bustle.
              </span>
            </li>
            <li>
              <strong>Minutes from the shore</strong>
              <span>
                1.4 km from ocean viewpoints with benches, and 3.5 km from Klein
                Brak Blue Flag Beach.
              </span>
            </li>
            <li>
              <strong>Centrally placed</strong>
              <span>
                Between George and Mossel Bay — close to Hartenbos, shops, and
                the airport.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section suite-feature">
        <div className="section__inner suite-feature__grid">
          <figure className="suite-feature__media">
            <img
              src="/images/suite-light.jpg"
              alt="Comfortable lodge bedroom with king-size bed"
              loading="lazy"
            />
          </figure>
          <div className="suite-feature__copy">
            <p className="section__eyebrow">The space</p>
            <h2 className="section__title">A full private lodge</h2>
            <p className="section__lead">
              Separate entrance, king-size bedroom, expansive bathroom, modern
              kitchen with sleeper couch, dedicated parking, and a private
              garden with picnic seating for outdoor meals or a sundowner.
            </p>
            <BookNowButton variant="secondary" />
          </div>
        </div>
      </section>

      <section className="section booking-strip">
        <div className="section__inner booking-strip__inner">
          <div>
            <h2 className="section__title">
              Azur Lodge — the best of both worlds
            </h2>
            <p className="section__lead">
              Check in from 2:00 pm · Check out by 10:00 am. Book online through
              NightsBridge when connected, or enquire via Contact.
            </p>
          </div>
          <BookNowButton variant="primary" />
        </div>
      </section>
    </>
  );
}
