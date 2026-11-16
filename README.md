# Azur Dolphin Lodge

Marketing website for Azur Dolphin Lodge with a prepared **NightsBridge** booking architecture.

## Stack

- Vite + React + TypeScript
- React Router
- Static build for **GoDaddy** (Apache) hosting — not Netlify

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

Upload the contents of `dist/` to your GoDaddy hosting root after `npm run build`. The included `public/.htaccess` enables SPA routing.

## Booking integration

See [BOOKING.md](BOOKING.md). Configuration lives in `src/config/booking.ts` and stays disabled until the client supplies official NightsBridge details.
