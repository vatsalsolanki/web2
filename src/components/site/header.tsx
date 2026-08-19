"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services", hasMenu: true },
  { href: "/contact", label: "Contact Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    if (!pathname) return;
    // defer to next tick to avoid sync setState during effect
    const t = window.setTimeout(() => setMobileOpen(false), 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-navy shadow-[0_8px_30px_-12px_rgba(11,31,58,0.45)]"
          : "bg-navy/95 backdrop-blur-sm",
      )}
    >
      {/* Top hairline ribbon */}
      <div className="h-[3px] w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div
        className={cn(
          "mx-auto flex max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300",
          scrolled ? "h-14" : "h-20",
        )}
      >
        {/* Brand wordmark */}
        <Link
          href="/"
          aria-label="Gurur Consultancy — Home"
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-9 w-9 items-center justify-center border border-gold/40 bg-navy">
            <span className="font-serif text-xl font-semibold text-gold">G</span>
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 bg-gold" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-tight text-white sm:text-lg">
              GURUR CONSULTANCY
            </span>
            <span className="mt-0.5 hidden font-mono text-[10px] uppercase tracking-widest-3 text-gold/90 sm:block">
              Services LLP
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            if (link.hasMenu) {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-gold" : "text-white/85 hover:text-white",
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  </Link>
                  <MegaMenu />
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-gold" : "text-white/85 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-2 bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-all hover:bg-gold-300 hover:shadow-[0_8px_24px_-8px_rgba(201,162,77,0.65)] sm:inline-flex"
          >
            Get Free Consultation
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
