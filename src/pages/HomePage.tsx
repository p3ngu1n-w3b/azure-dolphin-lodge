import { Link } from "react-router-dom";
import { BookNowButton } from "../components/booking/BookNowButton";
import { reviews } from "../data/reviews";

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img
            className="hero__image"
            src="/images/suite-pool.jpg"
            alt=""
            fetchPriority="high"
          />
          <div className="hero__veil" />
        </div>
        <div className="hero__content">
          <p className="hero__brand">Azur Dolphin Lodge</p>
          <h1 className="hero__headline">Luxury self-catering in Olivedale</h1>
          <p className="hero__support">
            A private suite with garden, pool, and warm hospitality — minutes
            from Fourways, Sandton, and the Gautrain.
          </p>
          <div className="hero__actions">
            <BookNowButton variant="primary" />
            <Link to="/lodge" className="btn btn--ghost">
              Explore the suite
            </Link>
          </div>
        </div>
      </section>

      <section className="section atmosphere">
        <div className="section__inner atmosphere__grid">
          <div className="atmosphere__copy">
            <p className="section__eyebrow">The suite</p>
            <h2 className="section__title">
              Quiet comfort in a boomed, secure neighbourhood
            </h2>
            <p className="section__lead">
              Nestled in a palm garden with water features, Azur Dolphin Lodge
              offers a modern non-smoking suite for up to four guests — separate
              entrance, safe parking, and the ease of full self-catering with
              Free Wi‑Fi and DSTV.
            </p>
            <Link to="/lodge" className="text-link atmosphere__link">
              Discover the lodge
            </Link>
          </div>
          <figure className="atmosphere__media">
            <img
              src="/images/suite-lounge.jpg"
              alt="Separate kitchen and lounge with DSTV"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section className="section stay-promise">
        <div className="section__inner stay-promise__inner">
          <p className="section__eyebrow">Your stay</p>
          <h2 className="section__title">Everything you need, thoughtfully kept</h2>
          <ul className="stay-list">
            <li>
              <strong>Garden &amp; pool</strong>
              <span>
                Palmed garden, swimming pool, and a separate lapa for barbecues.
              </span>
            </li>
            <li>
              <strong>Suite for four</strong>
              <span>
                Queen bedroom plus a luxury sleeper couch — kitchen, lounge, and
                jacuzzi bathroom.
              </span>
            </li>
            <li>
              <strong>Well connected</strong>
              <span>
                Near Olivedale Clinic, Monte Casino, Fourways, Sandton, and the
                Gautrain.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section suite-feature">
        <div className="section__inner suite-feature__grid">
          <figure className="suite-feature__media">
            <img
              src="/images/suite-bedroom.jpg"
              alt="Spacious bedroom with queen-sized bed"
              loading="lazy"
            />
          </figure>
          <div className="suite-feature__copy">
            <p className="section__eyebrow">Inside</p>
            <h2 className="section__title">A complete private flatlet</h2>
            <p className="section__lead">
              Marble and wooden floors, a modern bathroom with jacuzzi bath and
              glass shower, washing machine in suite, and outdoor smoking only.
              Hospitality that guests describe as home from home.
            </p>
            <BookNowButton variant="secondary" />
          </div>
        </div>
      </section>

      <section className="section reviews" aria-labelledby="reviews-heading">
        <div className="section__inner">
          <p className="section__eyebrow">Guest words</p>
          <h2 id="reviews-heading" className="section__title">
            What stays feel like
          </h2>
          <p className="section__lead">
            Kind words from guests who stayed with us — carried forward from
            years of hosting as Littlefield Luxury Suite.
          </p>

          <ul className="reviews__list">
            {reviews.map((review) => (
              <li key={`${review.name}-${review.place}`} className="review">
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
            <h2 className="section__title">Begin your stay</h2>
            <p className="section__lead">
              Check live availability and reserve through NightsBridge — or
              contact us directly if you prefer to enquire first.
            </p>
          </div>
          <BookNowButton variant="primary" />
        </div>
      </section>
    </>
  );
}
