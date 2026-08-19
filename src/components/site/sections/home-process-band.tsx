import { SectionLabel } from "../section-label";
import { Reveal } from "../reveal";
import { ProcessTimeline } from "../process-timeline";
import { PROCESS_STEPS } from "@/lib/site-data";

/**
 * HomeProcessBand — "Understand → Prepare → Apply → Follow Up → Complete"
 * shown as a clean horizontal 5-step strip on navy.
 */
export function HomeProcessBand() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="relative mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionLabel code="FILE 05" label="OUR PROCESS" onDark />
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            How We Work With You
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/80 sm:text-lg">
            Five deliberate steps — the same process we use whether you need a
            single GST registration or a complete tender bid pack.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <ProcessTimeline steps={PROCESS_STEPS} variant="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
