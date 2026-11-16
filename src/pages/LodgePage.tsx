import { BookNowButton } from "../components/booking/BookNowButton";

export function LodgePage() {
  return (
    <div className="page">
      <header className="page-hero">
        <img
          className="page-hero__image"
          src="/images/suite-bedroom.jpg"
          alt=""
          fetchPriority="high"
        />
        <div className="page-hero__veil" aria-hidden="true" />
        <div className="page-hero__content">
          <p className="page-header__eyebrow">The lodge</p>
          <h1 className="page-header__title page-header__title--on-dark">
            Azur Dolphin Lodge
          </h1>
          <p className="page-header__lead page-header__lead--on-dark">
            Modern luxury self-catering in Olivedale, Greater Johannesburg —
            one private suite sleeping up to four guests.
          </p>
        </div>
      </header>

      <section className="section lodge-overview">
        <div className="section__inner lodge-overview__inner">
          <h2 className="section__title">A place to settle in</h2>
          <p className="section__lead section__lead--wide">
            Separate entrance, secure high-wall parking in a boomed-off area,
            and a suite designed for independent stays. Enjoy Free Wi‑Fi, full
            DSTV, a washing machine in the suite, and outdoor spaces made for
            easy evenings — including a swimming pool and lapa with barbecue
            facilities for private gatherings.
          </p>
        </div>
      </section>

      <section className="section lodge-moments">
        <div className="section__inner">
          <p className="section__eyebrow">Spaces</p>
          <h2 className="section__title">What you will find</h2>
          <div className="moments">
            <article className="moment">
              <h3>Bedroom</h3>
              <p>
                Spacious room with a queen-sized bed. A fold-out luxury sleeper
                couch sleeps two additional guests.
              </p>
            </article>
            <article className="moment">
              <h3>Kitchen &amp; lounge</h3>
              <p>
                Separate kitchen and lounge with full DSTV — comfortable for
                working, cooking, and unwinding.
              </p>
            </article>
            <article className="moment">
              <h3>Bathroom</h3>
              <p>
                Modern bathroom with jacuzzi bath and a separate glass shower.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section lodge-gallery">
        <div className="section__inner lodge-gallery__grid">
          <figure className="lodge-gallery__wide">
            <img
              src="/images/suite-pool.jpg"
              alt="Palmed garden with swimming pool and water features"
              loading="lazy"
            />
            <figcaption>Garden, pool, and water features</figcaption>
          </figure>
          <figure>
            <img
              src="/images/suite-bathroom.jpg"
              alt="Modern bathroom with jacuzzi bath"
              loading="lazy"
            />
            <figcaption>Jacuzzi bath and glass shower</figcaption>
          </figure>
        </div>
      </section>

      <section className="section lodge-overview">
        <div className="section__inner lodge-overview__inner">
          <h2 className="section__title">Perfectly situated</h2>
          <p className="section__lead section__lead--wide">
            About 3 minutes from Olivedale Clinic, 10 minutes from the Coca-Cola
            Dome, 10 minutes from Monte Casino and Fourways, and 15 minutes from
            Sandton and the Gautrain. A luxury 8-seater mini-van shuttle can be
            arranged on request with prior booking and quote.
          </p>
        </div>
      </section>

      <section className="section lodge-cta">
        <div className="section__inner lodge-cta__inner">
          <h2 className="section__title">Book your stay</h2>
          <p className="section__lead">
            Reserve through NightsBridge for live availability and pricing, or
            reach out via Contact &amp; Bookings.
          </p>
          <BookNowButton variant="primary" />
        </div>
      </section>
    </div>
  );
}
