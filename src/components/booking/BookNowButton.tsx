import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  BOOKING_SECTION_PATH,
  bookingConfig,
  getBookingHref,
  isBookingLive,
} from "../../config/booking";

type BookNowButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "nav";
  children?: ReactNode;
  onNavigate?: () => void;
};

export function BookNowButton({
  className = "",
  variant = "primary",
  children = "Book Now",
  onNavigate,
}: BookNowButtonProps) {
  const live = isBookingLive();
  const href = getBookingHref();
  const classes = `book-now book-now--${variant} ${className}`.trim();

  if (live && bookingConfig.mode === "link" && href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
      >
        {children}
      </a>
    );
  }

  // Pending, or live embed mode: send guests to the Contact booking section
  return (
    <Link className={classes} to={BOOKING_SECTION_PATH} onClick={onNavigate}>
      {children}
    </Link>
  );
}
