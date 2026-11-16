import { getBookingEmbedSrc, isBookingLive } from "../../config/booking";
import { BookingPendingNotice } from "./BookingPendingNotice";

type BookingEmbedProps = {
  title?: string;
};

/**
 * Renders the official NightsBridge iframe only when booking is live and an
 * embed src is configured. Otherwise shows the pending notice — never fake
 * availability or pricing.
 */
export function BookingEmbed({
  title = "Book your stay",
}: BookingEmbedProps) {
  const src = getBookingEmbedSrc();

  if (!isBookingLive() || !src) {
    return <BookingPendingNotice />;
  }

  return (
    <div className="booking-embed">
      <h2 className="booking-embed__title">{title}</h2>
      <p className="booking-embed__hint">
        Select dates and guests below. Availability and pricing are provided by
        NightsBridge.
      </p>
      <div className="booking-embed__frame-wrap">
        <iframe
          className="booking-embed__frame"
          src={src}
          title="NightsBridge booking"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
