import { cn } from "@/lib/utils"

/** The ShARE dots: grey → charcoal → green, rising left to right, as in the logo. */
export function Dots({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 64 44" className={cn("shrink-0", className)}>
      <circle cx="7" cy="37" r="5" fill="var(--color-dot)" />
      <circle cx="26" cy="29" r="8.5" fill={inverted ? "var(--color-background)" : "var(--color-ink)"} />
      <circle cx="50" cy="13" r="12.5" fill="var(--color-primary)" />
    </svg>
  )
}

/** Wordmark rebuilt from the logo: green "ShARE" in Open Sans ExtraBold,
    "BITS PILANI" in Montserrat ExtraBold, dots rising off the E. */
export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-end gap-1 leading-none", className)}>
      <span className="flex flex-col items-end">
        <span className="text-[1.7rem] leading-[0.9] tracking-[-0.01em] text-primary" style={{ fontFamily: "var(--font-logo)", fontWeight: 800 }}>
          ShARE
        </span>
        <span className={cn("mt-1 text-[0.5rem] uppercase tracking-[0.04em]", inverted ? "text-background" : "text-ink")} style={{ fontFamily: "var(--font-logo-sub)", fontWeight: 800 }}>
          BITS Pilani
        </span>
      </span>
      <svg aria-hidden viewBox="0 0 26 22" className="mb-[3px] h-[18px] w-[22px]">
        <circle cx="3" cy="19" r="2" fill="var(--color-dot)" />
        <circle cx="10.5" cy="15.5" r="3.4" fill={inverted ? "var(--color-background)" : "var(--color-ink)"} />
        <circle cx="19.5" cy="7" r="5.4" fill="var(--color-primary)" />
      </svg>
    </span>
  )
}

export function Linkedin({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={cn("size-4", className)}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}
