import type { Metadata } from "next";
import { HomeHero } from "@/components/site/sections/home-hero";
import { HomeTrustStrip } from "@/components/site/sections/home-trust-strip";
import { HomePillars } from "@/components/site/sections/home-pillars";
import { HomeJourney } from "@/components/site/sections/home-journey";
import { HomeWhy } from "@/components/site/sections/home-why";
import { HomeWhoWeSupport } from "@/components/site/sections/home-who-we-support";
import { HomeProcessBand } from "@/components/site/sections/home-process-band";
import { CTABand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Gurur Consultancy Services LLP — Business, Compliance & Government Tendering",
  description:
    "Comprehensive business registration, GST & MSME, GeM & government procurement, ISO certifications, trademarks, NGO/CSR and tender documentation — all under one roof. Your Business. Our Expertise. Your Growth.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <HomePillars />
      <HomeJourney />
      <HomeWhy />
      <HomeWhoWeSupport />
      <HomeProcessBand />
      <CTABand />
    </>
  );
}
