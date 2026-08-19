"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SealBadge } from "./seal-badge";
import { BRAND_TAGLINE_HI } from "@/lib/site-data";

/**
 * CTABand — final CTA section.
 * Navy background, large headline, gold CTA, and the seal "stamps" into view
 * (animated scale/fade-in via the seal-stamp keyframe).
 *
 * The seal is positioned absolutely, large, behind the headline — its full-opacity
 * "stamped" moment that punctuates the page.
 */
export function CTABand({
  eyebrow = "LET'S BEGIN",
  title = "Your Growth Deserves the Right Support",
  body = "Tell us where your business is today and where you want to take it. We'll prepare the path — registrations, certifications, GeM, tenders — and walk it with you end-to-end.",
  ctaText = "Talk to Our Team",
  ctaHref = "/contact",
  showHindi = true,
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  ctaText?: string;
  ctaHref?: string;
  showHindi?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Top hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Large seal — stamped in on scroll */}
        <div className="pointer-events-none absolute right-[-40px] top-1/2 hidden -translate-y-1/2 text-gold lg:block">
          <Reveal>
            <SealBadge size="lg" animated className="opacity-90" />
          </Reveal>
        </div>

        <div className="relative max-w-2xl">
          <span className="eyebrow-code text-gold">— {eyebrow}</span>

          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {showHindi && (
            <p className="mt-4 font-serif text-xl italic text-gold/90">
              {BRAND_TAGLINE_HI}
            </p>
          )}

          <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-white/80">
            {body}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 font-semibold text-navy transition-all hover:bg-gold-300 hover:shadow-[0_12px_30px_-8px_rgba(201,162,77,0.65)]"
            >
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
