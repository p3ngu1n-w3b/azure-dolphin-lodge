import {
  coastalLocations,
  everydayLocations,
  GARDEN_WALK_URL,
  LIVE_MUSIC_URL,
  travelLocations,
  VISIT_MOSSEL_BAY_URL,
  type LocationPoint,
} from "../data/locations";

type LocationDistancesProps = {
  showIntro?: boolean;
  compact?: boolean;
};

function LocationGroup({
  title,
  points,
  linkFor,
  columns,
}: {
  title: string;
  points: LocationPoint[];
  linkFor?: string;
  columns?: "travel";
}) {
  return (
    <div className="location-group">
      <h3 className="location-group__title">{title}</h3>
      <ul
        className={`location-grid${columns === "travel" ? " location-grid--travel" : ""}`}
      >
        {points.map((point) => (
          <li key={point.name} className="location-point">
            <p className="location-point__distance">{point.distance}</p>
            <p className="location-point__name">
              {linkFor === point.name ? (
                <a
                  href={GARDEN_WALK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {point.name}
                </a>
              ) : (
                point.name
              )}
            </p>
            <p className="location-point__detail">{point.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function LocationDistances({
  showIntro = true,
  compact = false,
}: LocationDistancesProps) {
  return (
    <div className={`location-distances ${compact ? "is-compact" : ""}`}>
      {showIntro ? (
        <p className="section__lead section__lead--wide">
          Centrally situated between George and Mossel Bay, Azur Dolphin Lodge
          gives you the best of both worlds — serene valley living with beaches,
          shops, and attractions just a short drive away.
        </p>
      ) : null}

      <LocationGroup title="Coastal spots" points={coastalLocations} />
      <LocationGroup
        title="Towns &amp; travel"
        points={travelLocations}
        columns="travel"
      />
      <LocationGroup
        title="Everyday essentials"
        points={everydayLocations}
        linkFor="Garden Walk Shopping Centre"
      />

      <p className="section__lead section__lead--wide location-links">
        Explore{" "}
        <a
          href={VISIT_MOSSEL_BAY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          local tourist activities
        </a>{" "}
        with Visit Mossel Bay. Discover{" "}
        <a href={LIVE_MUSIC_URL} target="_blank" rel="noopener noreferrer">
          live entertainment
        </a>{" "}
        on the Garden Route live music videos group.
      </p>
    </div>
  );
}
