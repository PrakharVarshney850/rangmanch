import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-stage">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Questions"
            title="Before you send the brief"
            intro="The things brands and campus teams ask us most often."
          />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 80}>
                <details className="group glass overflow-hidden rounded-3xl transition-colors open:border-gold-500/35">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-display text-base text-cream marker:hidden sm:text-lg">
                    {faq.q}
                    <span className="relative grid size-7 shrink-0 place-items-center rounded-full border border-gold-500/30 text-gold-400 transition-transform duration-300 group-open:rotate-45">
                      <span className="absolute h-px w-3 bg-current" />
                      <span className="absolute h-3 w-px bg-current" />
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
