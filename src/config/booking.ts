/**
 * Central NightsBridge booking configuration.
 *
 * Public booking URL sourced from the existing littlefieldsuite.com site
 * (BBID 15329). Verify with the client that this remains the correct property
 * account under the Azur Dolphin Lodge brand before production launch.
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
 * Public booking link from https://www.littlefieldsuite.com/
 * https://www.nightsbridge.co.za/bridge/book?bbid=15329
 */
export const bookingConfig: BookingConfig = {
  provider: "nightsbridge",
  enabled: true,
  bookingUrl: "https://www.nightsbridge.co.za/bridge/book?bbid=15329",
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
