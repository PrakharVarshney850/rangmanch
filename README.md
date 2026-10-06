# Rangmanch — Portfolio Site

Marketing portfolio for **Rangmanch** ([@the_rangmanch](https://www.instagram.com/the_rangmanch)) — a live events and brand-partnerships studio operating since 2018, with 180+ events across campus, corporate and live stages in India.

Built with Next.js 16 (App Router, Turbopack), React 19 and Tailwind CSS v4. The whole site prerenders as static HTML.

> **New to the project?** Start with **[SETUP.md](./SETUP.md)** to get it running on your machine, then **[DEPLOY.md](./DEPLOY.md)** to put it online.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into out/
npm run preview    # serve out/ at http://localhost:4500
npm run lint
npm run typecheck
```

Everything the site needs is committed. On a new machine it is just
`git clone` → `npm install` → `npm run build` — nothing is fetched from
Google Drive at build time.

## Deploying to GoDaddy

Full step-by-step instructions are in **[DEPLOY.md](./DEPLOY.md)**. In short:

The site is a **static export**: `npm run build` writes a plain HTML/CSS/JS
folder to `out/` with no Node.js runtime required.

### 1. Set the domain

```bash
# .env.local  (copy from .env.example)
NEXT_PUBLIC_SITE_URL=https://yourdomain.in
```

This drives canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`.
Build *after* setting it.

### 2. Build

```bash
npm run build
```

### 3. Upload

In GoDaddy cPanel → **File Manager**, open `public_html` and upload the
**contents** of `out/` (not the `out` folder itself). Via FTP the same applies —
`index.html` must land at the root of `public_html`.

`out/.htaccess` ships with the export and handles the 404 page, caching,
compression and security headers. File Manager hides dotfiles by default:
enable **Settings → Show Hidden Files** so `.htaccess` uploads.

### 4. Turn on HTTPS

Activate the free SSL certificate in cPanel, then uncomment the HTTPS and
www-redirect block at the top of `.htaccess`.

### Alternative hosts

The same `out/` folder deploys unchanged to Netlify, Cloudflare Pages or
Vercel — drag-and-drop the folder, then point the GoDaddy domain's DNS at the
host. That route adds a global CDN and automatic HTTPS at no cost; GoDaddy
keeps the domain either way.

## Project structure

```
src/
  app/
    layout.tsx            Fonts, metadata, Organization JSON-LD
    page.tsx              Section composition for the single page
    globals.css           Design system: tokens, utilities, keyframes
    icon.png              Favicon (generated from the logo)
    opengraph-image.png   Social card (generated)
    sitemap.ts robots.ts
  assets/
    brand/                Logos, co-branded lockups and posters
    fonts/                Self-hosted Cinzel + Inter (OFL 1.1)
  components/
    sections/             Hero, About, Services, Work, Showreel, Contact, …
    reveal.tsx            Scroll-reveal wrapper (IntersectionObserver)
    count-up.tsx          Number roll-up on first view
    tilt-card.tsx         Pointer-reactive 3D tilt + gold sheen
    curtain-intro.tsx     CSS-only velvet curtain on load
    spotlight-cursor.tsx  Follow-spot that tracks the pointer
  lib/
    site.ts               Brand facts, links, contact details
    content.ts            Services, verticals, work, roster, stats, FAQ
    showreel.ts           Aftermovie catalogue (Drive IDs + local posters)
```

## Showreel

`#showreel` plays the full भारत Bass Festival campus aftermovie archive — 26
films pulled from the festival's public Drive folder and its subfolders.

**Videos are never downloaded or re-hosted.** Each card opens Drive's own embed
player (`https://drive.google.com/file/<id>/preview`) in a lightbox, and the
iframe is created only on click — so nothing streams until a visitor asks for
it. The Drive folder stays the single source of truth; add a file there and it
keeps playing from there.

**Poster frames are local**, in `src/assets/showreel/` as WebP (~490 KB for the
whole site). This is not a preference — Drive redirects its thumbnail endpoint
to `lh3.googleusercontent.com`, which browsers block cross-origin
(`ERR_BLOCKED_BY_ORB`); 12 of 16 failed when hot-linked. Local posters also keep
the page correct on unreliable venue wi-fi.

### Adding a video

1. Put the file in the Drive folder and copy its file ID.
2. Save a poster: `https://drive.google.com/thumbnail?id=<id>&sz=w1600`, convert
   to WebP, drop it in `src/assets/showreel/`. Check it isn't a black fade-in
   frame first.
3. Add an entry to [`src/lib/showreel.ts`](src/lib/showreel.ts).

`showreelPreviewCount` controls how many cards show before the
"Show all" button reveals the rest.

> **Playback needs internet.** Posters and the rest of the page work offline,
> but the films stream from Google Drive. For an offline venue demo, download
> the key aftermovies ahead of time.

## Design system

The palette and type come straight from the Rangmanch mark:

- **Stage** — near-black greys for the house (`--color-stage-*`)
- **Gold** — the proscenium trim used for accents and CTAs (`--color-gold-*`)
- **Spectrum** — the six logo panels: red, orange, yellow, green, blue, magenta
- **Curtain** — deep velvet reds used by the intro animation
- **Display type** — Cinzel, a Trajan-style serif matching the logo wordmark
- **Body type** — Inter

Custom Tailwind v4 utilities live in `globals.css`: `container-stage`, `text-foil`, `text-spectrum`, `glass`, `eyebrow`, `grain`, `reveal`, `rule-spectrum` and others.

## Editing content

Almost all copy lives in two files — you should rarely need to touch a component:

- [`src/lib/site.ts`](src/lib/site.ts) — name, tagline, social links, contact details
- [`src/lib/content.ts`](src/lib/content.ts) — services, verticals, case studies, roster, process, stats, market data and FAQ

### Roster model

The roster is deliberately split into three distinct ideas — keep them separate when adding entries:

| Export | Meaning | Current entries |
| --- | --- | --- |
| `brands` | Clients we activate **for** | Bentodent, AbhiBus, Red Bull |
| `partners` | Stages and media we build **with** | भारत Bass Festival, 9XM, 9X Tashan |
| `recentEvent` | The latest show, with its venue | Elevate 3.0 at SVIET, Sept 2026 |
| `campusNetwork` | Campuses the BBF stage tours | IIT Ropar, NIT Durgapur, … |

Venues such as SVIET are **not** partners — they are where an event happened. Add new ones to `recentEvent` or `campusNetwork`, not to `partners`.

### Before going live

Two values are placeholders and are marked `NEEDS-CONFIRMATION` in the source:

1. `site.contact.email` — currently `partnerships@rangmanch.in`
2. `site.url` — currently `https://rangmanch.in`, used for canonical URLs, OG tags and the sitemap

The contact phone number comes from the Rangmanch business card and is live on the site. `stats` carries the headline numbers — 180+ events and a 2018 founding date; "years on stage" is derived from `site.founded` so it never goes stale.

## Accessibility & motion

- Every animation is disabled under `prefers-reduced-motion: reduce`, including the curtain intro
- The mobile drawer traps background scroll and closes on `Escape`
- Focus-visible rings use the gold accent at a 2px outline

## Brand assets

`src/assets/brand/` holds images derived from creatives supplied by Rangmanch. Partner names and marks are the property of their respective owners and appear here as collaboration credits.

Fonts are self-hosted rather than fetched from Google at build time, so builds work on restricted networks and there is no third-party request at runtime. Cinzel and Inter are both SIL Open Font License 1.1.
