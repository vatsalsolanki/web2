"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES } from "@/lib/site-data";

/**
 * ServiceSidebar — sticky filing-cabinet index tabs (desktop).
 * Active tab extends slightly right + gains a gold left-edge bar.
 * Uses scrollspy via IntersectionObserver on each category section.
 */
export function ServiceSidebar() {
  const [activeId, setActiveId] = useState<string>(SERVICE_CATEGORIES[0].id);

  useEffect(() => {
    const sections = SERVICE_CATEGORIES.map((c) =>
      document.getElementById(c.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry that is most in view
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        {/* Header */}
        <div className="border-b border-hairline pb-3">
          <div className="eyebrow-code text-gold-600">— CATEGORIES</div>
          <h2 className="mt-1 font-serif text-base font-semibold text-navy">
            Our Services
          </h2>
        </div>

        {/* Filing-cabinet tabs */}
        <nav aria-label="Service categories" className="mt-2">
          <ul className="space-y-0">
            {SERVICE_CATEGORIES.map((cat, i) => {
              const active = activeId === cat.id;
              return (
                <li key={cat.id}>
                  <Link
                    href={`#${cat.id}`}
                    className={cn(
                      "filing-tab group block border-l-2 border-l-transparent py-2.5 pl-3 pr-2 transition-all",
                      active
                        ? "active ml-0 border-l-gold bg-white shadow-[0_4px_16px_-8px_rgba(11,31,58,0.2)]"
                        : "border-l-transparent text-slatey hover:bg-white/60 hover:text-navy",
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={cn(
                          "font-mono text-[10px] uppercase tracking-widest-2",
                          active ? "text-gold-600" : "text-slatey/60",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")} · {cat.code}
                      </span>
                    </div>
                    <span
                      className={cn(
                        "mt-0.5 block font-sans text-[13px] font-semibold leading-snug transition-colors",
                        active ? "text-navy" : "text-slatey group-hover:text-navy",
                      )}
                    >
                      {cat.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <Link
          href="/contact"
          className="mt-6 block border border-hairline bg-white p-4 transition-colors hover:border-gold/60 hover:bg-navy"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest-2 text-gold-600">
            — NOT SURE?
          </div>
          <p className="mt-1 font-serif text-sm font-semibold text-navy transition-colors group-hover:text-white">
            Talk to our consultants
          </p>
        </Link>
      </div>
    </aside>
  );
}

/**
 * ServiceMobileTabs — horizontal scrollable tab strip (mobile/tablet).
 * Same filing-tab treatment, compressed.
 */
export function ServiceMobileTabs() {
  const [activeId, setActiveId] = useState<string>(SERVICE_CATEGORIES[0].id);

  useEffect(() => {
    const sections = SERVICE_CATEGORIES.map((c) =>
      document.getElementById(c.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
          // Auto-scroll the active tab into view
          const el = document.getElementById(`mtab-${visible[0].target.id}`);
          el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:hidden">
      <div className="sticky top-[calc(3.5rem+3px)] z-30 -mx-4 border-y border-hairline bg-warmwhite/95 px-4 py-3 backdrop-blur-sm">
        <div
          className="flex gap-2 overflow-x-auto nice-scrollbar"
          style={{ scrollbarWidth: "thin" }}
          role="tablist"
          aria-label="Service categories"
        >
          {SERVICE_CATEGORIES.map((cat) => {
            const active = activeId === cat.id;
            return (
              <Link
                key={cat.id}
                href={`#${cat.id}`}
                id={`mtab-${cat.id}`}
                role="tab"
                aria-selected={active}
                className={cn(
                  "filing-tab shrink-0 border-l-2 px-3 py-1.5 text-left transition-all",
                  active
                    ? "active border-l-gold bg-white"
                    : "border-l-transparent bg-white/50 text-slatey",
                )}
              >
                <div className="font-mono text-[9px] uppercase tracking-widest-2 text-gold-600">
                  {cat.code}
                </div>
                <div
                  className={cn(
                    "mt-0.5 whitespace-nowrap font-sans text-[12px] font-semibold",
                    active ? "text-navy" : "text-slatey",
                  )}
                >
                  {cat.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
