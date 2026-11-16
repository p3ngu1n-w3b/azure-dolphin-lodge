# NightsBridge Booking Integration

Azur Dolphin Lodge (Klein Brak / Garden Route) uses **NightsBridge** as its external accommodation booking platform.

## Current status

Integration is **pending** confirmation of the correct property account:

- `provider`: `nightsbridge`
- `enabled`: `false`
- `bookingUrl`: `null`
- `widgetCode`: `null`
- `mode`: `link`

While disabled, **Book Now** remains visible and routes guests to Contact & Bookings (`/contact#book`) with a clear “booking coming soon” message. The site never shows fake availability or pricing.

## Important

Do **not** reuse booking URLs from unrelated properties. Enable booking only after the client supplies the official Azur Dolphin Lodge NightsBridge booking URL or widget code.

## Connecting when details arrive

1. Verify the correct property / BBID with the client.
2. Confirm **link** vs **embed** mode.
3. Update `src/config/booking.ts`:

```ts
export const bookingConfig: BookingConfig = {
  provider: "nightsbridge",
  enabled: true,
  bookingUrl: "https://book.nightsbridge.com/YOUR_BBID", // client-supplied
  widgetCode: null,
  mode: "link",
};
```

4. Rebuild and deploy `dist/` to GoDaddy.
5. Test dates, guests, availability, pricing, and mobile booking.

## Security

- Never hardcode login passwords or API secrets in frontend source.
- Never commit secrets to Git. `.env` / `.env.*` are gitignored.
- Only the public booking URL / embed src may live in frontend config.

## Hosting

Static build for **GoDaddy** (Apache). Upload `dist/` after `npm run build`.
