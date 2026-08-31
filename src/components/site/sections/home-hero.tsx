"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SealBadge } from "@/components/site/seal-badge";
import { Reveal } from "@/components/site/reveal";


const BRAND_TAGLINE_HI = "आपकी सफलता में हमारा गुरुर है।"

// TODO: replace with brand photography
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        {/* TODO: replace with brand photography — Indian business team / consultancy office */}
        <Image
          src={HERO_IMAGE}
          alt="Gurur Consultancy team meeting with clients"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        {/* Navy overlay — unified treatment across all photos */}
      </div>

      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[88vh] max-w-8xl flex-col justify-center px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl font-serif text-2xl font-semibold leading-[1.05] text-gold sm:text-5xl lg:text-7xl">
  आपकी सफलता में
  <br />
  हमारा गुरुर है।
</h1>
        </Reveal>

        {/* Certificate-style frame around the tagline paragraph */}
        <Reveal delay={160}>
          <div className="cert-frame mt-8 max-w-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <SealBadge
                size="sm"
                className="shrink-0 text-gold"
              />
              <p className="font-sans text-base leading-relaxed text-white/85">
                Gurur Consultancy Services LLP brings comprehensive{" "}
                <strong className="font-semibold text-white">
                  business, compliance, certification
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-white">
                  government tendering
                </strong>{" "}
                solutions under one roof — so you can focus on running your
                business while we handle the paperwork.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={280}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 font-semibold text-navy transition-all hover:bg-gold-300 hover:shadow-[0_12px_30px_-8px_rgba(201,162,77,0.65)]"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-3.5 font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Explore Services
            </Link>
          </div>
        </Reveal>

      </div>

      {/* Bottom scroll hint */}

    </section>
  );
}