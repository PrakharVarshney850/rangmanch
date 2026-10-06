import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Emit a fully static site into `out/`, so it can be dropped onto any
   * host — GoDaddy cPanel, Netlify, Cloudflare Pages — with no Node runtime.
   */
  output: "export",

  /**
   * Static hosting has no image-optimisation endpoint, so images are served
   * exactly as committed. Source assets are pre-converted to WebP to
   * compensate (see src/assets).
   */
  images: { unoptimized: true },

  /**
   * Emit `about/index.html` rather than `about.html`, which is what Apache
   * and most shared hosts expect when resolving clean URLs.
   */
  trailingSlash: true,
};

export default nextConfig;
