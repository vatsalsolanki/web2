import { cn } from "@/lib/utils";
import type { ServiceProcessStep } from "@/lib/services";

/**
 * ServiceProcessSteps — vertical numbered process list.
 * Unlike <ProcessTimeline> (fixed 5-column grid for the About page's
 * 5-step approach), this supports any number of steps — each service's
 * process differs in length.
 */
export function ServiceProcessSteps({ steps }: { steps: ServiceProcessStep[] }) {
  return (
    <ol className="relative">
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-5 pb-9 last:pb-0">
          {i < steps.length - 1 && (
            <span
              className="absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-px bg-hairline"
              aria-hidden="true"
            />
          )}
          <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border-2 border-gold bg-warmwhite font-mono text-[13px] font-medium text-navy">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="pt-1.5">
            <h3 className="font-sans text-[15px] font-semibold text-navy">{s.title}</h3>
            <p className="mt-1.5 max-w-xl font-sans text-[13.5px] leading-relaxed text-slatey">
              {s.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
