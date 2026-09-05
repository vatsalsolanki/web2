import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../section-label";
import { Reveal } from "../reveal";
import { Icon } from "../icon";
import { PILLARS } from "@/lib/site-data";
import Image from "next/image";
/**
 * HomePillars — "A Complete Business Solution Under One Roof" intro + 8-card grid.
 */
export function HomePillars() {
  return (
    <section className="relative bg-warmwhite">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal>
          <SectionLabel code="FILE 01" label="OUR CAPABILITIES" />
          <h2 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
            A Complete Business Solution Under One Roof
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-slatey sm:text-lg">
            From the moment you decide to start a business, you face a steady
            stream of registrations, certifications and compliance obligations
            — and at some point, the ambition to win a government contract.
            Gurur Consultancy handles every stage of that journey with one
            accountable team, so nothing falls through the cracks.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
  {PILLARS.map((p, i) => (
    <Reveal key={p.code} delay={(i % 4) * 60}>
      <Link
        href={p.href}
        className="group relative flex h-full flex-col bg-white p-6 transition-all "
      >
        

        {/* hover gold rule */}
        <span className="absolute left-0 top-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />

        <div className="flex items-center justify-between">
          <span className="eyebrow-code text-gold-600">{p.code}</span>
          <ArrowUpRight
            className="h-4 w-4 text-slatey/40 transition-colors group-hover:text-gold"
          />
        </div>

        <div className="mt-4 inline-flex h-24 w-24 items-center justify-center border border-hairline transition-colors group-hover:border-gold/60">
  <Image
    src={p.image}
    alt={p.label}
    width={64}
    height={64}
    className="object-cover"
  />
</div>

        <h3 className="mt-4 font-serif text-lg font-semibold text-navy transition-color">
          {p.label}
        </h3>

        <p className="mt-2 font-sans text-[13px] leading-relaxed text-slatey transition-colors ">
          {p.description}
        </p>
      </Link>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}
