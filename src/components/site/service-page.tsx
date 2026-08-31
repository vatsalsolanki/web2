import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2 } from "lucide-react";
import { PageHero } from "./page-hero";
import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { Icon } from "./icon";
import { CTABand } from "./cta-band";
import { ServiceProcessSteps } from "./service-process";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { WHY_CHOOSE_GURUR } from "@/lib/site-data";
import { getRelatedServices, type Service } from "@/lib/services";

/**
 * ServicePage — the one common layout every /services/[slug] page renders.
 * Content differs per service via the `service` prop; the structure,
 * spacing and visual language stay identical across all of them.
 */
export function ServicePage({ service }: { service: Service }) {
  const related = getRelatedServices(service, 4);

  return (
    <>
      <PageHero
        code={service.code ?? "SERVICE"}
        label={service.categoryLabel}
        title={service.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: service.categoryLabel, href: `/services#${service.categoryId}` },
          { label: service.title },
        ]}
      >
        <div className="mt-8 max-w-2xl">
          <h2 className="font-serif text-xl font-semibold leading-snug text-gold sm:text-2xl">
            {service.heroHeadline}
          </h2>
          <p className="mt-3 font-sans text-base leading-relaxed text-white/80">
            {service.heroSupport}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 font-semibold text-navy transition-all hover:bg-gold-300 hover:shadow-[0_12px_30px_-8px_rgba(201,162,77,0.65)]"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/services#${service.categoryId}`}
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-gold hover:text-gold"
          >
            View {service.categoryLabel}
          </Link>
        </div>
      </PageHero>

      {/* B/C — Overview */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionLabel code="01" label="OVERVIEW" />
            <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
              What is {service.title}?
            </h2>
            <div className="mt-5 space-y-4 font-sans text-base leading-relaxed text-slatey">
              {service.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* D — Key Benefits */}
      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionLabel code="02" label="KEY BENEFITS" />
            <h2 className="mt-4 max-w-2xl font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
              Why this matters for your business
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((b, i) => (
              <Reveal key={i} delay={(i % 3) * 60}>
                <div className="flex h-full items-start gap-3 bg-warmwhite p-5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={1.75} />
                  <span className="font-sans text-[14px] leading-relaxed text-navy">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E — Who Needs This Service */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal>
              <SectionLabel code="03" label="WHO NEEDS THIS" />
              <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
                Who typically needs {service.title}?
              </h2>
              <p className="mt-4 font-sans text-[15px] leading-relaxed text-slatey">
                Applicability varies by business — here&rsquo;s who this usually applies to.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2">
                {service.whoNeedsIt.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white px-5 py-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                    <span className="font-sans text-[14px] leading-relaxed text-navy">{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* F — Eligibility (optional) */}
      {service.eligibility && service.eligibility.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Reveal>
              <SectionLabel code="04" label="ELIGIBILITY & CONSIDERATIONS" />
              <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
                Eligibility &amp; requirements
              </h2>
              <ul className="mt-6 space-y-3">
                {service.eligibility.map((e, i) => (
                  <li key={i} className="flex items-start gap-3 border-l-2 border-gold/50 bg-warmwhite py-2 pl-4">
                    <span className="font-sans text-[14.5px] leading-relaxed text-slatey">{e}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* G — Documents Required (optional) */}
      {service.documents && service.documents.length > 0 && (
        <section className="bg-warmwhite">
          <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Reveal>
              <SectionLabel code="05" label="DOCUMENTS" />
              <h2 className="mt-4 max-w-2xl font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
                Documents &amp; information
              </h2>
              {service.documentsNote && (
                <p className="mt-3 font-sans text-[14px] italic text-slatey">{service.documentsNote}</p>
              )}
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
              {service.documents.map((d, i) => (
                <Reveal key={i} delay={(i % 3) * 60}>
                  <div className="flex h-full items-start gap-3 bg-white p-5">
                    <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" strokeWidth={1.75} />
                    <span className="font-sans text-[13.5px] leading-relaxed text-navy">{d}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* H — Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionLabel code="06" label="PROCESS" />
            <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
              How we take this forward
            </h2>
          </Reveal>
          <div className="mt-10">
            <ServiceProcessSteps steps={service.process} />
          </div>
        </div>
      </section>

      {/* I — Why Gurur Consultancy */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionLabel code="07" label="WHY GURUR" onDark />
            <h2 className="mt-4 max-w-2xl font-serif text-2xl font-semibold leading-tight sm:text-3xl">
              Our approach to {service.title}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_GURUR.map((c) => (
              <div key={c.code} className="flex items-start gap-4 bg-navy p-5">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-gold">
                  <Icon name={c.icon} className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-sans text-[13.5px] font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 font-sans text-[12.5px] leading-relaxed text-white/65">{c.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* J — FAQs */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <SectionLabel code="08" label="FAQS" />
            <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
              Frequently asked questions
            </h2>
          </Reveal>
          <div className="mt-8 border border-hairline bg-white px-6">
            <Accordion type="single" collapsible>
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-hairline">
                  <AccordionTrigger className="font-sans text-[14.5px] font-semibold text-navy hover:no-underline">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-[14px] leading-relaxed text-slatey">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* K — Related Services */}
      {related.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Reveal>
              <SectionLabel code="09" label="RELATED SERVICES" />
              <h2 className="mt-4 max-w-2xl font-serif text-2xl font-semibold leading-tight text-navy sm:text-3xl">
                You may also need
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex flex-col justify-between bg-warmwhite p-5 transition-colors hover:bg-navy"
                >
                  <div>
                    <span className="eyebrow-code text-gold-600">{r.code ?? "SERVICE"}</span>
                    <h3 className="mt-2 font-sans text-[14px] font-semibold text-navy transition-colors group-hover:text-white">
                      {r.title}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 font-sans text-[12px] font-semibold uppercase tracking-widest-2 text-navy/70 transition-colors group-hover:text-gold">
                    View
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* L — Final CTA */}
      <CTABand
        eyebrow="NEED HELP?"
        title={`Need Help With ${service.title}?`}
        body={
          service.ctaDescription ??
          "Tell us about your business and we'll confirm the right next step, prepare the documentation and take it forward with you."
        }
        ctaText="Enquire Now"
        ctaHref="/contact"
        showHindi={false}
      />
    </>
  );
}
