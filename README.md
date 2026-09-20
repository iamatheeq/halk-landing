# HALK Landing

Marketing/download site for the **HALK** (Household Finance Kernel) Android app. Built with React + Vite + Tailwind CSS v4.

## Stack

- **React 19 + Vite** — app shell
- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling, dark theme by default
- **react-router-dom** — `/`, `/privacy`, `/terms`
- **react-helmet-async** — dynamic SEO (title/description/OG/Twitter/geo meta/JSON-LD) per page
- **lucide-react** / **react-icons** — icons
- Content-driven from `src/data/site.json` — no copy is hardcoded in components

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Editing content

All copy, features, screenshots, FAQ, download links and SEO defaults live in [`src/data/site.json`](src/data/site.json). Edit that file to change anything on the page without touching components.

## Dynamic geo content

[`src/hooks/useGeo.js`](src/hooks/useGeo.js) calls a free IP-geolocation API (`ipapi.co`) client-side to detect the visitor's country, and:

- Adjusts the hero's trust line ("Trusted by households in *India*")
- Feeds `geo.region` / `geo.placename` meta tags in [`src/components/SEO.jsx`](src/components/SEO.jsx)

It fails silently (falls back to `site.json`'s `geo` defaults) if the API is unreachable or rate-limited.

## The APK

The APK lives at `public/downloads/HALK.apk` and is **git-ignored** (100MB is too large for a normal git repo/most static hosts' git-based deploys). Before deploying:

1. Upload the APK to a CDN, GitHub Release, or object storage (S3/R2/Cloudflare) with public access.
2. Update `download.apkUrl` in `src/data/site.json` to that URL.
3. Or, if your host supports large static files directly (e.g. via LFS or a dedicated asset bucket), keep serving it from `public/downloads/`.

## Deployment

Any static host works (Vercel, Netlify, Cloudflare Pages). Since routes like `/privacy` are client-side, configure an SPA rewrite (all paths → `/index.html`) — Vercel/Netlify do this automatically for Vite projects; for others add the equivalent rewrite rule.
