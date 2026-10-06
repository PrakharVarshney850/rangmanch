import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/content";

export function Work() {
  const featured = caseStudies.filter((c) => c.featured);
  const rest = caseStudies.filter((c) => !c.featured);

  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-48 top-1/4 size-[34rem] rounded-full bg-spectrum-magenta/10 blur-[160px]" />
      </div>

      <div className="container-stage">
        <SectionHeading
          eyebrow="Selected work"
          title="Collaborations that made it to the stage"
          intro="One flagship campus concert, the festival partner who builds the stage with us, and the brands we put in the middle of it."
        />

        {/* --------------------------- featured --------------------------- */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {featured.map((study, i) => (
            <Reveal key={study.slug} delay={i * 120}>
              <article
                className={`group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-5xl border border-gold-500/15 bg-gradient-to-br p-8 sm:p-10 ${study.wash}`}
              >
                {study.image && (
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="object-cover opacity-[0.13] transition-all duration-700 group-hover:scale-105 group-hover:opacity-20"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-stage-950 via-stage-950/80 to-stage-950/40" />

                <div className="relative">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full border border-gold-500/35 bg-stage-950/70 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-gold-300 uppercase backdrop-blur">
                      {study.role}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-muted/80 uppercase">
                      {study.category} · {study.year}
                    </span>
                  </div>

                  <p className="mt-7 font-display text-3xl font-black text-cream sm:text-4xl">
                    {study.partner}
                  </p>

                  <h3 className="mt-5 font-display text-[1.625rem] text-cream sm:text-3xl">
                    {study.headline}
                  </h3>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                    {study.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {study.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border border-stage-600/70 bg-stage-950/50 px-3.5 py-1.5 text-xs text-muted/90 backdrop-blur"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  {study.footnote && (
                    <p className="mt-5 border-l border-gold-500/30 pl-4 text-xs leading-relaxed text-faint">
                      {study.footnote}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ----------------------------- rest ----------------------------- */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {rest.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 4) * 100}>
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-4xl p-7 transition-colors hover:border-gold-500/35">
                <span className="text-[11px] font-semibold tracking-[0.18em] text-gold-400 uppercase">
                  {study.role}
                </span>
                <h3 className="mt-3 font-display text-[1.375rem] text-cream">
                  {study.partner}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {study.summary}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-stage-700/70 pt-5">
                  {study.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-[13px] leading-relaxed text-muted/85"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-500" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
