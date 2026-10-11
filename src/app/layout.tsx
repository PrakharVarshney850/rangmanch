import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteSchema } from "@/lib/schema";
import { site } from "@/lib/site";

/*
 * Fonts are self-hosted rather than pulled from Google at build time:
 * it removes a third-party request at runtime and keeps builds working
 * on networks that cannot reach fonts.googleapis.com.
 * Cinzel and Inter are both SIL Open Font License 1.1.
 */
const cinzel = localFont({
  src: [
    {
      path: "../assets/fonts/cinzel-latin.woff2",
      weight: "400 900",
      style: "normal",
    },
  ],
  variable: "--font-cinzel",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const inter = localFont({
  src: [
    {
      path: "../assets/fonts/inter-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Curating Events, Creating Brand Impact`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Rangmanch",
    "campus events India",
    "college fest sponsorship",
    "brand activation",
    "experiential marketing",
    "student marketing",
    "live events",
    "artist management",
    "Chandigarh events",
    "Punjab college fest",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Curating Events, Creating Brand Impact`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Curating Events, Creating Brand Impact`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#06050a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-stage-950 text-cream antialiased">
        <script
          type="application/ld+json"
          // Static, build-time constant — no user input is interpolated here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
