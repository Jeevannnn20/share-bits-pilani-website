import * as React from "react"
import { motion, useInView, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

type Tone = "light" | "paper" | "ink"
const EASE = [0.16, 1, 0.3, 1] as const

export function Section({ className, children, id, tone = "light", inner, grid: _grid, ...props }: React.HTMLAttributes<HTMLElement> & { tone?: Tone; grid?: boolean; inner?: string }) {
  const tones: Record<Tone, string> = {
    light: "bg-background text-foreground",
    paper: "bg-paper text-foreground",
    ink: "bg-ink text-background",
  }
  return (
    <section id={id} className={cn("relative py-20 sm:py-28 lg:py-36", tones[tone], className)} {...props}>
      <div className={cn("container-site relative", inner)}>{children}</div>
    </section>
  )
}

/** A plain hairline divider. */
export function CrossRule({ className, invert = false }: { className?: string; count?: number; invert?: boolean }) {
  return <div aria-hidden className={cn("h-px w-full", invert ? "bg-ink-line" : "bg-line", className)} />
}

/** Section label in the "02 / APPROACH" form. */
export function Kicker({ children, index, invert = false, className }: { children: React.ReactNode; index?: string; invert?: boolean; className?: string }) {
  return (
    <p className={cn("label", invert ? "text-background/60" : "text-muted-foreground", className)}>
      {index && <span>{index} / </span>}
      {children}
    </p>
  )
}

/** Text that rises out of a mask as it enters the viewport. */
export function RevealText({ children, className, delay = 0, as: Tag = "div" }: { children: React.ReactNode; className?: string; delay?: number; as?: "div" | "h1" | "h2" | "p" }) {
  const reduce = useReducedMotion()
  // Watch the wrapper, not the moving text: the text starts fully clipped by the mask,
  // so observing it directly would never report it as visible.
  const ref = React.useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" })
  if (reduce) return <Tag className={className}>{children}</Tag>
  const T = Tag as React.ElementType
  return (
    <T ref={ref} className={cn("overflow-hidden pb-[0.12em]", className)}>
      <motion.span
        className="block"
        initial={{ y: "105%", opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: "105%", opacity: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </T>
  )
}

export function SectionHeading({ kicker, index, title, intro, className, invert = false, size = "lg" }: { kicker?: string; index?: string; title: React.ReactNode; intro?: React.ReactNode; className?: string; invert?: boolean; size?: "md" | "lg" }) {
  return (
    <div className={cn("max-w-5xl", className)}>
      {kicker && <Kicker index={index} invert={invert} className="mb-6">{kicker}</Kicker>}
      <RevealText as="h2" className={cn("display", size === "lg" ? "text-[2.75rem] sm:text-7xl lg:text-[5.5rem]" : "text-4xl sm:text-5xl lg:text-6xl")}>{title}</RevealText>
      {intro && <Reveal delay={0.15}><p className={cn("mt-7 max-w-xl text-lg", invert ? "text-background/70" : "text-muted-foreground")}>{intro}</p></Reveal>}
    </div>
  )
}

export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

export function Marquee({ items, className }: { items: string[]; className?: string; invert?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap motion-reduce:animate-none">
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-10" aria-hidden={k === 1}>
            {items.map((t, i) => (
              <span key={i} className="display flex items-center gap-10 text-5xl sm:text-7xl">
                {t}<span className="size-3 rounded-full bg-primary sm:size-4" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Inner-page hero: label, a very large headline, and a short intro on the right. */
export function PageHero({ index, kicker, title, intro, children }: { index: string; kicker: string; title: React.ReactNode; intro?: React.ReactNode; art?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="bg-background">
      <div className="container-site pb-16 pt-36 sm:pt-44 lg:pb-24">
        <Reveal><Kicker index={index} className="mb-8">{kicker}</Kicker></Reveal>
        <RevealText as="h1" className="display text-[3rem] sm:text-7xl lg:text-[7.5rem] [&_.text-primary]:text-green-deep">{title}</RevealText>
        <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-[1fr_1fr]">
          <span className="label hidden text-muted-foreground lg:block">ShARE BITS Pilani</span>
          <Reveal delay={0.2}>
            {intro && <p className="max-w-xl text-lg text-muted-foreground">{intro}</p>}
            {children && <div className="mt-8">{children}</div>}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function StatRow({ stats, invert = false }: { stats: { value: string; label: string }[]; invert?: boolean }) {
  return (
    <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.06}>
          <div className={cn("border-t pr-4 pt-5", invert ? "border-ink-line" : "border-line-strong")}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="display block text-5xl sm:text-7xl">{s.value}</span>
              <span className={cn("label mt-4 block", invert ? "text-background/60" : "text-muted-foreground")}>{s.label}</span>
            </dd>
          </div>
        </Reveal>
      ))}
    </dl>
  )
}

/** Company mark from /public/logos, with a monogram fallback. */
export function CompanyLogo({ logo, name, className }: { logo?: string; name: string; className?: string }) {
  const [failed, setFailed] = React.useState(!logo)
  const initials = name.replace(/[^A-Za-z& ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase()
  return (
    <span className={cn("grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white", className)}>
      {failed ? (
        <span className="text-[0.7rem] font-semibold text-ink/70">{initials || "—"}</span>
      ) : (
        <img src={`/logos/${logo}.png`} alt="" loading="lazy" className="size-7 object-contain" onError={() => setFailed(true)} />
      )}
    </span>
  )
}

/** Round arrow button used on cards. */
export function ArrowDot({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn("grid size-11 shrink-0 place-items-center rounded-full border border-line-strong transition-[background-color,border-color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary", className)}>
      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12 12 4M5.5 4H12v6.5" /></svg>
    </span>
  )
}
