import {
  LODGE_ADDRESS,
  LODGE_MAPS_EMBED_URL,
  LODGE_MAPS_LINK_URL,
} from "../data/locations";

export function LodgeMap() {
  return (
    <div className="lodge-map">
      <div className="lodge-map__frame-wrap">
        <iframe
          className="lodge-map__frame"
          src={LODGE_MAPS_EMBED_URL}
          title="Azur Dolphin Lodge location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="lodge-map__caption">
        <a
          href={LODGE_MAPS_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {LODGE_ADDRESS}
        </a>
      </p>
    </div>
  );
}
