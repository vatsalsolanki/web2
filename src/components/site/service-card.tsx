"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/lib/site-data";

/**
 * ServiceCard — dossier-style service card.
 * - 1px hairline border
 * - mono reference code eyebrow (REG-01, GEM-04, ...)
 * - service name in Plex Sans semibold
 * - one-line description in slatey
 * - thin gold rule appears on hover (the "stamp of approval")
 * - if `item.details` is provided, an expandable accordion toggles a bullet list
 */
export function ServiceCard({
  item,
  onDark = false,
}: {
  item: ServiceItem;
  onDark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!item.details?.length;

  return (
    <article
      className={cn(
        "group relative flex flex-col border bg-white p-5 transition-all duration-300",
        onDark ? "border-white/15 bg-white/5" : "border-hairline hover:border-gold/60",
        "hover:shadow-[0_18px_40px_-24px_rgba(11,31,58,0.45)]",
      )}
    >
      {/* Hover-only gold rule — the stamp of approval */}
      <span className="absolute left-0 top-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />

      {/* Code eyebrow */}
      <div className="flex items-center justify-between">
        <span className="eyebrow-code text-gold-600">{item.code}</span>
        <span className="font-mono text-[10px] text-slatey/60">•</span>
      </div>

      {/* Service name */}
      <h3
        className={cn(
          "mt-3 font-sans text-[15px] font-semibold leading-snug",
          onDark ? "text-white" : "text-navy",
        )}
      >
        {item.name}
      </h3>

      {/* Description */}
      <p
        className={cn(
          "mt-2 font-sans text-[13px] leading-relaxed",
          onDark ? "text-white/70" : "text-slatey",
        )}
      >
        {item.description}
      </p>

      {/* Accordion (optional) */}
      {hasDetails && (
        <div className="mt-4 border-t border-hairline pt-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="flex w-full items-center justify-between font-mono text-[11px] uppercase tracking-widest-2 text-navy/80 transition-colors hover:text-gold-700"
          >
            <span>{open ? "Hide details" : "View details"}</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform",
                open && "rotate-180 text-gold-600",
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300",
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <ul className="mt-3 space-y-1.5 overflow-hidden">
              {item.details!.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-sans text-[12.5px] leading-snug text-slatey"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Footer CTA — links to the dedicated service page when one exists, else falls back to Contact */}
      <div className="mt-auto pt-4">
        <Link
          href={item.slug ? `/services/${item.slug}` : "/contact"}
          className="inline-flex items-center gap-1 font-sans text-[12px] font-semibold uppercase tracking-widest-2 text-navy transition-colors hover:text-gold-700"
        >
          {item.slug ? "View Details" : "Learn More"}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
