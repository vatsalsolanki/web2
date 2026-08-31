"use client";

import Link from "next/link";
import Image from "next/image";
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

    const t = window.setTimeout(() => setMobileOpen(false), 0);

    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-navy shadow-[0_8px_30px_-12px_rgba(11,31,58,0.45)]"
          : "bg-navy/95 backdrop-blur-sm"
      )}
    >
      {/* Top gold accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />

      <div
        className={cn(
          "mx-auto flex max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300",
          scrolled ? "h-18" : "h-20"
        )}
      >
        {/* =========================
            BRAND LOGO
        ========================== */}
        <Link
          href="/"
          aria-label="Gurur Consultancy — Home"
          className="group flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Gurur Consultancy"
            width={200}
            height={80}
            priority
            className={cn(
              "w-auto object-contain transition-all duration-300",
              scrolled
                ? "h-10 sm:h-12"
                : "h-12 sm:h-14"
            )}
          />
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;

            if (link.hasMenu) {
              return (
                <div
                  key={link.href}
                  className="group relative"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2 text-lg font-medium transition-colors",
                      active
                        ? "text-gold"
                        : "text-white/85 hover:text-white"
                    )}
                  >
                    {link.label}

                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    />
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
                  "px-4 py-2 text-lg font-medium transition-colors",
                  active
                    ? "text-gold"
                    : "text-white/85 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* =========================
            RIGHT CTA + MOBILE MENU
        ========================== */}
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
            aria-label={
              mobileOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}