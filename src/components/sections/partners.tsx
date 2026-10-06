import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { brands, campusNetwork, partners } from "@/lib/content";

function RosterGrid({
  items,
  columns,
}: {
  items: typeof brands;
  columns: string;
}) {
  return (
    <div
      className={`grid gap-px overflow-hidden rounded-4xl border border-gold-500/15 bg-gold-500/10 ${columns}`}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.name}
          delay={i * 70}
          className="group flex min-h-[11rem] flex-col items-center justify-center gap-2 bg-stage-900/90 px-5 py-9 text-center transition-colors hover:bg-stage-850"
        >
          <span className="font-display text-lg font-bold text-cream transition-colors group-hover:text-gold-200 sm:text-xl">
            {item.name}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] text-gold-500/80 uppercase">
            {item.role}
          </span>
          <span className="mt-1 text-xs text-faint">{item.note}</span>
        </Reveal>
      ))}
    </div>
  );
}

export function Partners() {
  return (
    <section
      id="partners"
      className="relative scroll-mt-24 border-y border-gold-500/10 bg-stage-900/40 py-24 sm:py-28"
    >
      <div className="container-stage">
        <SectionHeading
          align="center"
          eyebrow="The roster"
          title="Brands we've activated. Stages we've built."
          intro="Brands come to us for a moment their audience will actually remember. Partners are the stages and institutions we build those moments on."
        />

        <Reveal className="mt-16 flex items-center gap-4">
          <span className="eyebrow whitespace-nowrap">Brands</span>
          <span className="h-px flex-1 bg-gold-500/20" />
        </Reveal>
        <div className="mt-6">
          <RosterGrid items={brands} columns="sm:grid-cols-3" />
        </div>

        <Reveal className="mt-14 flex items-center gap-4">
          <span className="eyebrow whitespace-nowrap">Partners</span>
          <span className="h-px flex-1 bg-gold-500/20" />
        </Reveal>
        <div className="mt-6">
          <RosterGrid items={partners} columns="sm:grid-cols-3" />
        </div>

        {/* ------------------------- campus circuit ------------------------- */}
        <Reveal className="mt-14 flex items-center gap-4">
          <span className="eyebrow whitespace-nowrap">On campus</span>
          <span className="h-px flex-1 bg-gold-500/20" />
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            Through our festival partner भारत Bass Festival, the stage travels
            across India:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {campusNetwork.map((campus) => (
              <li
                key={campus}
                className="rounded-full border border-stage-600/70 bg-stage-950/50 px-4 py-2 text-[13px] text-muted/90 transition-colors hover:border-gold-500/40 hover:text-cream"
              >
                {campus}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-10 text-xs text-faint">
            Brand and partner names and marks are the property of their
            respective owners, shown here as collaboration credits.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
