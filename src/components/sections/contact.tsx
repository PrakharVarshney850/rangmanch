import Image from "next/image";
import { icons } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site, telHref } from "@/lib/site";
import logo from "@/assets/brand/rangmanch-logo.webp";

const channels = [
  {
    icon: "phone" as const,
    label: "Call",
    value: site.contact.phone,
    href: telHref(site.contact.phone),
    note: "Straight through to the team",
  },
  {
    icon: "instagram" as const,
    label: "Instagram",
    value: site.handle,
    href: site.links.instagram,
    note: "Fastest route — drop us a DM",
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Briefs, decks and proposals",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 stage-floor" />
        <div className="absolute left-1/2 top-0 h-[40rem] w-[90vw] -translate-x-1/2 rounded-[50%] bg-gold-500/10 blur-[150px]" />
        <div
          className="absolute left-1/2 top-0 h-[55vh] w-[110vw] -translate-x-1/2"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 44%, rgb(243 217 160 / 0.08) 50%, transparent 56%)",
          }}
        />
      </div>

      <div className="container-stage">
        <div className="relative overflow-hidden rounded-5xl border border-gold-500/20 bg-stage-900/70 p-8 backdrop-blur-xl sm:p-14">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-gold-500/60" />
                  <span className="eyebrow">Let&apos;s build something</span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.04] font-black">
                  <span className="block text-cream">Your brand.</span>
                  <span className="block text-foil">Our stage.</span>
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                  Tell us the audience you want and the budget you have. We will
                  come back with a format, a cost and the inventory you get —
                  usually {site.contact.responseTime.toLowerCase()}.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href={telHref(site.contact.phone)}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-300 px-7 py-3.5 text-sm font-semibold text-stage-950 shadow-glow-gold transition hover:brightness-110"
                  >
                    <span className="size-4">{icons.phone}</span>
                    {site.contact.phone}
                  </a>
                  <a
                    href={site.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-gold-400 hover:bg-stage-800/60"
                  >
                    <span className="size-4">{icons.instagram}</span>
                    Message on Instagram
                  </a>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <p className="mt-6 text-xs text-faint">{site.base}</p>
              </Reveal>
            </div>

            <Reveal delay={200} className="space-y-3">
              <div className="mb-8 flex justify-center lg:justify-end">
                <Image
                  src={logo}
                  alt=""
                  sizes="120px"
                  className="size-28 animate-float object-contain opacity-90"
                />
              </div>

              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 rounded-2xl border border-stage-700/70 bg-stage-950/50 p-4 transition-all hover:-translate-y-0.5 hover:border-gold-500/35"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-gold-500/20 bg-stage-800/80 p-2.5 text-gold-400">
                    {icons[channel.icon]}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold tracking-[0.2em] text-faint uppercase">
                      {channel.label}
                    </span>
                    <span className="block truncate text-sm font-medium text-cream">
                      {channel.value}
                    </span>
                    <span className="block text-[11px] text-faint">
                      {channel.note}
                    </span>
                  </span>
                  <span className="size-4 shrink-0 text-gold-500/60 transition-transform group-hover:translate-x-1">
                    {icons.arrow}
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
