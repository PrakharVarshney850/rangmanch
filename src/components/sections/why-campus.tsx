import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { marketNote, marketStats } from "@/lib/content";

export function WhyCampus() {
  return (
    <section
      id="why-campus"
      className="relative scroll-mt-24 overflow-hidden border-y border-gold-500/10 bg-stage-900/40 py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-40 bottom-0 size-[30rem] rounded-full bg-spectrum-blue/10 blur-[150px]" />
        <div className="absolute -right-40 top-0 size-[30rem] rounded-full bg-gold-500/10 blur-[150px]" />
      </div>

      <div className="container-stage">
        <SectionHeading
          eyebrow="The opportunity"
          title="Why campus is the sharpest room in India"
          intro={marketNote}
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-4xl border border-gold-500/15 bg-gold-500/10 sm:grid-cols-2 lg:grid-cols-3">
          {marketStats.map((stat, i) => (
            <Reveal
              key={stat.value + stat.label}
              delay={(i % 3) * 90}
              className="group bg-stage-900/90 p-8 transition-colors hover:bg-stage-850"
            >
              <p className="font-display text-3xl font-black text-foil sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {stat.label}
              </p>
              <p className="mt-5 text-[10px] font-semibold tracking-[0.18em] text-faint uppercase">
                {stat.source}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <p className="mt-8 text-xs leading-relaxed text-faint">
            Sources: All India Survey on Higher Education (AISHE) 2023–24,
            Ministry of Education, Government of India; “Beyond Attention. Into
            Immersion.”, EY-Parthenon in partnership with BookMyShow, March 2026.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
