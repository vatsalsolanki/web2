import { TRUST_BADGES } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

/**
 * HomeTrustStrip — thin band beneath the hero with quick stats/badges.
 * Marked [UPDATE STAT] — client to update numbers.
 */
export function HomeTrustStrip() {
  return (
    <section className="border-y border-hairline bg-white">
      <div className="mx-auto max-w-8xl px-4 py-5 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:gap-8">
          {TRUST_BADGES.map((b) => (
            <li key={b.label} className="flex items-center gap-3">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-gold"
                strokeWidth={2}
              />
              <div className="leading-tight">
                <div className="font-serif text-base font-semibold text-navy sm:text-lg">
                  {b.value}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest-2 text-slatey">
                  {b.label}{" "}
                  <span className="text-gold-600/70">[UPDATE STAT]</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
