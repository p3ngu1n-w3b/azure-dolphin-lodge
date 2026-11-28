import { Link } from "react-router-dom";
import { BookNowButton } from "../components/booking/BookNowButton";
import { LocationDistances } from "../components/LocationDistances";
import { LodgeMap } from "../components/LodgeMap";
import { StarRating } from "../components/StarRating";
import { reviews } from "../data/reviews";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <img
            className="hero__image photo-filter--exterior"
            src="/images/lodge-exterior.jpg"
            alt="Azur Dolphin Lodge exterior in Klein Brak River on the Garden Route"
            fetchPriority="high"
          />
          <div className="hero__veil" aria-hidden="true" />
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
              className="photo-filter--aqua"
              src="/images/lounge-art.jpg"
              alt="Lounge with dolphin artwork above the sleeper couch"
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
                18 km from Mossel Bay central · 28 km from George Airport ·
                33 km from George Central.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section location-section">
        <div className="section__inner">
          <p className="section__eyebrow">Getting here</p>
          <h2 className="section__title">Distances at a glance</h2>
          <LocationDistances />
          <LodgeMap />
          <Link to="/lodge" className="text-link atmosphere__link">
            See the full lodge details
          </Link>
        </div>
      </section>

      <section className="section suite-feature">
        <div className="section__inner suite-feature__grid">
          <figure className="suite-feature__media">
            <img
              className="photo-filter--warm"
              src="/images/bedroom-queen.jpg"
              alt="Cozy lodge bedroom with a double bed"
              loading="lazy"
            />
          </figure>
          <div className="suite-feature__copy">
            <p className="section__eyebrow">The space</p>
            <h2 className="section__title">A full private lodge</h2>
            <p className="section__lead">
              Separate entrance, cozy bedroom with a double bed, expansive bathroom, modern
              kitchen with sleeper couch, off-road dedicated parking, and a
              separate garden with picnic table and chairs for outdoor meals or
              a sundowner.
            </p>
            <BookNowButton variant="secondary" />
          </div>
        </div>
      </section>

      <section className="section home-glimpse" aria-labelledby="glimpse-heading">
        <div className="section__inner">
          <p className="section__eyebrow">A closer look</p>
          <h2 id="glimpse-heading" className="section__title">
            Inside the lodge
          </h2>
          <div className="glimpse">
            <figure className="glimpse__item">
              <img
                className="photo-filter--bright"
                src="/images/kitchen-dining.jpg"
                alt="Dining table and fully equipped kitchenette"
                loading="lazy"
              />
              <figcaption>Self-catering kitchen &amp; dining</figcaption>
            </figure>
            <figure className="glimpse__item">
              <img
                className="photo-filter--warm"
                src="/images/bathroom-bath.jpg"
                alt="Bathroom with bath, bidet and navy accents"
                loading="lazy"
              />
              <figcaption>Full bathroom with bath &amp; shower</figcaption>
            </figure>
            <figure className="glimpse__item">
              <img
                className="photo-filter--valley"
                src="/images/valley-view.jpg"
                alt="Green hills and valley view beyond the lodge"
                loading="lazy"
              />
              <figcaption>Quiet valley outlook</figcaption>
            </figure>
          </div>
          <Link to="/lodge" className="text-link atmosphere__link">
            Browse the full gallery
          </Link>
        </div>
      </section>

      <section className="section reviews" aria-labelledby="reviews-heading">
        <div className="section__inner">
          <p className="section__eyebrow">Guest words</p>
          <h2 id="reviews-heading" className="section__title">
            What guests say
          </h2>
          <ul className="reviews__list">
            {reviews.map((review) => (
              <li key={`${review.name}-${review.place}`} className="review">
                <StarRating rating={review.stars} />
                <blockquote className="review__quote">
                  <p>“{review.quote}”</p>
                </blockquote>
                <p className="review__meta">
                  <span className="review__name">{review.name}</span>
                  <span className="review__place">{review.place}</span>
                </p>
              </li>
            ))}
          </ul>
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
              NightsBridge, or enquire via Contact.
            </p>
          </div>
          <BookNowButton variant="primary" />
        </div>
      </section>
    </>
  );
}
