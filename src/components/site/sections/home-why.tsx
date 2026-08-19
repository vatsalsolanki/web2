import { SectionLabel } from "../section-label";
import { Reveal } from "../reveal";
import { Icon } from "../icon";
import { WHY_CHOOSE_GURUR } from "@/lib/site-data";

/**
 * HomeWhy — 6 differentiator cards.
 * The watermark seal sits behind this section at ~5-8% opacity.
 */
export function HomeWhy() {
  return (
    <section className="relative overflow-hidden bg-warmwhite">
      {/* Watermark seal — large, very low-opacity, rotated */}
      <div
        className="pointer-events-none absolute right-[-120px] top-1/2 hidden -translate-y-1/2 rotate-[-12deg] text-navy lg:block"
        style={{ opacity: 0.06 }}
        aria-hidden="true"
      >
        <SealWatermark />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionLabel code="FILE 03" label="WHY GURUR" />
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
            Why Businesses Choose Gurur
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slatey sm:text-lg">
            Six commitments that shape every interaction we have with you —
            from the first phone call to the day your contract is awarded.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_GURUR.map((c, i) => (
            <Reveal key={c.code} delay={(i % 3) * 80}>
              <article className="group relative h-full bg-white p-7 transition-colors hover:bg-navy">
                <span className="absolute left-0 top-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                <div className="flex items-center justify-between">
                  <span className="eyebrow-code text-gold-600">{c.code}</span>
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-hairline text-navy transition-colors group-hover:border-gold/50 group-hover:text-gold">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-navy transition-colors group-hover:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 font-sans text-[14px] leading-relaxed text-slatey transition-colors group-hover:text-white/70">
                  {c.short}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SealWatermark() {
  // Re-use SealBadge at a large size for the watermark.
  return (
    <svg
      viewBox="0 0 200 200"
      width={520}
      height={520}
      className="fill-current text-navy"
      aria-hidden="true"
    >
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="2" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + Math.cos(rad) * 90;
        const y1 = 100 + Math.sin(rad) * 90;
        const x2 = 100 + Math.cos(rad) * 84;
        const y2 = 100 + Math.sin(rad) * 84;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="40"
        fontWeight="600"
        fill="currentColor"
      >
        G
      </text>
    </svg>
  );
}
