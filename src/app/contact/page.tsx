import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionLabel } from "@/components/site/section-label";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { SealBadge } from "@/components/site/seal-badge";
import {
  CONTACT_DETAILS,
  SOCIAL_LINKS,
  BRAND_FOOTER_LINE,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us — Let's Build Your Business for What's Next",
  description:
    "Tell us what your business does, where you want to go, and what challenge you are facing. Gurur Consultancy will prepare the path — registrations, certifications, GeM, tenders — and walk it with you.",
  alternates: { canonical: "/contact" },
};

const SOCIALS = [
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: SOCIAL_LINKS.twitter, label: "Twitter", icon: Twitter },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: Facebook },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: Instagram },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        code="FILE 08"
        label="CONTACT US"
        title="Let's Build Your Business for What's Next"
        intro="Tell us what your business does, where you want to go, and what challenge you are facing — we'll prepare the path and walk it with you, end-to-end."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Two-column layout — form + details */}
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            {/* Form column */}
            <Reveal>
              <div>
                <SectionLabel code="FILE 08.1" label="ENQUIRY FORM" />
                <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                  Send us your enquiry
                </h2>
                <p className="mt-3 max-w-xl font-sans text-base leading-relaxed text-slatey">
                  Fill in the form below with as much detail as you can — the
                  more we know about your business, the more useful our first
                  reply will be.
                </p>
              </div>

              <div className="mt-8 border border-hairline bg-white p-1 shadow-[0_24px_60px_-32px_rgba(11,31,58,0.25)]">
                <ContactForm />
              </div>
            </Reveal>

            {/* Details column */}
            <Reveal delay={120}>
              <div className="space-y-6">
                <div>
                  <SectionLabel code="FILE 08.2" label="REACH US" />
                  <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                    Contact details
                  </h2>
                  <p className="mt-3 font-sans text-base leading-relaxed text-slatey">
                    Prefer to reach out directly? Use any of the channels below
                    — we reply within one business day.
                  </p>
                </div>

                {/* Contact card */}
                <div className="border border-hairline bg-white">
                  <ul className="divide-y divide-hairline">
                    <ContactRow
                      icon={<Phone className="h-4 w-4" />}
                      label="Phone"
                      value={CONTACT_DETAILS.phone}
                      href={CONTACT_DETAILS.phoneHref}
                    />
                    <ContactRow
                      icon={<MessageSquare className="h-4 w-4" />}
                      label="WhatsApp"
                      value={CONTACT_DETAILS.whatsapp}
                      href={CONTACT_DETAILS.whatsappHref}
                    />
                    <ContactRow
                      icon={<Mail className="h-4 w-4" />}
                      label="Email"
                      value={CONTACT_DETAILS.email}
                      href={CONTACT_DETAILS.emailHref}
                    />
                    <ContactRow
                      icon={<MapPin className="h-4 w-4" />}
                      label="Office"
                      value={CONTACT_DETAILS.address}
                    />
                    <ContactRow
                      icon={<Clock className="h-4 w-4" />}
                      label="Hours"
                      value={CONTACT_DETAILS.hours}
                    />
                  </ul>

                  {/* Socials */}
                  <div className="flex items-center gap-2 border-t border-hairline p-5">
                    <span className="font-mono text-[10px] uppercase tracking-widest-2 text-slatey">
                      Follow us
                    </span>
                    <div className="ml-auto flex items-center gap-2">
                      {SOCIALS.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          aria-label={s.label}
                          className="inline-flex h-8 w-8 items-center justify-center border border-hairline text-navy transition-all hover:border-gold hover:bg-navy hover:text-gold"
                        >
                          <s.icon className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Seal emblem */}
                <div className="flex items-center gap-4 border border-hairline bg-navy p-5 text-white">
                  <div className="text-gold">
                    <SealBadge size="sm" />
                  </div>
                  <div>
                    <p className="font-serif text-base font-semibold">
                      Registered. Certified. Trusted.
                    </p>
                    <p className="mt-1 font-sans text-xs text-white/70">
                      Gurur Consultancy Services LLP
                    </p>
                  </div>
                </div>

                <p className="font-mono text-[10px] uppercase tracking-widest-2 text-slatey">
                  [ADD DETAILS] — Replace all placeholder phone / email /
                  address values before launch.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="bg-white">
        <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
          <Reveal>
            <SectionLabel code="FILE 08.3" label="FIND US" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-navy sm:text-3xl">
              Our office
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-slatey">
              Visit us for an in-person consultation — by appointment only.
             
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 border border-hairline">
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-warmwhite">
                <iframe
                  src={CONTACT_DETAILS.mapEmbedSrc}
                  title="Gurur Consultancy office location map"
                  className="h-full w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing band */}
      <section className="bg-navy text-white">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-widest-2 text-gold">
              — GURUR CONSULTANCY SERVICES LLP
            </p>
            <h2 className="mt-4 font-serif text-2xl font-semibold sm:text-3xl lg:text-4xl">
              {BRAND_FOOTER_LINE}
            </h2>
            <Link
              href="/services"
              className="mt-6 inline-flex items-center gap-2 border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Explore our services
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className="flex h-10 w-10 items-center justify-center bg-warmwhite text-gold-600">
        {icon}
      </span>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest-2 text-slatey">
          {label}
        </div>
        <div className="mt-0.5 font-sans text-[14px] font-medium text-navy">
          {value}
        </div>
      </div>
    </>
  );
  return (
    <li className="flex items-center gap-4 px-5 py-4">
      {href ? (
        <a
          href={href}
          className="flex w-full items-center gap-4 transition-colors hover:text-gold-700"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
