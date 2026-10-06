"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  featuredReel,
  playerUrl,
  showreelFolder,
  showreelPreviewCount,
  showreels,
  type Showreel,
} from "@/lib/showreel";

function PlayBadge({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`pointer-events-none grid place-items-center rounded-full border border-gold-300/70 bg-stage-950/60 text-gold-200 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-gold-300 group-hover:bg-gold-500 group-hover:text-stage-950 ${
        large ? "size-20" : "size-12"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className={large ? "ml-1 size-7" : "ml-0.5 size-4"}
      >
        <path d="M7 4.5v15l13-7.5L7 4.5Z" />
      </svg>
    </span>
  );
}

/** Local poster frames, optimised by next/image. */
function Thumb({
  reel,
  sizes,
  priority = false,
}: {
  reel: Showreel;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={reel.poster}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}

export function Showreels() {
  const [active, setActive] = useState<Showreel | null>(null);
  const [expanded, setExpanded] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const visible = expanded ? showreels : showreels.slice(0, showreelPreviewCount);
  const hidden = showreels.length - showreelPreviewCount;

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close]);

  return (
    <section
      id="showreel"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/3 size-[32rem] rounded-full bg-curtain-700/15 blur-[150px]" />
        <div className="absolute -right-40 bottom-0 size-[30rem] rounded-full bg-spectrum-blue/10 blur-[150px]" />
      </div>

      <div className="container-stage">
        <SectionHeading
          eyebrow="Showreel"
          title="Roll the aftermovies"
          intro="Real nights, real crowds. The full भारत Bass Festival aftermovie archive — the stage we partner on — with Ayushmann Khurrana, Jass Manak, The Local Train and Indeep Bakshi across IITs, IIMs, NITs and medical campuses nationwide."
        />

        {/* ----------------------------- featured ----------------------------- */}
        <Reveal delay={80} className="mt-14">
          <button
            type="button"
            onClick={() => setActive(featuredReel)}
            className="group relative block aspect-video w-full overflow-hidden rounded-5xl border border-gold-500/20 bg-stage-900 text-left transition-colors hover:border-gold-500/50"
          >
            <Thumb reel={featuredReel} sizes="100vw" priority />
            <span className="absolute inset-0 bg-gradient-to-t from-stage-950 via-stage-950/40 to-stage-950/10" />

            {/* Centred on wide cards; tucked top-right on phones, where the
                wrapped title would otherwise run underneath it. */}
            <span className="absolute right-4 top-4 sm:hidden">
              <PlayBadge />
            </span>
            <span className="absolute inset-0 hidden place-items-center sm:grid">
              <PlayBadge large />
            </span>

            <span className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <span className="block text-[10px] font-semibold tracking-[0.24em] text-gold-300 uppercase">
                Season film · {featuredReel.year}
              </span>
              <span className="mt-2 block font-display text-xl text-cream sm:text-4xl">
                {featuredReel.title}
              </span>
              <span className="mt-1.5 block text-sm text-muted">
                {featuredReel.venue}
              </span>
            </span>
          </button>
        </Reveal>

        {/* ------------------------------ grid ------------------------------ */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((reel, i) => (
            <Reveal key={reel.id} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setActive(reel)}
                className="group relative block aspect-video w-full overflow-hidden rounded-3xl border border-stage-700/70 bg-stage-900 text-left transition-colors hover:border-gold-500/40"
              >
                <Thumb
                  reel={reel}
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-stage-950 via-stage-950/45 to-transparent" />

                <span className="absolute right-4 top-4">
                  <PlayBadge />
                </span>

                <span className="absolute inset-x-0 bottom-0 p-5">
                  {reel.artist && (
                    <span className="block text-[10px] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                      {reel.artist}
                    </span>
                  )}
                  <span className="mt-1 block font-display text-lg leading-tight text-cream">
                    {reel.title}
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    {reel.venue} · {reel.year}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {hidden > 0 && !expanded && (
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-3 text-sm font-semibold text-stage-950 shadow-glow-gold transition hover:brightness-110"
              >
                Show all {showreels.length} aftermovies
                <span aria-hidden>↓</span>
              </button>
            )}
            <a
              href={showreelFolder}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-6 py-3 text-sm font-semibold text-cream transition hover:border-gold-400 hover:bg-stage-800/60"
            >
              Open the full archive
              <span aria-hidden>↗</span>
            </a>
            <p className="text-xs text-faint">
              {showreels.length + 1} films from the भारत Bass Festival public
              Drive — IITs, IIMs, NITs and medical campuses nationwide.
            </p>
          </div>
        </Reveal>
      </div>

      {/* ----------------------------- lightbox ----------------------------- */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} — ${active.venue}`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-stage-950/92 p-3 backdrop-blur-xl sm:p-8"
          onClick={close}
        >
          {/*
            The whole panel is capped by the space actually available
            vertically, so the 16:9 frame shrinks instead of overflowing on
            short viewports — landscape phones, and "Desktop site" mode where
            the layout viewport is wide but the visual one is not. Capping the
            panel (rather than just the video) keeps the title, player and hint
            aligned to the same edges.
          */}
          <div
            className="relative flex max-h-full w-[min(100%,64rem,calc((100svh-9rem)*16/9))] flex-col sm:w-[min(100%,64rem,calc((100svh-11rem)*16/9))]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex shrink-0 items-end justify-between gap-4">
              <div className="min-w-0">
                {active.artist && (
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-gold-300 uppercase">
                    {active.artist}
                  </p>
                )}
                <h3 className="truncate font-display text-xl text-cream">
                  {active.title}
                </h3>
                <p className="text-xs text-muted">
                  {active.venue} · {active.year}
                </p>
              </div>

              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close video"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-gold-500/30 text-cream transition hover:border-gold-400 hover:bg-stage-800"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  aria-hidden
                  className="size-4"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="aspect-video w-full shrink-0 overflow-hidden rounded-2xl border border-gold-500/25 bg-black sm:rounded-3xl">
              <iframe
                key={active.id}
                src={playerUrl(active.id)}
                title={`${active.title} — ${active.venue}`}
                allow="autoplay; fullscreen"
                allowFullScreen
                /* `block` removes the inline-element baseline gap that otherwise
                   shows as a black strip under the player. */
                className="block size-full border-0"
              />
            </div>

            <p className="mt-3 shrink-0 text-center text-[11px] text-faint">
              Tap outside or press Esc to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}