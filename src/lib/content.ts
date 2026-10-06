import type { IconName } from "@/components/icons";
import type { StaticImageData } from "next/image";
import { site, yearsActive } from "@/lib/site";

import bbfLogo from "@/assets/brand/bbf-logo.webp";

/* ------------------------------------------------------------------ *
 * Services
 * ------------------------------------------------------------------ */

export type Service = {
  icon: IconName;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "handshake",
    title: "Sponsorships & Brand Partnerships",
    summary:
      "We match brands to the right stage, then build the deal end to end — from deck and inventory to on-ground delivery and the post-event recap.",
    points: [
      "Title, co-powered and category partner packages",
      "Custom inventory decks with reach and deliverables",
      "Barter, cash and product-led sponsorship structures",
      "Post-event recap with media and coverage proof",
    ],
  },
  {
    icon: "campus",
    title: "Campus & College Events",
    summary:
      "Concerts, fests, auditions and cultural nights built with student teams who actually know the campus and its crowd.",
    points: [
      "Campus concerts and fest headline nights",
      "Audition rounds, open mics and talent hunts",
      "Student ambassador and volunteer networks",
      "College administration and venue liaison",
    ],
  },
  {
    icon: "spark",
    title: "Brand Experiences & Activations",
    summary:
      "Sampling booths, interactive zones and branded moments that people actually queue for — not a banner nobody photographs.",
    points: [
      "Experience zones, photo moments and game walls",
      "Product sampling and trial-led activations",
      "Branded stage, LED and backdrop integration",
      "Contests, giveaways and lead capture",
    ],
  },
  {
    icon: "stage",
    title: "Corporate & Live Events",
    summary:
      "Launches, offsites and annual days produced with the same show discipline we bring to a festival main stage.",
    points: [
      "Product launches and brand showcases",
      "Annual days, offsites and award nights",
      "Full technical production and stage management",
      "Hosting, scripting and run-of-show",
    ],
  },
  {
    icon: "mic",
    title: "Talent & Artist Curation",
    summary:
      "Artists, hosts, DJs and performers sourced, auditioned and booked — plus a growing bench of student talent.",
    points: [
      "Artist sourcing, booking and rider management",
      "DJs, bands, anchors and stand-up acts",
      "Student performer discovery and auditions",
      "Rehearsal, soundcheck and backstage flow",
    ],
  },
  {
    icon: "camera",
    title: "Content, Design & Promotions",
    summary:
      "Every event doubles as a content shoot. Creatives, reels and recaps that keep working long after the lights go down.",
    points: [
      "Key visuals, posters and co-branded lockups",
      "Reels, aftermovies and event photography",
      "Campus-wide digital and on-ground promotions",
      "Influencer and community amplification",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * Creative verticals — taken from the Rangmanch launch creative
 * ------------------------------------------------------------------ */

export type Vertical = {
  icon: IconName;
  name: string;
  blurb: string;
  accent: string;
};

export const verticals: Vertical[] = [
  {
    icon: "masks",
    name: "Theatre",
    blurb: "Stage plays, nukkad natak and drama societies.",
    accent: "text-spectrum-red",
  },
  {
    icon: "dance",
    name: "Dance",
    blurb: "Solo, duet and crew battles across every style.",
    accent: "text-spectrum-orange",
  },
  {
    icon: "mic",
    name: "Singing",
    blurb: "Open mics, band nights and vocal showcases.",
    accent: "text-spectrum-yellow",
  },
  {
    icon: "palette",
    name: "Creative Arts",
    blurb: "Photography, design, art and spoken word.",
    accent: "text-spectrum-green",
  },
  {
    icon: "guitar",
    name: "Music & DJ",
    blurb: "Bass nights, live sets and festival stages.",
    accent: "text-spectrum-blue",
  },
  {
    icon: "rocket",
    name: "And more",
    blurb: "If it belongs on a stage, we will build it.",
    accent: "text-spectrum-magenta",
  },
];

/* ------------------------------------------------------------------ *
 * Work — every entry below maps to a real Rangmanch collaboration.
 * ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  partner: string;
  category: string;
  role: string;
  year: string;
  headline: string;
  summary: string;
  highlights: string[];
  image?: StaticImageData;
  /** Tailwind gradient classes used for the card wash. */
  wash: string;
  featured?: boolean;
  /** Optional context line shown in smaller type beneath the card. */
  footnote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "elevate-3",
    partner: "Elevate 3.0",
    category: "Campus Concert",
    role: "Event Curator",
    year: "Sept 2026",
    headline: "Launching Future, live at SVIET",
    summary:
      "Our most recent show: a campus concert for the Elevate 3.0 induction programme at SVIET, Chandigarh, built around “Opportunities · Growth · Inspiration” — with the भारत Bass Festival stage, VJ Infinity and Dr. Kashish Charaya on a Bollywood DJ concert night.",
    highlights: [
      "भारत Bass Festival headline stage",
      "Bentodent as Official Smile Partner",
      "AbhiBus as Official Travel Partner",
      "VJ Infinity · Dr. Kashish Charaya",
    ],
    wash: "from-curtain-700/40 via-stage-900 to-stage-950",
    featured: true,
    footnote:
      "Two brand slots sold and delivered on one stage, each with its own creative system, sampling moment and campus rollout.",
  },
  {
    slug: "bharat-bass-festival",
    partner: "भारत Bass Festival",
    category: "Festival Partner",
    role: "Festival Partner",
    year: "2026",
    headline: "We convert campuses into concerts",
    summary:
      "BBF is our festival partner — a touring Bollywood, Punjabi and EDM stage with 9XM and 9X Tashan as music partners. Together we bring a full production concert onto a college ground and open it up for star-night sponsorships.",
    highlights: [
      "Bollywood · Punjabi · EDM programming",
      "9XM and 9X Tashan music partners",
      "Star-night sponsorship inventory",
      "Touring campus concert format",
    ],
    image: bbfLogo,
    wash: "from-spectrum-green/22 via-stage-900 to-stage-950",
    featured: true,
    footnote:
      "Through BBF the stage has travelled to IIT Ropar, NIT Durgapur, UPES Dehradun, JECRC Jaipur, JUIT Solan, Amity Kolkata, IIIT Guwahati, Krupanidhi Bengaluru, ACMS Delhi and Geeta University.",
  },
  {
    slug: "bentodent",
    partner: "Bentodent",
    category: "Oral Care",
    role: "Official Smile Partner",
    year: "2026",
    headline: "Made by dentists, powered by nature",
    summary:
      "Rangmanch created and sold the Official Smile Partner slot at Elevate 3.0 to Bentodent — a dentist-formulated natural oral-care brand — turning a category nobody expects at a concert into a “Healthy Smiles, Brighter Tomorrows” moment on the ground.",
    highlights: [
      "Category-partner slot created and sold",
      "Product sampling for the student crowd",
      "Co-branded stage and digital assets",
      "Natural care · dentist trusted positioning",
    ],
    wash: "from-spectrum-magenta/20 via-stage-900 to-stage-950",
  },
  {
    slug: "abhibus",
    partner: "AbhiBus",
    category: "Travel & Mobility",
    role: "Official Travel Partner",
    year: "2026",
    headline: "Your journey, our priority",
    summary:
      "AbhiBus came on as Official Travel Partner for Elevate 3.0, with a co-branded Rangmanch × AbhiBus lockup carrying “The Stage of Your Dreams” across campus channels and every event touchpoint.",
    highlights: [
      "Co-branded key visual and lockup system",
      "Travel-led offers for event audiences",
      "Campus-wide digital rollout",
      "People · Stories · Destinations creative",
    ],
    wash: "from-spectrum-red/20 via-stage-900 to-stage-950",
    footnote:
      "AbhiBus is an online bus-ticketing and multi-modal travel platform founded in Hyderabad in 2008, acquired by ixigo in August 2021.",
  },
  {
    slug: "red-bull",
    partner: "Red Bull",
    category: "Energy & Youth Culture",
    role: "Energy Partner",
    year: "2026",
    headline: "Energy where the crowd already is",
    summary:
      "Red Bull built its reputation by owning youth culture at the source — campuses, music stages and sport. Rangmanch plugs that energy into the live moments students already turn up for, from the backstage crew to the front row.",
    highlights: [
      "Campus sampling and energy zones",
      "Artist, crew and backstage support",
      "Student-marketeer style campus activity",
      "Dance, music and sport-led formats",
    ],
    wash: "from-spectrum-blue/22 via-stage-900 to-stage-950",
    footnote:
      "Red Bull runs campus formats across India including the Student Marketeer programme, Red Bull Campus Cricket, BC One Cypher, Dance Your Style and Red Bull Half Court, whose 2026 national final was held in Chandigarh.",
  },
  {
    slug: "launch",
    partner: "Rangmanch",
    category: "Brand Identity",
    role: "In-house",
    year: "2026",
    headline: "The stage of your dreams",
    summary:
      "The 2026 identity refresh that brought years of live work under a single mark — theatre, dance, singing and the creative arts in one system, built around a six-colour spectrum pulled from the logo itself.",
    highlights: [
      "Identity, mark and spectrum system",
      "Launch film and poster campaign",
      "सुर संगम music channel and link-in-bio stack",
      "Positioning across six creative verticals",
    ],
    wash: "from-spectrum-orange/20 via-stage-900 to-stage-950",
  },
];

/* ------------------------------------------------------------------ *
 * Roster
 *
 * Brands are the clients we activate for. Partners are the stages and
 * institutions we build those activations on top of.
 * ------------------------------------------------------------------ */

export type Roster = {
  name: string;
  role: string;
  note: string;
};

export const brands: Roster[] = [
  {
    name: "Bentodent",
    role: "Official Smile Partner",
    note: "Made by dentists, powered by nature",
  },
  {
    name: "AbhiBus",
    role: "Official Travel Partner",
    note: "Your journey, our priority",
  },
  {
    name: "Red Bull",
    role: "Energy Partner",
    note: "Campus energy and youth culture",
  },
];

export const partners: Roster[] = [
  {
    name: "भारत Bass Festival",
    role: "Festival Partner",
    note: "We convert campuses into concerts",
  },
  {
    name: "9XM",
    role: "Music Partner",
    note: "Via भारत Bass Festival",
  },
  {
    name: "9X Tashan",
    role: "Music Partner",
    note: "Via भारत Bass Festival",
  },
];

/**
 * Campuses the भारत Bass Festival stage has played, taken from the
 * festival's own public channels. Rangmanch partners on this circuit.
 */
export const campusNetwork = [
  "IIT Ropar",
  "IIM Indore",
  "IIM Visakhapatnam",
  "NIT Durgapur",
  "JIPMER Pondicherry",
  "TAPMI Manipal",
  "NSUT Delhi",
  "IIIT Guwahati",
  "UPES Dehradun",
  "JECRC Jaipur",
  "JUIT Solan",
  "Amity Kolkata",
  "Lady Irwin College",
  "Lloyd Law College",
  "GS Medical College",
  "CCET Chandigarh",
  "KIET Ghaziabad",
  "Shoolini University",
  "Gurukul Kangri",
  "Krupanidhi Bengaluru",
  "BIMTECH",
  "ACMS Delhi",
  "Geeta University",
];

/* ------------------------------------------------------------------ *
 * Process
 * ------------------------------------------------------------------ */

export type Step = {
  number: string;
  title: string;
  body: string;
  icon: IconName;
};

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Brief & discovery",
    body: "We start with the objective, not the format. Audience, budget, category and what success actually looks like for you.",
    icon: "compass",
  },
  {
    number: "02",
    title: "Concept & curation",
    body: "Format, talent, venue and creative direction come together into one costed concept you can sign off on.",
    icon: "palette",
  },
  {
    number: "03",
    title: "Partnerships & inventory",
    body: "We build the sponsorship deck, define branding inventory and bring the right partners to the table.",
    icon: "handshake",
  },
  {
    number: "04",
    title: "Production & promotion",
    body: "Stage, sound, light, permissions and crew on one side; creatives, reels and campus buzz on the other.",
    icon: "layers",
  },
  {
    number: "05",
    title: "Showtime",
    body: "Run-of-show, backstage flow and artist management — handled by a crew that has done the sound check twice.",
    icon: "stage",
  },
  {
    number: "06",
    title: "Recap & report",
    body: "Footfall, reach, content and coverage packaged into a recap your marketing team can take upstairs.",
    icon: "chart",
  },
];

/* ------------------------------------------------------------------ *
 * Impact numbers
 *
 * NEEDS-CONFIRMATION: `community`, `partnerships` and `verticalCount`
 * reflect what is publicly verifiable today. Update these as the roster
 * grows — they are deliberately conservative rather than inflated.
 * ------------------------------------------------------------------ */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption: string;
};

export const stats: Stat[] = [
  {
    value: 180,
    suffix: "+",
    label: "Events curated",
    caption: "Concerts, fests, showcases and brand activations",
  },
  {
    value: yearsActive,
    label: "Years on stage",
    caption: `Curating live moments since ${site.founded}`,
  },
  {
    value: 1500,
    suffix: "+",
    label: "Community",
    caption: "Students and creators following the stage",
  },
  {
    value: 6,
    label: "Creative verticals",
    caption: "Theatre, dance, singing, arts, music & more",
  },
];

/* ------------------------------------------------------------------ *
 * Why campus — industry context
 *
 * Every figure below is sourced. Live-events and experiential data come
 * from the EY-Parthenon × BookMyShow report "Beyond Attention. Into
 * Immersion." (March 2026); higher-education figures come from the
 * Government of India's AISHE 2023–24 survey.
 * ------------------------------------------------------------------ */

export type MarketStat = {
  value: string;
  label: string;
  source: string;
};

export const marketStats: MarketStat[] = [
  {
    value: "4.5 crore",
    label:
      "Students enrolled in Indian higher education — a single, concentrated, highly reachable audience.",
    source: "AISHE 2023–24",
  },
  {
    value: "48,000+",
    label:
      "Colleges across India, 82.9% of them private, each running its own fest calendar.",
    source: "AISHE 2023–24",
  },
  {
    value: "78%",
    label:
      "Of Indian consumers say they prefer spending on experiences over products.",
    source: "EY-Parthenon × BookMyShow, 2026",
  },
  {
    value: "59%",
    label:
      "Brand recall reported by live-event attendees — the number a banner ad cannot touch.",
    source: "EY-Parthenon × BookMyShow, 2026",
  },
  {
    value: "55%",
    label:
      "Higher purchase intent among audiences who met a brand at a live event.",
    source: "EY-Parthenon × BookMyShow, 2026",
  },
  {
    value: "63%",
    label:
      "Said a brand's presence actually improved their experience of the event itself.",
    source: "EY-Parthenon × BookMyShow, 2026",
  },
];

export const marketNote =
  "India's live events economy is valued at roughly ₹13,000 crore and 88% of brands that ran an experiential activation in the past year plan to continue or expand it. Campus is where that audience is densest — and where Rangmanch already has a stage.";

/* ------------------------------------------------------------------ *
 * Principles
 * ------------------------------------------------------------------ */

export const principles = [
  {
    title: "180+ shows of muscle memory",
    body: `We have been building live moments since ${site.founded}, so we know the crowd, the calendar and the politics of a campus booking. And we deliver to brand standards — decks, timelines and recaps included.`,
    icon: "campus" as IconName,
  },
  {
    title: "Brands in the moment, not on the banner",
    body: "A logo on a backdrop is forgettable. We design integrations people interact with, photograph and post — so the spend keeps compounding after the show.",
    icon: "target" as IconName,
  },
  {
    title: "One crew, curtain to recap",
    body: "Concept, sponsorship, production, content and reporting sit with the same team. Fewer handoffs, fewer surprises, one point of contact.",
    icon: "layers" as IconName,
  },
];

/* ------------------------------------------------------------------ *
 * FAQ
 * ------------------------------------------------------------------ */

export const faqs = [
  {
    q: "What kind of brands do you work with?",
    a: "Anyone trying to reach a young Indian audience in a real, physical moment — travel, F&B, energy drinks, personal care, fashion, fintech, edtech and gaming all work well on campus. We have run travel, energy and oral-care partnerships, and we build the inventory around your category rather than selling a fixed template.",
  },
  {
    q: "Do you only do college events?",
    a: "No. Campus is where we started and where we are strongest, but the same crew produces corporate launches, annual days and public live events. The discipline is identical — only the audience changes.",
  },
  {
    q: "How do sponsorships actually work?",
    a: "We share an inventory deck with the audience profile, branding touchpoints, deliverables and cost. You pick a package or we build a custom one. After the event you get a recap with footfall, reach, photos and content so the spend is accountable.",
  },
  {
    q: "Can you work with our existing fest or event?",
    a: "Yes. We frequently come in as a partner on someone else's stage — handling sponsorship sales, a specific activation zone, talent curation or promotions — rather than producing the whole event.",
  },
  {
    q: "How far in advance should we talk?",
    a: "Four to six weeks gives us room to build partnerships and promotions properly. We have turned things around faster, but the earlier you start, the better the inventory and the talent you can lock.",
  },
];
