import { icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 rule-spectrum" />
        <div className="absolute -right-40 top-1/3 size-[30rem] rounded-full bg-curtain-700/15 blur-[150px]" />
      </div>

      <div className="container-stage">
        <SectionHeading
          eyebrow="What we do"
          title="Six ways we put your brand on stage"
          intro="From a single sponsorship slot to a fully produced campus concert — pick the piece you need, or hand us the whole show."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 110}>
              <TiltCard className="h-full rounded-4xl">
                <article className="glass relative flex h-full flex-col overflow-hidden rounded-4xl p-8">
                  <span className="pointer-events-none absolute -right-8 -top-8 font-display text-[7rem] leading-none font-black text-cream/[0.03]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="mb-6 grid size-12 place-items-center rounded-2xl border border-gold-500/25 bg-stage-800/80 p-3 text-gold-400">
                    {icons[service.icon]}
                  </span>

                  <h3 className="font-display text-[1.375rem] leading-snug text-cream">
                    {service.title}
                  </h3>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                    {service.summary}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-stage-700/70 pt-6">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted/90"
                      >
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gold-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
