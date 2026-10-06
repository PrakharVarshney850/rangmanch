import { CountUp } from "@/components/count-up";
import { icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { principles, stats } from "@/lib/content";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-stage">
        <SectionHeading
          eyebrow="Who we are"
          title="A platform where talent takes the stage"
          intro={`Rangmanch has been curating live moments since ${site.founded} — 180+ events across campuses, corporate floors and public stages. The name means “the stage”, and that is still the whole idea: give performers a real audience, and give brands a real moment to stand in.`}
        />

        {/* ------------------------------ stats ------------------------------ */}
        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-gold-500/15 bg-gold-500/10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 90}
              className="bg-stage-900/90 p-6 sm:p-8"
            >
              <p className="font-display text-5xl font-black text-foil sm:text-6xl">
                <CountUp to={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="mt-3 text-[15px] font-semibold text-cream">{stat.label}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-faint">
                {stat.caption}
              </p>
            </Reveal>
          ))}
        </div>

        {/* --------------------------- principles --------------------------- */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {principles.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={i * 110}
              className="glass group relative overflow-hidden rounded-4xl p-8 transition-colors hover:border-gold-500/35"
            >
              <span className="mb-6 grid size-12 place-items-center rounded-2xl border border-gold-500/25 bg-stage-800/80 p-3 text-gold-400 transition group-hover:text-gold-300">
                {icons[principle.icon]}
              </span>
              <h3 className="font-display text-[1.375rem] text-cream">{principle.title}</h3>
              <p className="mt-3.5 text-[15px] leading-relaxed text-muted">
                {principle.body}
              </p>
              <span className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
