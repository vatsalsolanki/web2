import type { NextConfig } from "next";
import { REDIRECT_ENTRIES } from "./src/lib/services/manifest";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,

  async redirects() {
    // Service slugs that describe the same regulatory instrument as another
    // page (e.g. "Food Business License" === the FSSAI License) permanently
    // redirect to the canonical page instead of duplicating content.
    return REDIRECT_ENTRIES.map((entry) => ({
      source: `/services/${entry.slug}`,
      destination: `/services/${entry.redirectTo}`,
      permanent: true,
    }));
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  allowedDevOrigins: ["*"],
};

export default nextConfig;