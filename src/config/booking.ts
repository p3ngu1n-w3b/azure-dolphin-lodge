/**
 * Central NightsBridge booking configuration.
 *
 * Azur Dolphin Lodge is a Garden Route / Klein Brak property.
 * Do not use booking URLs from unrelated properties.
 * Enable only when the client confirms the correct NightsBridge BBID / widget.
 */

export type BookingProvider = "nightsbridge";

export type BookingMode = "link" | "embed";

export type BookingConfig = {
  provider: BookingProvider;
  /** Flip to true only after a real booking URL or widget is confirmed. */
  enabled: boolean;
  /** Official NightsBridge booking engine URL */
  bookingUrl: string | null;
  /** Optional official embed/iframe src — null until supplied */
  widgetCode: string | null;
  /** How CTAs behave when booking is live */
  mode: BookingMode;
};

/**
 * PLACEHOLDER — awaiting Azur Dolphin Lodge NightsBridge details from the client.
 */
export const bookingConfig: BookingConfig = {
  provider: "nightsbridge",
  enabled: false,
  bookingUrl: null,
  widgetCode: null,
  mode: "link",
};

export function isBookingLive(): boolean {
  return (
    bookingConfig.enabled &&
    Boolean(bookingConfig.bookingUrl || bookingConfig.widgetCode)
  );
}

/** Returns the public booking URL when live in link mode; otherwise null. */
export function getBookingHref(): string | null {
  if (!isBookingLive()) return null;
  if (bookingConfig.mode === "link" && bookingConfig.bookingUrl) {
    return bookingConfig.bookingUrl;
  }
  return null;
}

/**
 * Returns the official iframe/embed src when live in embed mode.
 * Prefers widgetCode; falls back to bookingUrl if that is the embed src.
 */
export function getBookingEmbedSrc(): string | null {
  if (!isBookingLive() || bookingConfig.mode !== "embed") return null;
  return bookingConfig.widgetCode ?? bookingConfig.bookingUrl;
}

/** In-app path for pending state or embed mode booking section. */
export const BOOKING_SECTION_PATH = "/contact#book";
