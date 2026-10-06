import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="h-px w-8 bg-gold-500/60" />
          <span className="eyebrow">{eyebrow}</span>
          {centered && <span className="h-px w-8 bg-gold-500/60" />}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-6 font-display text-[clamp(1.85rem,4.6vw,3.75rem)] leading-[1.04] font-black text-cream">
          {title}
        </h2>
      </Reveal>

      {intro && (
        <Reveal delay={150}>
          <p className="mt-7 text-lg leading-relaxed text-muted sm:text-xl">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
