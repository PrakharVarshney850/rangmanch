/**
 * JSON-LD structured data for the single-page site.
 *
 * Everything here restates content that is already visible on the page —
 * Google treats structured data that claims more than the page shows as
 * spam, so nothing is invented and no dates are approximated.
 *
 * Deliberately NOT included:
 *  - `VideoObject` for the showreel. `uploadDate` is required and we only
 *    know the year, and the files stream from Drive rather than this origin.
 *  - `LocalBusiness`, which requires a verifiable postal address.
 */

import { faqs, services } from "@/lib/content";
import { site } from "@/lib/site";

const organization = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.handle,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    url: `${site.url}/icon.png`,
    width: 512,
    height: 512,
  },
  image: `${site.url}/opengraph-image.png`,
  description: site.description,
  slogan: site.promise,
  foundingDate: site.founded,
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "Campus event management",
    "Brand sponsorship and activation",
    "Live music production",
    "Artist management",
    "Experiential marketing",
  ],
  telephone: site.contact.phone,
  email: site.contact.email,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: site.contact.phone,
    email: site.contact.email,
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [site.links.instagram],
};

const website = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: site.locale.replace("_", "-"),
  publisher: { "@id": `${site.url}/#organization` },
};

/**
 * Mirrors the visible <details> accordion in the FAQ section.
 *
 * This will NOT produce FAQ dropdowns in Google. Google restricted FAQ rich
 * results to government and health sites in August 2023 and then deprecated
 * them entirely in May 2026, so no site gets the visual expander any more.
 *
 * It is kept because it still costs ~1 KB and still describes the content to
 * AI answer engines and LLM crawlers, which do parse JSON-LD. Treat it as
 * machine-readable context, not as a route to a rich snippet.
 */
const faqPage = {
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/**
 * One node per service, mirroring the cards in the Services section.
 *
 * Each `name` and `description` is the heading and summary actually rendered
 * on the page — structured data that claims more than the page shows is
 * treated as spam. `offers` is omitted deliberately: pricing is quote-based,
 * and inventing a price or availability would be exactly that.
 */
const serviceNodes = services.map((service) => ({
  "@type": "Service",
  "@id": `${site.url}/#service-${service.title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`,
  name: service.title,
  description: service.summary,
  serviceType: service.title,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "Country", name: "India" },
}));

/** One graph keeps the nodes cross-referenced by @id rather than duplicated. */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [organization, website, faqPage, ...serviceNodes],
};
