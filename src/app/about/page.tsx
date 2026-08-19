import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionLabel } from "@/components/site/section-label";
import { Reveal } from "@/components/site/reveal";
import { ProcessTimeline } from "@/components/site/process-timeline";
import { Icon } from "@/components/site/icon";
import { SealBadge } from "@/components/site/seal-badge";
import {
  WHY_CHOOSE_GURUR,
  WHO_WE_SUPPORT,
  PROCESS_STEPS,
  BRAND_TAGLINE_HI,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us — Gurur Consultancy Services LLP",
  description:
    "Gurur Consultancy Services LLP is a multi-disciplinary consultancy that takes care of the complexities of business registration, compliance, certifications and government procurement — so you can focus on what you do best.",
  alternates: { canonical: "/about" },
};

// TODO: replace with brand photography — Gurur Consultancy office / team
const OFFICE_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80";

export default function AboutPage() {
  return (
    <>
      <PageHero
        code="FILE 06"
        label="ABOUT US"
        title="About Gurur Consultancy"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Who We Are */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <Reveal>
              <SectionLabel code="FILE 06.1" label="WHO WE ARE" />
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                A multi-disciplinary consultancy built for India's businesses.
              </h2>
              <div className="mt-6 space-y-5 font-sans text-base leading-relaxed text-slatey">
                <p>
                  Gurur Consultancy Services LLP is a Limited Liability
                  Partnership registered under the laws of India. We exist to
                  bring comprehensive business, compliance, certification and
                  government tendering solutions under one roof — so that
                  founders, owners and managers can focus on running their
                  business while we handle the paperwork.
                </p>
                <p>
                  For most businesses, dealing with government registrations
                  and tender portals is a recurring distraction: forms to fill,
                  documents to file, departments to chase. Our role is to
                  take care of the complexities — the procedural detail, the
                  sequencing, the follow-up — and translate them into clear,
                  concrete actions for your team.
                </p>
                <p>
                  Whether you are an entrepreneur setting up your first
                  proprietorship, a manufacturer preparing for ISO
                  certification, or an established company bidding for your
                  first government tender — we work as your single, accountable
                  partner across every stage.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-gold bg-white p-5">
                <p className="font-serif text-lg italic text-navy">
                  “Your Business. Our Expertise. Your Growth.”
                </p>
                <p className="mt-2 font-serif text-base italic text-gold-700">
                  {BRAND_TAGLINE_HI}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                {/* TODO: replace with brand photography — office team */}
                <div className="cert-frame relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={OFFICE_IMAGE}
                    alt="Gurur Consultancy office workspace"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(11,31,58,0) 50%, rgba(11,31,58,0.6) 100%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-mono text-[10px] uppercase tracking-widest-2 text-gold">
                      [ OUR TEAM ]
                    </p>
                    <p className="font-serif text-lg">Registered. Certified. Trusted.</p>
                  </div>
                </div>

                {/* Small seal beside the image */}
                <div className="absolute -bottom-8 -right-2 text-gold sm:-right-6">
                  <SealBadge size="md" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <SectionLabel code="FILE 06.2" label="OUR APPROACH" onDark />
            <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Understand. Prepare. Apply. Follow Up. Complete.
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
              Five deliberate steps we follow for every engagement — from a
              single GST filing to a multi-stage government tender bid.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14">
              <ProcessTimeline steps={PROCESS_STEPS} variant="dark" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Businesses Choose Gurur — detailed */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <SectionLabel code="FILE 06.3" label="WHY GURUR" />
            <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Why Businesses Choose Gurur
            </h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slatey sm:text-lg">
              Six commitments that shape every interaction we have with you —
              detailed here so you know exactly what to expect when we work
              together.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-2">
            {WHY_CHOOSE_GURUR.map((c, i) => (
              <Reveal key={c.code} delay={(i % 2) * 80}>
                <article className="group relative h-full bg-white p-7 transition-colors hover:bg-navy">
                  <span className="absolute left-0 top-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                  <div className="flex items-start gap-5">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-hairline text-navy transition-colors group-hover:border-gold/50 group-hover:text-gold">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="eyebrow-code text-gold-600">{c.code}</div>
                      <h3 className="mt-1 font-serif text-xl font-semibold text-navy transition-colors group-hover:text-white">
                        {c.title}
                      </h3>
                      <p className="mt-2 font-sans text-[14px] leading-relaxed text-slatey transition-colors group-hover:text-white/70">
                        {c.full}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <Reveal>
              <SectionLabel code="FILE 06.4" label="WHO WE SUPPORT" />
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                Who We Support
              </h2>
              <p className="mt-5 font-sans text-base leading-relaxed text-slatey">
                From first-time founders to established manufacturers and
                non-profits, our service model adapts to your stage — and
                scales with you as you grow.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2">
                {WHO_WE_SUPPORT.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 bg-warmwhite px-5 py-4"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest-2 text-gold-600">
                      CL
                    </span>
                    <span className="font-sans text-[15px] font-medium text-navy">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Values band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="flex justify-center text-gold">
              <SealBadge size="md" />
            </div>
            <p className="mt-8 font-serif text-2xl font-semibold italic text-gold sm:text-3xl">
              {BRAND_TAGLINE_HI}
            </p>
            <p className="mt-3 font-serif text-xl text-white sm:text-2xl">
              Your success is our Gurur.
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-white/80 sm:text-lg">
              We bring comprehensive business, compliance, certification and
              government tendering solutions under one roof — so you can build
              what you set out to build.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold px-7 py-3.5 font-semibold text-navy transition-all hover:bg-gold-300 hover:shadow-[0_12px_30px_-8px_rgba(201,162,77,0.65)]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
