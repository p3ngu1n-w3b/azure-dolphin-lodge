import { BookNowButton } from "../components/booking/BookNowButton";

export function LodgePage() {
  return (
    <div className="page">
      <header className="page-hero">
        <img
          className="page-hero__image"
          src="/images/suite-light.jpg"
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
            Tranquil valley living just minutes from the beach — a private
            Garden Route base for quiet comfort and privacy.
          </p>
        </div>
      </header>

      <section className="section lodge-overview">
        <div className="section__inner lodge-overview__inner">
          <h2 className="section__title">The space</h2>
          <p className="section__lead section__lead--wide">
            Azur Dolphin Lodge features its own private entrance and includes
            everything you need for a relaxing self-catering stay along the
            Garden Route.
          </p>
        </div>
      </section>

      <section className="section lodge-moments">
        <div className="section__inner">
          <p className="section__eyebrow">Inside &amp; out</p>
          <h2 className="section__title">What you will find</h2>
          <div className="moments">
            <article className="moment">
              <h3>Bedroom</h3>
              <p>
                Spacious bedroom furnished with a comfortable king-size bed.
              </p>
            </article>
            <article className="moment">
              <h3>Bathroom</h3>
              <p>
                Full, expansive bathroom equipped with a bath, shower, basin,
                and bidet.
              </p>
            </article>
            <article className="moment">
              <h3>Kitchen &amp; living</h3>
              <p>
                Well-equipped kitchen with modern amenities and a full-size
                fridge, alongside a sleeper couch that converts into a double
                bed.
              </p>
            </article>
            <article className="moment">
              <h3>Outdoor area</h3>
              <p>
                A private garden space featuring a picnic bench and chairs —
                ideal for alfresco dining or relaxing with a sundowner.
              </p>
            </article>
            <article className="moment">
              <h3>Parking &amp; storage</h3>
              <p>
                One dedicated parking spot, plus secure lock-up space available
                for standard-sized trailers (up to 2.6 m long × 1.55 m wide).
              </p>
            </article>
            <article className="moment">
              <h3>Stay times</h3>
              <p>Check-in from 2:00 pm. Check-out by 10:00 am.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section lodge-gallery">
        <div className="section__inner lodge-gallery__grid">
          <figure className="lodge-gallery__wide">
            <img
              src="/images/deck-morning.jpg"
              alt="Private outdoor seating for meals and sundowners"
              loading="lazy"
            />
            <figcaption>Private garden seating for outdoor meals</figcaption>
          </figure>
          <figure>
            <img
              src="/images/hero-coast.jpg"
              alt="Garden Route coast near Klein Brak"
              loading="lazy"
            />
            <figcaption>Coastal convenience near Klein Brak</figcaption>
          </figure>
        </div>
      </section>

      <section className="section lodge-overview">
        <div className="section__inner lodge-overview__inner">
          <h2 className="section__title">Location &amp; convenience</h2>
          <p className="section__lead section__lead--wide">
            Centrally situated between George and Mossel Bay, Azur Dolphin Lodge
            gives you the best of both worlds — serene valley living with
            beaches, shops, and attractions just a short drive away.
          </p>
          <ul className="detail-list">
            <li>
              <strong>Coastal spots:</strong> 1.4 km from scenic ocean
              viewpoints with benches, and 3.5 km from the Klein Brak Blue Flag
              Beach, where the river meets the sea.
            </li>
            <li>
              <strong>Nearby towns &amp; travel:</strong> 10 km from Hartenbos,
              18 km from Mossel Bay, 28 km from George Airport, and 33 km from
              George Central.
            </li>
            <li>
              <strong>Everyday essentials:</strong> Just 2 km from a local Pick
              n Pay, bottle store, and pharmacy. Checkers Sixty60 and Pick n Pay
              asap! deliver directly to the lodge.
            </li>
            <li>
              <strong>Shopping &amp; dining:</strong> Only 8 km from{" "}
              <a
                href="https://gardenwalk.co.za/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garden Walk Shopping Centre
              </a>{" "}
              in Hartenbos — Checkers, Food Lover&apos;s Market, Agrimark,
              Dis-Chem, Clicks, restaurants, and takeaways.
            </li>
          </ul>
          <p className="section__lead section__lead--wide location-links">
            Explore{" "}
            <a
              href="https://visitmosselbay.co.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              local tourist activities
            </a>{" "}
            with Visit Mossel Bay. Live music links for the Garden Route will be
            added soon.
          </p>
        </div>
      </section>

      <section className="section lodge-cta">
        <div className="section__inner lodge-cta__inner">
          <h2 className="section__title">Book your stay</h2>
          <p className="section__lead">
            Whether you want Garden Route adventures or simply to unwind in
            nature, Azur Dolphin Lodge is the ideal coastal base.
          </p>
          <BookNowButton variant="primary" />
        </div>
      </section>
    </div>
  );
}
