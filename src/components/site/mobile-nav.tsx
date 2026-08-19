"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES } from "@/lib/site-data";
import { ChevronDown, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed inset-0 top-[calc(3px+3.5rem)] z-40 bg-navy/98 backdrop-blur-sm transition-all duration-300 lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav
        className="mx-auto flex h-full max-h-[calc(100vh-3.5rem)] max-w-2xl flex-col overflow-y-auto px-4 py-6 nice-scrollbar"
        aria-label="Mobile"
      >
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => {
            if (link.href === "/services") {
              return (
                <li key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href="/services"
                      className="flex-1 border-b border-white/10 py-3.5 font-serif text-lg text-white"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Expand services"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      className="h-12 w-12 text-white"
                    >
                      <ChevronDown
                        className={cn(
                          "mx-auto h-5 w-5 transition-transform",
                          servicesOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </div>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      servicesOpen ? "max-h-[60rem]" : "max-h-0",
                    )}
                  >
                    <ul className="space-y-0 py-2 pl-4">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <li key={cat.id}>
                          <Link
                            href={`/services#${cat.id}`}
                            onClick={onClose}
                            className="block border-b border-white/5 py-2 text-sm text-white/75 transition-colors hover:text-gold"
                          >
                            <span className="font-mono text-[10px] text-gold/80">
                              {cat.code}
                            </span>
                            <span className="ml-2">{cat.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block border-b border-white/10 py-3.5 font-serif text-lg text-white transition-colors hover:text-gold"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          onClick={onClose}
          className="mt-6 inline-flex items-center justify-center gap-2 bg-gold px-5 py-3 font-semibold text-navy"
        >
          Get Free Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>

        <div className="mt-auto pt-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest-2 text-gold/80">
            आपकी सफलता में हमारा गुरुर है।
          </p>
        </div>
      </nav>
    </div>
  );
}
