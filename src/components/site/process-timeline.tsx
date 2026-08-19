"use client";

import { cn } from "@/lib/utils";

type Step = {
  num: string;
  title: string;
  desc: string;
};

/**
 * ProcessTimeline — horizontal numbered step timeline.
 * - `variant="light"` for warm-white background
 * - `variant="dark"` for navy background
 */
export function ProcessTimeline({
  steps,
  variant = "light",
}: {
  steps: Step[];
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";

  return (
    <ol
      className={cn(
        "grid gap-6 md:grid-cols-5 md:gap-0",
      )}
    >
      {steps.map((s, i) => (
        <li
          key={s.num}
          className={cn(
            "relative flex flex-col items-start md:px-5",
            i < steps.length - 1 && "md:pr-7",
          )}
        >
          {/* Connector line — desktop only */}
          {i < steps.length - 1 && (
            <div
              className={cn(
                "absolute left-7 top-4 hidden h-px md:block",
                dark ? "bg-white/20" : "bg-hairline",
              )}
              style={{ width: "calc(100% - 2rem)" }}
            />
          )}

          {/* Number circle */}
          <div
            className={cn(
              "relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 font-mono text-base font-medium",
              dark
                ? "border-gold bg-navy text-gold"
                : "border-gold bg-white text-navy",
            )}
          >
            {s.num}
          </div>

          <h3
            className={cn(
              "mt-4 font-serif text-lg font-semibold",
              dark ? "text-white" : "text-navy",
            )}
          >
            {s.title}
          </h3>

          <p
            className={cn(
              "mt-2 font-sans text-[13px] leading-relaxed",
              dark ? "text-white/70" : "text-slatey",
            )}
          >
            {s.desc}
          </p>
        </li>
      ))}
    </ol>
  );
}
