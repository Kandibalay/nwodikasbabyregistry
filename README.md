# Baby Registry (Next.js)

A gift registry where guests pick an item and choose to give the **full**, **75%**, **half**, or **quarter** price. Every reservation is saved with the guest's name, phone, item, and amount, viewable by you at `/admin`.

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
```
Production:
```bash
npm run build && npm run start
```

## Pages
- `/` — the registry guests use.
- `/admin` — your private view of who picked what. Includes a **Download CSV** button. (Put this behind a password before going public — see below.)

## Where the data lives
Reservations are saved to `data/claims.json` on the server. Nothing else is needed — it works out of the box.

## Swap in real photos
The item images are in `public/items/*.svg` and the hero baby is `public/baby.svg`. Replace any of them with your own `.jpg`/`.png`, then update the `img` path for that item in `app/items.js`. Example: drop `public/items/bassinet.jpg` and set `img: "/items/bassinet.jpg"`.

## Edit items / prices
All items, prices, and the four contribution tiers live in `app/items.js`.

## Before sharing publicly
- **Protect `/admin`.** Right now anyone with the link can see it. Easiest option on Vercel: add Vercel Password Protection, or add a simple auth check.
- **Hosting note:** the JSON file works on a normal server (or `npm run start`). On serverless hosts like Vercel the filesystem is read-only, so for that you'd move storage to a database or Google Sheets — ask and I'll wire it up.
