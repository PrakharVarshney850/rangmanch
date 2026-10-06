/**
 * Single source of truth for brand facts, links and contact details.
 *
 * Values marked NEEDS-CONFIRMATION are placeholders: swap them for the real
 * ones before going live. Everything else is taken from Rangmanch's own
 * public profiles and supplied creatives.
 */

export const site = {
  name: "Rangmanch",
  legalName: "Rangmanch",
  handle: "@the_rangmanch",
  tagline: "Express • Inspire • Entertain",
  promise: "One stage. Endless possibilities.",
  shortPitch:
    "A live events and brand-partnerships studio curating campus concerts, cultural showcases and brand activations across India since 2018.",
  description:
    "Rangmanch curates live events and builds brand impact — sponsorships, partnerships and brand experiences for college, corporate and live audiences across India. 180+ events since 2018.",
  /**
   * Canonical origin, used for OG tags, the sitemap and robots.txt.
   * Override per-environment with NEXT_PUBLIC_SITE_URL (no trailing slash).
   */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://rangmanch.in").replace(
    /\/$/,
    "",
  ),
  locale: "en_IN",
  founded: "2018",
  base: "Pan-India",

  /* Verified from the public Instagram profile, October 2026. */
  community: {
    followers: 1537,
    posts: 21,
  },

  links: {
    instagram: "https://www.instagram.com/the_rangmanch",
    mediaDrive:
      "https://drive.google.com/drive/folders/1W945vDQtIaO_C-IjG8stBQuSeiG2hNZo",
  },

  /* Taken from the Rangmanch business card. */
  contact: {
    phone: "+91 63989 54600",
    // NEEDS-CONFIRMATION — replace with the real inbox before launch.
    email: "partnerships@rangmanch.in",
    preferred: "Instagram DM",
    responseTime: "Within 24 hours",
  },
} as const;

/** Years of operation, derived so it never goes stale. */
export const yearsActive = new Date().getFullYear() - Number(site.founded);

/** Digits only, for tel: hrefs. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Showreel", href: "#showreel" },
  { label: "Why campus", href: "#why-campus" },
  { label: "Contact", href: "#contact" },
];
