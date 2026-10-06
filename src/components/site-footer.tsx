import Image from "next/image";
import { icons } from "@/components/icons";
import { navItems, site, telHref } from "@/lib/site";
import { verticals } from "@/lib/content";
import logo from "@/assets/brand/rangmanch-logo.webp";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-gold-500/15 bg-stage-950">
      <div className="rule-spectrum" />

      <div className="container-stage py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative block size-11 overflow-hidden rounded-full ring-1 ring-gold-500/40">
                <Image src={logo} alt="" fill sizes="44px" className="object-cover" />
              </span>
              <span>
                <span className="block font-display text-base font-bold tracking-[0.2em] text-cream">
                  RANGMANCH
                </span>
                <span className="block text-[9px] font-medium tracking-[0.26em] text-gold-500/80 uppercase">
                  {site.tagline}
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {site.shortPitch}
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href={telHref(site.contact.phone)}
                aria-label={`Call Rangmanch on ${site.contact.phone}`}
                className="grid size-10 place-items-center rounded-full border border-stage-700 p-2.5 text-muted transition hover:border-gold-500/50 hover:text-gold-300"
              >
                {icons.phone}
              </a>
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Rangmanch on Instagram, ${site.handle}`}
                className="grid size-10 place-items-center rounded-full border border-stage-700 p-2.5 text-muted transition hover:border-gold-500/50 hover:text-gold-300"
              >
                {icons.instagram}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="Email Rangmanch"
                className="grid size-10 place-items-center rounded-full border border-stage-700 p-2.5 text-muted transition hover:border-gold-500/50 hover:text-gold-300"
              >
                {icons.mail}
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-[10px] font-semibold tracking-[0.24em] text-gold-400 uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition hover:text-cream"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.24em] text-gold-400 uppercase">
              Verticals
            </h3>
            <ul className="mt-5 space-y-3">
              {verticals.map((vertical) => (
                <li key={vertical.name} className="text-sm text-muted">
                  {vertical.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.24em] text-gold-400 uppercase">
              Reach us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={telHref(site.contact.phone)}
                  className="transition hover:text-cream"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-cream"
                >
                  {site.handle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all transition hover:text-cream"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="text-faint">{site.base}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-stage-700/70 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.legalName}. {site.promise}
          </p>
          <p className="text-xs text-faint">
            Partner names and logos are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
