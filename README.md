# HALK Landing

<<<<<<< HEAD
Marketing/download site for the **HALK** (Household Finance Kernel) Android app.  
Built with React 19 + Vite + Tailwind CSS v4.
=======
Marketing/download site for the **HALK** (Household Finance Kernel) Android app. Built with React + Vite + Tailwind CSS v4.
>>>>>>> origin/main

## Stack

- **React 19 + Vite** — app shell
- **Tailwind CSS v4** (`@tailwindcss/vite`) — styling, dark theme by default
- **react-router-dom** — `/`, `/privacy`, `/terms`
<<<<<<< HEAD
- **react-helmet-async** — dynamic SEO (title / description / OG / Twitter / geo meta / JSON-LD) per page
- **lucide-react** / **react-icons** — icons
- Content-driven from `src/data/site.json` — no copy is hardcoded in components

## Dynamic SEO & GEO (Generative Engine Optimization)

### SEO (`src/components/SEO.jsx`)

Per-page meta is rendered dynamically from `site.json` + optional props:

- Title template, description, keywords, canonical, robots
- Open Graph + Twitter/X cards
- Theme / app meta for mobile
- **Rich JSON-LD**:
  - `SoftwareApplication` (name, version, download URL, offers, features)
  - `FAQPage` (from `site.faq` on the home page)
  - `WebSite` + `Organization`
- `hreflang` + `x-default` alternates

This helps both classic crawlers (Google, Bing) and generative engines (Google AI Overviews, Perplexity, ChatGPT search, etc.).

### GEO (`src/hooks/useGeo.js`)

Client-side IP geolocation (`ipapi.co`) detects the visitor’s country and:

- Adjusts the hero trust line (“Trusted by households in *India*”)
- Feeds `geo.region` / `geo.placename` meta tags in `SEO.jsx`
- Chooses a currency symbol when known (₹, $, £, AED, …)

Fails silently and falls back to `site.json` → `geo` defaults if the API is unreachable or rate-limited. Results are cached in `sessionStorage`.

=======
- **react-helmet-async** — dynamic SEO (title/description/OG/Twitter/geo meta/JSON-LD) per page
- **lucide-react** / **react-icons** — icons
- Content-driven from `src/data/site.json` — no copy is hardcoded in components

>>>>>>> origin/main
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

<<<<<<< HEAD
## The APK

The APK lives at `public/downloads/HALK.apk` (~95 MB) and is git-ignored by default. Before deploying:

1. Upload the APK to a CDN, GitHub Release, or object storage (S3 / R2 / Cloudflare) with public access, **or**
2. Keep it inside the Docker image / static host if your plan allows large files.

Then either:

- Leave `download.apkUrl` as `/downloads/HALK.apk` (served from this site), or
- Point `download.apkUrl` in `src/data/site.json` to the external URL.

## Deploy with Coolify (Docker)

A production multi-stage `Dockerfile` and `nginx.conf` are included.

### Coolify setup

1. Create a new **Application** → **Docker** (or Dockerfile).
2. Connect your Git repo (or upload this project).
3. Build pack / Dockerfile path: `Dockerfile` (root).
4. Port: **80**.
5. (Optional) Domain: set your domain (e.g. `halk.mugavai.co`) and enable HTTPS.
6. Deploy.

Coolify will build the image (Node build → nginx serve) and run it.

### Local Docker test

```bash
docker build -t halk-landing .
docker run --rm -p 8080:80 halk-landing
# open http://localhost:8080
```

### SPA routing

`nginx.conf` rewrites unknown paths to `index.html` so `/privacy` and `/terms` work without a server-side router. Large APK downloads under `/downloads/` are streamed with appropriate headers.

### Environment notes

- No runtime env vars are required for the static site.
- If you change `seo.siteUrl` in `site.json`, rebuild so canonical / OG / JSON-LD stay correct.
- The APK is included in the image by default (comment the APK line in `.dockerignore` if you want to exclude it and host the APK elsewhere).

## Other static hosts

Vercel, Netlify, Cloudflare Pages also work. Configure an SPA rewrite (all paths → `/index.html`). Vercel/Netlify do this automatically for Vite projects.
=======
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
>>>>>>> origin/main
