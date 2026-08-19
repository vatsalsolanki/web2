import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import {
  SERVICE_CATEGORIES,
  CONTACT_DETAILS,
  SOCIAL_LINKS,
  BRAND_FOOTER_LINE,
  BRAND_TAGLINE_HI,
} from "@/lib/site-data";
import { SealBadge } from "./seal-badge";

const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

const SOCIALS = [
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: SOCIAL_LINKS.twitter, label: "Twitter", icon: Twitter },
  { href: SOCIAL_LINKS.facebook, label: "Facebook", icon: Facebook },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", icon: Instagram },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy text-white">
      {/* Top gold rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand blurb */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center border border-gold/40">
                <span className="font-serif text-xl font-semibold text-gold">G</span>
                <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 bg-gold" />
              </span>
              <div>
                <div className="font-serif text-base font-semibold leading-tight">
                  GURUR CONSULTANCY
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest-3 text-gold/90">
                  Services LLP
                </div>
              </div>
            </div>

            <p className="mt-5 font-serif text-lg leading-snug text-white/90">
              Your Business.
              <br />
              Our Expertise.
              <br />
              Your Growth.
            </p>

            <p className="mt-3 font-sans text-sm italic text-gold/90">
              {BRAND_TAGLINE_HI}
            </p>

            <div className="mt-6 max-w-[120px] opacity-70 text-gold">
              <SealBadge size="sm" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="eyebrow-code text-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-1 font-sans text-sm text-white/80 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-3 bg-gold/40 transition-all group-hover:w-5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow-code text-gold">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services#${cat.id}`}
                    className="font-sans text-sm text-white/80 transition-colors hover:text-gold"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="eyebrow-code text-gold">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="font-sans text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={CONTACT_DETAILS.emailHref}
                  className="font-sans text-sm text-white/80 transition-colors hover:text-gold"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="font-sans text-sm text-white/80">
                  {CONTACT_DETAILS.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="font-sans text-sm text-white/80">
                  {CONTACT_DETAILS.hours}
                </span>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-white/70 transition-all hover:border-gold hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-2 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-widest-2 text-white/60">
            © {new Date().getFullYear()} Gurur Consultancy Services LLP
          </p>
          <p className="font-serif text-sm italic text-gold/90">
            {BRAND_FOOTER_LINE}
          </p>
        </div>
      </div>
    </footer>
  );
}
