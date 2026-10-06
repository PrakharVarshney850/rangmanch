import { brands, partners } from "@/lib/content";

/**
 * Infinite roster ribbon. The track is duplicated once and translated by
 * -50%, which makes the loop seamless.
 */
export function PartnerMarquee() {
  const row = [...brands, ...partners, ...brands, ...partners];

  return (
    <section
      aria-label="Brands and partners"
      className="relative border-y border-gold-500/15 bg-stage-900/50 py-9"
    >
      <div className="fade-edges overflow-hidden">
        <div className="marquee-track animate-marquee [--marquee-gap:4.5rem] hover:[animation-play-state:paused]">
          {row.map((item, i) => (
            <div key={`${item.name}-${i}`} className="flex items-center gap-4">
              <span className="font-display text-xl font-semibold whitespace-nowrap text-cream/90 sm:text-2xl">
                {item.name}
              </span>
              <span className="hidden text-[10px] font-semibold tracking-[0.2em] whitespace-nowrap text-gold-500/70 uppercase sm:inline">
                {item.role}
              </span>
              <span className="size-1 rounded-full bg-gold-500/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
