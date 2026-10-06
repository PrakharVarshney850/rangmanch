import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required by `output: "export"` so the file is emitted at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
