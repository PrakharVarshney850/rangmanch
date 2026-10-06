import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";
import { HeroProof } from "@/components/sections/hero-proof";
import { site } from "@/lib/site";
import logo from "@/assets/brand/rangmanch-logo.webp";

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-20"
    >
      <HeroBackdrop />

      <div className="container-stage">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ------------------------------ copy ------------------------------ */}
          <div>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
                {/* Static mark — small and inline, no float or pulsing ring. */}
                <Image
                  src={logo}
                  alt="Rangmanch"
                  priority
                  sizes="56px"
                  className="size-12 shrink-0 object-contain sm:size-14"
                />
                <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-stage-900/60 px-4 py-2 backdrop-blur">
                  <span className="size-1.5 rounded-full bg-spectrum-green" />
                  <span className="eyebrow !text-[11px]">
                    Est. {site.founded} · {site.base}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[clamp(1.95rem,5.6vw,3.6rem)] leading-[1.04] font-black">
                <span className="block text-cream">Curating events.</span>
                <span className="block text-gold-400">
                  Creating brand impact.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-6 flex items-center gap-4">
                <span className="hidden h-px w-12 bg-gold-500/50 sm:block" />
                <p className="font-display text-sm tracking-[0.22em] text-gold-300/90 uppercase sm:text-base">
                  {site.promise}
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                A live events and partnerships studio. Since {site.founded} we
                have built 180+ campus concerts, cultural showcases and brand
                activations that put real talent on stage — and put brands right
                in the middle of the moment.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-8 py-4 text-base font-semibold text-stage-950 shadow-glow-gold transition hover:brightness-110"
                >
                  Partner with us
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#showreel"
                  className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-8 py-4 text-base font-semibold text-cream transition hover:border-gold-400 hover:bg-stage-800/60"
                >
                  Watch the showreel
                </a>
              </div>
            </Reveal>
          </div>

          {/* ------------------------- named proof ------------------------- */}
          <Reveal delay={260}>
            <HeroProof />
            <p className="mt-4 text-xs text-faint">
              Stages we build with our festival partner भारत Bass Festival.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
