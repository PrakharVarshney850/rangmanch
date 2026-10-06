# Hosting on your GoDaddy `.in` domain

Step-by-step guide to putting the Rangmanch site live.

**Before you start:** make sure the site runs on your laptop first — see **[SETUP.md](./SETUP.md)**.

---

## What kind of GoDaddy plan do you need?

This site is **static** — plain HTML, CSS and JavaScript with no database and no server code. That means it works on the cheapest hosting available.

| GoDaddy product | Works? | Notes |
| --- | --- | --- |
| **Web Hosting** (Economy / Deluxe, cPanel) | ✅ Yes | The normal choice. Follow Method A. |
| **Website Builder** | ❌ No | Will not accept uploaded code — you would need to switch plans. |
| **Domain only, no hosting** | ✅ Yes | Use Method B, which is free and faster. |

> **Only bought the domain?** Jump to **Method B** at the bottom. You keep the GoDaddy domain but host the files free on Cloudflare Pages, which also gives you a global CDN and automatic HTTPS.

---

# Method A — GoDaddy cPanel hosting

## Step 1 — Point the site at your domain

In the project folder, create a file named **`.env.local`** with this one line, using your real domain:

```
NEXT_PUBLIC_SITE_URL=https://rangmanch.in
```

No trailing slash. This sets the links Google and social-media previews use.

> Not sure of the exact domain? It is listed in **GoDaddy → My Products → Domains**.

## Step 2 — Build the site

In the project folder, run:

```bash
npm run build
```

When it finishes you will have an **`out`** folder — around 66 files, 3.3 MB. That is the finished website.

Check it first:

```bash
npm run preview
```

Open **http://localhost:4500** and click around. What you see here is exactly what visitors will get.

## Step 3 — Open cPanel File Manager

1. Sign in at **https://godaddy.com**
2. **My Products → Web Hosting →** click **Manage** next to your plan
3. Click **cPanel Admin**
4. Under *Files*, open **File Manager**
5. Double-click the **`public_html`** folder

`public_html` is the folder that becomes your website.

## Step 4 — Turn on hidden files ⚠️

**Do not skip this.** The site includes a file called `.htaccess`, and files starting with a dot are hidden by default — so it would silently fail to upload.

1. Click **Settings** (top-right of File Manager)
2. Tick **Show Hidden Files (dotfiles)**
3. Click **Save**

## Step 5 — Clear out the old files

If `public_html` already has files in it — GoDaddy usually leaves a placeholder `index.html` or a `cgi-bin` folder:

1. Press **Ctrl + A** to select everything
2. Click **Delete**
3. Tick *Skip the trash* and confirm

> Already have another site on this domain? Stop and back it up first.

## Step 6 — Upload

1. On your laptop, open the **`out`** folder
2. Select **everything inside it** — press Ctrl + A
3. In cPanel File Manager, click **Upload**
4. Drag the selected files into the upload window
5. Wait for every row to reach 100%
6. Click **Go Back to /home/.../public_html**

### ⚠️ The most common mistake

Upload the **contents** of `out`, not the `out` folder itself.

```
✅ CORRECT                    ❌ WRONG
public_html/                  public_html/
  ├── index.html                └── out/
  ├── 404.html                       ├── index.html
  ├── .htaccess                      └── ...
  └── _next/
```

If you do it wrong the site appears at `rangmanch.in/out/` instead of `rangmanch.in`. Just move the files up one level to fix it.

### Faster for lots of files

Zip the contents of `out` on your laptop, upload the single `.zip`, then right-click it in File Manager → **Extract** → delete the zip afterwards.

## Step 7 — Check it

Visit **https://rangmanch.in**.

Confirm:
- The page loads with the gold-on-black design
- Posters appear in the Showreel section
- Clicking a video opens the player
- `rangmanch.in/some-made-up-page` shows the branded 404 page

> Nothing showing yet? DNS can take a few hours on a brand-new domain. Try a different browser or your phone on mobile data — your computer may have cached the old page.

## Step 8 — Turn on HTTPS 🔒

Without this, browsers show *"Not secure"* next to your domain.

1. In cPanel, open **SSL/TLS Status**
2. Select your domain, click **Run AutoSSL**
3. Wait a few minutes, then confirm **https://rangmanch.in** loads with a padlock

Once the padlock appears, force every visitor onto HTTPS:

1. In File Manager, right-click **`.htaccess`** → **Edit**
2. Find the block at the top marked `# ---- HTTPS ----`
3. Delete the `#` from the start of each line between `<IfModule mod_rewrite.c>` and `</IfModule>`
4. Click **Save Changes**

It should end up looking like this:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

  RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
  RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
</IfModule>
```

Now test `http://rangmanch.in` — it should jump to `https://`.

> If the site breaks after this, undo it: put the `#` marks back and save. Some shared plans handle redirects differently.

---

## Updating the site later

Whenever you change the content:

```bash
npm run build
```

Then upload the new `out` contents to `public_html`, overwriting when asked.

You only need to replace **`index.html`**, **`404.html`** and the **`_next`** folder — everything else rarely changes.

> **Still seeing the old version?** Press **Ctrl + Shift + R** to hard-refresh. The site tells browsers to always re-check the HTML, so it usually updates straight away.

---

# Method B — Cloudflare Pages (free, recommended)

Use this if you only bought the **domain**, or if you want a faster site. It is free, gives automatic HTTPS, and serves from servers worldwide. **You keep the GoDaddy domain** — only the files live elsewhere.

## Step 1 — Build

```bash
npm run build
```

## Step 2 — Upload

1. Sign up free at **https://pages.cloudflare.com**
2. **Create a project → Upload assets**
3. Name it `rangmanch`
4. Drag the **`out`** folder in
5. Click **Deploy**

You get a live address like `rangmanch.pages.dev` within a minute.

## Step 3 — Connect your domain

1. In the project, go to **Custom domains → Set up a domain**
2. Enter `rangmanch.in` and follow the prompts
3. Cloudflare shows you the DNS records to add

## Step 4 — Update DNS at GoDaddy

1. **GoDaddy → My Products → Domains →** click **DNS** next to your domain
2. Add the records Cloudflare gave you
3. Wait — usually 10 minutes, occasionally a few hours

HTTPS switches on by itself. No `.htaccess` needed.

---

## Troubleshooting

**Blank white page**
The files went into `public_html/out/` instead of `public_html/`. Move everything up one level.

**Design missing, text only**
The `_next` folder did not upload or is incomplete. Re-upload it.

**404 page is the plain Apache one, not the branded page**
`.htaccess` did not upload — it is hidden. Redo **Step 4**, then re-upload it.

**Posters missing in the Showreel**
The `_next/static/media` folder is incomplete. Re-upload the whole `_next` folder.

**Videos will not play**
1. Check the Drive folder is still shared as *"Anyone with the link"*
2. Videos need an internet connection — they stream from Google Drive
3. Try an incognito window to rule out a browser extension

**"Not secure" warning**
AutoSSL has not finished or has not been run — see **Step 8**.

**Changes not appearing**
Hard-refresh with **Ctrl + Shift + R**. Confirm the new files really did overwrite the old ones in File Manager.

---

## Quick reference

| Thing | Value |
| --- | --- |
| Folder to upload | `out` (the contents, not the folder) |
| Destination | `public_html` |
| Size | ~66 files, 3.3 MB |
| Build command | `npm run build` |
| Needs Node.js on the server? | No — static files only |
| Needs a database? | No |

---

## Before you go live

- [ ] Replace the placeholder email in `src/lib/site.ts` — it is currently `partnerships@rangmanch.in` and marked `NEEDS-CONFIRMATION`
- [ ] Set your real domain in `.env.local`, then rebuild
- [ ] Confirm the Drive folder is shared as *"Anyone with the link"*
- [ ] Turn on AutoSSL and enable the HTTPS redirect
- [ ] Test on a phone as well as a desktop
