# NightsBridge Booking Integration

Azur Dolphin Lodge uses **NightsBridge** as its external accommodation booking platform.

## Current status

Booking is **enabled** using the public NightsBridge link published on the previous site ([littlefieldsuite.com](https://www.littlefieldsuite.com/)):

- `provider`: `nightsbridge`
- `enabled`: `true`
- `bookingUrl`: `https://www.nightsbridge.co.za/bridge/book?bbid=15329`
- `widgetCode`: `null`
- `mode`: `link`

**Verify with the client** that BBID `15329` remains the correct property account under the Azur Dolphin Lodge brand before calling this production-final.

## Supported integration methods

1. **Booking link** — public engine URL (currently in use)
2. **Booking widget / iframe** — official embed src from NightsBridge (optional later)

Do not invent BBID values, API endpoints, or credentials. Do not reverse-engineer the platform. Never commit login passwords or API secrets.

## Switching to embed mode later

If the client supplies an official iframe/widget src:

```ts
export const bookingConfig: BookingConfig = {
  provider: "nightsbridge",
  enabled: true,
  bookingUrl: "https://www.nightsbridge.co.za/bridge/book?bbid=15329",
  widgetCode: "https://book.nightsbridge.com/15329", // only if client confirms
  mode: "embed",
};
```

## Security

- Only the public booking URL / embed src belongs in frontend config.
- Login credentials stay offline with the client — never in this repo.
- `.env` / `.env.*` are gitignored.

## Hosting

Static build for **GoDaddy** (Apache). Upload `dist/` after `npm run build`. `public/.htaccess` enables SPA routing.
