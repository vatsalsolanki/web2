import { cn } from "@/lib/utils";

/**
 * SealBadge — the brand's signature circular certification-style emblem.
 * A custom SVG (thin-line engraved gold seal), NOT a generic badge icon.
 *
 * Sizes:
 *   - "sm"  ~48px   (used beside hero tagline, footer brand)
 *   - "md"  ~96px   (used on contact closing band)
 *   - "lg"  ~220px   (large final-CTA stamp, with seal-stamp animation)
 *   - "xl"  ~520px   (low-opacity watermark — used as a section background)
 *
 * The `animated` variant triggers the scale/fade-in "stamped" moment.
 * Respects prefers-reduced-motion via CSS media query in globals.css
 * (the keyframe still runs but the .reveal base case bypasses transforms).
 */
type SealSize = "sm" | "md" | "lg" | "xl";

const SIZE_PX: Record<SealSize, number> = {
  sm: 56,
  md: 96,
  lg: 220,
  xl: 520,
};

export function SealBadge({
  size = "md",
  className,
  animated = false,
  opacity = 1,
}: {
  size?: SealSize;
  className?: string;
  animated?: boolean;
  opacity?: number;
}) {
  const px = SIZE_PX[size];

  return (
    <svg
      viewBox="0 0 200 200"
      width={px}
      height={px}
      role="img"
      aria-label="Gurur Consultancy — Registered. Certified. Trusted."
      className={cn(
        animated && "animate-seal-stamp opacity-0",
        className,
      )}
      style={{ opacity }}
    >
      {/* Outer ring — double thin line */}
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Decorative notches around the ring — 24 small ticks */}
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

      {/* Inner circle band (text track) */}
      <defs>
        <path
          id="seal-text-top"
          d="M 30 100 A 70 70 0 0 1 170 100"
          fill="none"
        />
        <path
          id="seal-text-bottom"
          d="M 30 100 A 70 70 0 0 0 170 100"
          fill="none"
        />
      </defs>

      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* Circular text — top */}
      <text
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="9"
        letterSpacing="3.5"
        fill="currentColor"
        fontWeight="500"
      >
        <textPath href="#seal-text-top" startOffset="50%" textAnchor="middle">
          GURUR CONSULTANCY SERVICES LLP
        </textPath>
      </text>

      {/* Circular text — bottom */}
      <text
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="7.5"
        letterSpacing="2.5"
        fill="currentColor"
        fontWeight="400"
      >
        <textPath href="#seal-text-bottom" startOffset="50%" textAnchor="middle">
          · REGISTERED · CERTIFIED · TRUSTED ·
        </textPath>
      </text>

      {/* Star divider — left and right */}
      <g fill="currentColor">
        <g transform="translate(30, 100)">
          <path d="M 0 -3 L 0.9 -0.9 L 3 0 L 0.9 0.9 L 0 3 L -0.9 0.9 L -3 0 L -0.9 -0.9 Z" />
        </g>
        <g transform="translate(170, 100)">
          <path d="M 0 -3 L 0.9 -0.9 L 3 0 L 0.9 0.9 L 0 3 L -0.9 0.9 L -3 0 L -0.9 -0.9 Z" />
        </g>
      </g>

      {/* Central monogram — "G" in serif */}
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

      {/* Tiny decorative line below monogram */}
      <line
        x1="80"
        y1="124"
        x2="120"
        y2="124"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <text
        x="100"
        y="138"
        textAnchor="middle"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="6.5"
        letterSpacing="2"
        fill="currentColor"
        fontWeight="500"
      >
        EST · 2020
      </text>
    </svg>
  );
}
