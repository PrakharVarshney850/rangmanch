/**
 * Resizes and recompresses source images to the dimensions they are actually
 * displayed at.
 *
 * `output: "export"` disables next/image optimisation, so every asset is
 * served exactly as committed — no srcset, no per-device resizing. The sizes
 * below come from measuring the rendered boxes at 390 / 834 / 1920 wide and
 * allowing 2x for high-density screens.
 *
 * Originals are kept in .image-originals/ so this is reversible.
 * Run from the project root:  node scripts/optimise-images.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const KB = (n) => `${(n / 1024).toFixed(1)} KB`;

/**
 * Derived assets: written to a new path rather than optimised in place.
 *
 * The hero backdrop is the page's LCP element. It uses its own heavily
 * compressed copy instead of sharing the full-quality showreel poster —
 * it renders at 30% opacity under two gradient washes, so the loss is
 * invisible, and it halves the bytes on the critical path.
 */
const derived = [
  {
    from: "src/assets/showreel/iit-ropar.webp",
    to: "src/assets/brand/hero-backdrop.webp",
    width: 960,
    quality: 50,
    why: "LCP backdrop, shown at 30% opacity behind gradients",
  },
];

/**
 * In-place optimisation. `quality` is tuned per role: a poster the visitor
 * looks straight at keeps a high setting, while the favicon can drop to a
 * palette.
 */
const targets = [
  {
    file: "src/assets/brand/rangmanch-logo.webp",
    width: 224, // rendered at most 112px, in the contact section
    quality: 88,
    why: "900x900 served for a 112px box",
  },
  {
    file: "src/assets/showreel/ccet-chandigarh.webp",
    width: 770,
    quality: 78,
    why: "1280 wide served for a 385px box",
  },
  {
    file: "src/assets/showreel/ayushmann-lady-irwin.webp",
    width: 1020,
    quality: 78,
    why: "1280 wide served for a 510px box",
  },
  {
    file: "src/app/icon.png",
    width: 512,
    quality: 90,
    why: "512x512 favicon weighing 158 KB",
    keepPng: true,
  },
];

for (const d of derived) {
  const src = join(root, d.from);
  const out = join(root, d.to);
  const input = await readFile(src);
  const buf = await sharp(input)
    .resize({ width: d.width, withoutEnlargement: true })
    .webp({ quality: d.quality, effort: 6, smartSubsample: true })
    .toBuffer();
  await writeFile(out, buf);
  console.log(`NEW   ${d.to}\n      ${d.width}px ${KB(buf.length)}   (${d.why})`);
}

let before = 0;
let after = 0;

for (const t of targets) {
  const path = join(root, t.file);
  const original = await readFile(path);
  const meta = await sharp(original).metadata();

  // Never upscale: a smaller source is already doing the right thing.
  const width = Math.min(t.width, meta.width);

  const pipeline = sharp(original).resize({ width, withoutEnlargement: true });
  const out = t.keepPng
    ? await pipeline
        .png({ quality: t.quality, compressionLevel: 9, palette: true })
        .toBuffer()
    : await pipeline.webp({ quality: t.quality, effort: 6 }).toBuffer();

  before += original.length;

  if (out.length >= original.length) {
    console.log(`SKIP  ${t.file} — re-encode was not smaller`);
    after += original.length;
    continue;
  }

  await writeFile(path, out);
  after += out.length;

  const saved = ((1 - out.length / original.length) * 100).toFixed(0);
  console.log(
    `OK    ${t.file}\n` +
      `      ${meta.width}x${meta.height} ${KB(original.length)}  ->  ` +
      `${width}px ${KB(out.length)}   -${saved}%   (${t.why})`,
  );
}

console.log(`\nTOTAL ${KB(before)} -> ${KB(after)}  saved ${KB(before - after)}`);
