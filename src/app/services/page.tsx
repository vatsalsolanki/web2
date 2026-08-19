import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionLabel } from "@/components/site/section-label";
import { Reveal } from "@/components/site/reveal";
import { ServiceCard } from "@/components/site/service-card";
import {
  ServiceSidebar,
  ServiceMobileTabs,
} from "@/components/site/service-sidebar";
import { SERVICE_CATEGORIES } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Our Services — Business, Compliance, Certifications & Tenders",
  description:
    "Eight service categories under one roof: business registration, government & statutory registrations, GeM & procurement, government tenders, certifications, trademark & IP, NGO/CSR and documentation & reports.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        code="FILE 07"
        label="OUR SERVICES"
        title="Our Services"
        intro="Comprehensive business, compliance, certification and government tendering solutions under one roof — organised into eight clear categories so you can find exactly what you need."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* Mobile tab strip */}
      <div className="bg-warmwhite">
        <div className="mx-auto max-w-8xl px-4 pt-6 sm:px-6 lg:hidden">
          <ServiceMobileTabs />
        </div>
      </div>

      {/* Main layout: sidebar + content */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
            <ServiceSidebar />

            <div className="space-y-20 lg:space-y-24">
              {SERVICE_CATEGORIES.map((cat, i) => (
                <section
                  key={cat.id}
                  id={cat.id}
                  className="scroll-mt-28"
                  aria-labelledby={`${cat.id}-heading`}
                >
                  <Reveal>
                    {/* Category header */}
                    <div className="border-l-2 border-gold pl-5">
                      <div className="flex items-center gap-3">
                        <span className="eyebrow-code text-gold-600">
                          {String(i + 1).padStart(2, "0")} · {cat.code}
                        </span>
                        <span className="h-px w-12 bg-hairline" />
                        <span className="font-mono text-[10px] uppercase tracking-widest-2 text-slatey/70">
                          {cat.items.length} sub-services
                        </span>
                      </div>
                      <h2
                        id={`${cat.id}-heading`}
                        className="mt-3 max-w-3xl font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl lg:text-4xl"
                      >
                        {cat.name}
                      </h2>
                      <p className="mt-3 max-w-2xl font-sans text-[15px] leading-relaxed text-slatey">
                        {cat.intro}
                      </p>
                    </div>

                    {/* Cards grid */}
                    <div className="mt-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 xl:grid-cols-3">
                      {cat.items.map((item) => (
                        <ServiceCard key={item.code} item={item} />
                      ))}
                    </div>
                  </Reveal>
                </section>
              ))}

              {/* End CTA */}
              <Reveal>
                <div className="border-t border-hairline pt-12">
                  <div className="flex flex-col items-start justify-between gap-6 border border-gold/40 bg-navy p-7 sm:flex-row sm:items-center sm:p-9">
                    <div>
                      <div className="eyebrow-code text-gold">— STILL UNSURE?</div>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-white sm:text-2xl">
                        Not sure which service you need?
                      </h3>
                      <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-white/75">
                        Tell us where your business is today and what you're
                        trying to achieve — we'll prepare the right path.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex shrink-0 items-center gap-2 bg-gold px-6 py-3 font-semibold text-navy transition-all hover:bg-gold-300 hover:shadow-[0_12px_30px_-8px_rgba(201,162,77,0.65)]"
                    >
                      Talk to our consultants
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
