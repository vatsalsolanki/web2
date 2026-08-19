import { cn } from "@/lib/utils";

/**
 * SectionLabel — the dossier-style "FILE 01 — REGISTRATION" eyebrow.
 * Mono font, gold accent, used at the top of every major section.
 */
export function SectionLabel({
  code,
  label,
  className,
  onDark = false,
}: {
  code: string;
  label: string;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 eyebrow-code",
        onDark ? "text-gold" : "text-gold-600",
        className,
      )}
    >
      <span className="text-gold">—</span>
      <span className="font-mono">{code}</span>
      <span className="text-hairline">|</span>
      <span
        className={cn(
          "uppercase tracking-widest-2",
          onDark ? "text-white/80" : "text-slatey",
        )}
      >
        {label}
      </span>
    </div>
  );
}
