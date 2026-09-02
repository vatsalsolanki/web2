import { SectionLabel } from "../section-label";
import { Reveal } from "../reveal";
import { JOURNEY_STEPS } from "@/lib/site-data";

/**
 * HomeJourney — horizontal "From Business Idea to Government Contract" 9-step timeline.
 */
export function HomeJourney() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionLabel code="FILE 02" label="THE JOURNEY" onDark />
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            From Business Idea to Government Contract
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
            The path from idea to government contract is sequential — each
            stage unlocks the next. We walk you through every step, in order,
            with the right paperwork and partners at every milestone.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ol className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-9 xl:gap-x-3">
            {JOURNEY_STEPS.map((s, i) => (
              <li
                key={s.num}
                className="group relative flex flex-col items-start"
              >
                {/* horizontal connector — desktop xl only */}
                {i < JOURNEY_STEPS.length - 1 && (
                  <span
                    className="absolute left-7 top-7 hidden h-px w-[calc(100%-1rem)] bg-white/15 xl:block"
                    aria-hidden="true"
                  />
                )}
                {/* node */}
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-navy font-mono text-base font-medium text-gold">
                  {s.num}
                </span>
                <h3 className="mt-3 font-serif text-base font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-1 font-sans text-[12px] leading-snug text-white/65">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
