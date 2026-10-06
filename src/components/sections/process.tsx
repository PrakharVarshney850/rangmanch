import { icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="container-stage">
        <SectionHeading
          eyebrow="How we work"
          title="Curtain to recap, in six moves"
          intro="The same sequence whether it is a single activation zone or a full campus concert. You always know which move we are on."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={(i % 3) * 110}>
              <li className="glass group relative h-full overflow-hidden rounded-4xl p-8 transition-colors hover:border-gold-500/35">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl border border-gold-500/25 bg-stage-800/80 p-3 text-gold-400">
                    {icons[step.icon]}
                  </span>
                  <span className="font-display text-3xl font-black text-cream/10 transition-colors group-hover:text-gold-500/30">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
