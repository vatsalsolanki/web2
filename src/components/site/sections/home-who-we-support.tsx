import { SectionLabel } from "../section-label";
import { Reveal } from "../reveal";
import { WHO_WE_SUPPORT } from "@/lib/site-data";

/**
 * HomeWhoWeSupport — pill cloud of client types.
 */
export function HomeWhoWeSupport() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <Reveal>
            <SectionLabel code="FILE 04" label="WHO WE SUPPORT" />
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Who We Support
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed text-slatey">
              Whether you are a first-time founder or an established
              manufacturer, our services scale with you — from a single
              proprietorship registration to a multi-crore government tender.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="flex flex-wrap gap-3">
              {WHO_WE_SUPPORT.map((t) => (
                <li
                  key={t}
                  className="group inline-flex items-center gap-2 border border-hairline bg-warmwhite px-5 py-3 transition-all hover:border-gold hover:bg-navy"
                >
                  <span className="h-1.5 w-1.5 bg-gold transition-colors group-hover:bg-gold" />
                  <span className="font-sans text-[14px] font-medium text-navy transition-colors group-hover:text-white">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
