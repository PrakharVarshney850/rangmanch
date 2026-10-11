# Hosting on Vercel

Vercel is built by the team behind Next.js, so this site deploys there with
**no code changes at all**. It is free, faster than shared hosting, and gives
you automatic HTTPS.

> **Already have the project on your laptop?** Nothing needs editing. The
> existing `output: "export"` config works on Vercel as-is — Vercel detects
> Next.js, runs the build, and serves the generated `out/` folder.

---

## Option A — Vercel CLI (fastest, about 2 minutes)

Good for getting something live immediately.

```bash
npm i -g vercel     # once per machine
cd rangmanch
vercel              # preview deploy; accept the prompts
vercel --prod       # the real, public deploy
```

The first run asks a few questions — accept every default, as Vercel
auto-detects the framework and build settings. You get a URL like
`rangmanch.vercel.app` straight away.

To ship a change later: run `npm run build` to check it locally, then
`vercel --prod` again.

---

## Option B — GitHub (recommended)

Slightly more setup, but then **every `git push` redeploys the site by itself**,
and you get a full history you can roll back.

### 1. Push the project to GitHub

```bash
cd rangmanch
git init
git add .
git commit -m "Rangmanch portfolio site"
```

Create an empty repository at **https://github.com/new** — do *not* tick
"Add a README", as the project already has one. Then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/rangmanch.git
git branch -M main
git push -u origin main
```

> `node_modules`, `.next` and `out` are already in `.gitignore`, so only the
> ~2.6 MB of real source gets pushed.

### 2. Import it into Vercel

1. Go to **https://vercel.com/new**
2. Sign in with GitHub
3. **Import Git Repository** → choose `rangmanch`
4. **Leave every build setting alone** — the auto-detected values are correct
5. Click **Deploy**

Live in about a minute.

---

## Set the site URL

Before the first production deploy, in **Vercel → your project → Settings →
Environment Variables**, add:

| Name | Value | Environments |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.therangmanch.in` | Production, Preview, Development |

This drives canonical URLs, Open Graph/social-share previews, `sitemap.xml` and
`robots.txt`. If you add it *after* deploying, hit **Redeploy** so it takes
effect.

> Use the `www` host — the apex `therangmanch.in` serves a 308 redirect to it.
> Do **not** use `rangmanch.in` (without the "the"); that is an unrelated
> applied-theatre company, and pointing canonical tags there would credit your
> content to their domain.

> This lives in the dashboard rather than in the repo because `.env.local` is
> gitignored — secrets and per-environment values should never be committed.

---

## Connect your GoDaddy `.in` domain

You keep the domain at GoDaddy. Only the DNS records change.

### 1. Add the domain in Vercel

1. **Settings → Domains**
2. Type `therangmanch.in` → **Add**
3. Vercel shows the exact records to create — typically:

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> Use the values Vercel actually shows you — they can differ from the above.

### 2. Add those records at GoDaddy

1. **GoDaddy → My Products → Domains →** click **DNS** beside your domain
2. Delete any existing `A` record on `@` that points somewhere else
3. Add the records from Vercel
4. **Save**

### 3. Wait

Usually 10–30 minutes, occasionally a few hours. Vercel's Domains page shows a
green check when it has propagated. **HTTPS is issued automatically** — there is
no SSL step to do yourself.

---

## Updating the site

**Option A (CLI):** `vercel --prod`

**Option B (GitHub):**

```bash
git add .
git commit -m "Describe the change"
git push
```

Vercel rebuilds and redeploys on its own. Every deploy gets its own preview URL,
and you can instantly roll back from **Deployments** if something looks wrong.

---

## Vercel vs. GoDaddy hosting

| | Vercel | GoDaddy cPanel |
| --- | --- | --- |
| Cost | Free | Needs a paid hosting plan |
| HTTPS | Automatic | Manual AutoSSL |
| Speed | Global CDN | One shared server |
| Updating | `git push` | Re-upload files by hand |
| Rollback | One click | Restore from a backup |

For this site Vercel is the better option. See **[DEPLOY.md](./DEPLOY.md)** if
you would rather use GoDaddy hosting.

---

## Notes specific to this project

- **`public/.htaccess` is ignored on Vercel.** It is an Apache file; Vercel
  handles caching, compression and headers itself. Harmless — leave it in place
  so the GoDaddy route still works.
- **Showreel videos still stream from Google Drive.** Nothing about hosting
  changes that. Keep the Drive folder shared as *"Anyone with the link"*.
- **`npm run preview` is still the best local check** before deploying — it
  serves the real built output at http://localhost:4500.

---

## Troubleshooting

**Build fails on Vercel but works locally**
Open the build log in Vercel. Usually it is a case-sensitivity problem: Windows
treats `Logo.webp` and `logo.webp` as the same file, Vercel's Linux builders do
not. Make sure every import matches the real filename exactly.

**Site loads but social previews show the wrong URL**
`NEXT_PUBLIC_SITE_URL` is missing or was added after the deploy. Add it, then
**Redeploy**.

**Domain stuck on "Invalid Configuration"**
The DNS records have not propagated yet, or an old `A` record is still present at
GoDaddy. Remove conflicting records and wait.

**Want the `www` version to be the main one**
In **Settings → Domains**, add both, then use the **⋯** menu to pick which one
redirects to the other.
