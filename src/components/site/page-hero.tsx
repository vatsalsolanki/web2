"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "./section-label";

/**
 * PageHero — navy banner hero used on inner pages (About, Services, Contact).
 */
export function PageHero({
  code,
  label,
  title,
  intro,
  breadcrumb,
  className,
  children,
}: {
  code: string;
  label: string;
  title: string;
  intro?: string;
  breadcrumb: { label: string; href?: string }[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy text-white",
        className,
      )}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Corner accent — gold tick */}
      <div className="absolute right-6 top-6 hidden lg:block">
        <div className="h-12 w-12 border-t-2 border-r-2 border-gold/50" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest-2 text-white/60"
        >
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {b.href ? (
                <Link href={b.href} className="hover:text-gold">
                  {b.label}
                </Link>
              ) : (
                <span className="text-gold">{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && (
                <ChevronRight className="h-3 w-3 text-white/40" />
              )}
            </span>
          ))}
        </nav>

        <SectionLabel code={code} label={label} onDark className="mt-6" />

        <h1 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        {intro && (
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
            {intro}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
