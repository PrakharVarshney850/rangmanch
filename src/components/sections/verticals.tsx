import { icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { verticals } from "@/lib/content";

export function Verticals() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-stage">
        <SectionHeading
          align="center"
          eyebrow="One stage, endless possibilities"
          title="The verticals we build for"
          intro="The six panels in the Rangmanch mark are not decoration — each one is a discipline we programme, cast and put in front of an audience."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {verticals.map((vertical, i) => (
            <Reveal
              key={vertical.name}
              delay={i * 70}
              className="group relative overflow-hidden rounded-3xl border border-stage-700/70 bg-stage-900/60 p-6 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/35 hover:bg-stage-850"
            >
              <span
                className={`mx-auto mb-5 grid size-11 place-items-center p-2.5 ${vertical.accent} transition-transform duration-500 group-hover:scale-110`}
              >
                {icons[vertical.icon]}
              </span>
              <h3 className="font-display text-lg text-cream">{vertical.name}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-faint">
                {vertical.blurb}
              </p>
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-spectrum transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
