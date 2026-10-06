import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/site";
import logo from "@/assets/brand/rangmanch-logo.webp";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="grain stage-floor flex min-h-[100svh] items-center justify-center px-6 py-24">
      <div className="text-center">
        <Image
          src={logo}
          alt=""
          sizes="112px"
          className="mx-auto size-28 object-contain"
        />

        <p className="eyebrow mt-10">Error 404</p>

        <h1 className="mt-5 font-display text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] font-black">
          <span className="block text-cream">Wrong stage.</span>
          <span className="block text-foil">Let&apos;s get you back.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted">
          That page has left the building. The curtain is still up on
          everything else.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-3.5 text-sm font-semibold text-stage-950 shadow-glow-gold transition hover:brightness-110"
          >
            Back to the stage
          </Link>
          <a
            href={site.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold-500/30 px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-gold-400 hover:bg-stage-800/60"
          >
            Find us on Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
