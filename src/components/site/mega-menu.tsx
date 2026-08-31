"use client";

import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

/**
 * MegaMenu — appears on hover over "Services" in the desktop header.
 * 4 columns × 2 rows of category columns with their top sub-items.
 */
export function MegaMenu() {
  return (
    <div
      className="invisible absolute left-1/2 top-full z-50 w-[min(92vw,64rem)] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100"
      role="menu"
    >
      <div className="grid grid-cols-2 gap-0 border-l-2 border-gold bg-white p-6 shadow-[0_24px_60px_-20px_rgba(11,31,58,0.4)] sm:grid-cols-4 lg:p-8">
        {SERVICE_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="group/cat border-b border-hairline px-3 py-4 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
          >
            <Link
              href={`/services#${cat.id}`}
              className="block"
              role="menuitem"
            >
              <div className="font-mono text-[10px] uppercase tracking-widest-2 text-gold-600">
                {cat.code}
              </div>
              <div className="mt-1 font-sans text-[13px] font-semibold leading-snug text-navy transition-colors group-hover/cat:text-gold-700">
                {cat.name}
              </div>
            </Link>
            <ul className="mt-2 space-y-1.5">
              {cat.items.slice(0, 4).map((item) => (
                <li key={item.code}>
                  <Link
                    href={item.slug ? `/services/${item.slug}` : `/services#${cat.id}`}
                    className="block text-[12px] leading-snug text-slatey transition-colors hover:text-navy hover:underline"
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Footer CTA inside mega-menu */}
        <div className="col-span-2 mt-2 flex items-center justify-between border-t border-hairline px-3 pt-4 sm:col-span-4">
          <p className="font-sans text-[13px] text-slatey">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-navy transition-colors hover:text-gold-700"
          >
            Talk to our consultants
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
