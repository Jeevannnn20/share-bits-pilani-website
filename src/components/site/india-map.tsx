import * as React from "react"
import { chapterCities } from "@/data/content"
import { INDIA_PATH, INDIA_VIEW, project } from "@/data/india-map"
import { cn } from "@/lib/utils"

/** India with one marker per chapter city. Hover, focus or tap a marker (or a name in the list) to see its chapters. */
export function IndiaMap() {
  const [active, setActive] = React.useState("pilani")
  const current = chapterCities.find((c) => c.id === active)!
  const total = chapterCities.reduce((n, c) => n + c.chapters.length, 0)

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_1fr]">
      <div className="relative mx-auto w-full max-w-[34rem]">
        <svg viewBox={`-10 -10 ${INDIA_VIEW.w + 20} ${INDIA_VIEW.h + 20}`} className="h-auto w-full" role="group" aria-label={`Map of India showing ${total} ShARE chapters in ${chapterCities.length} cities`}>
          <path d={INDIA_PATH} fill="var(--color-ink-2)" stroke="rgb(253 244 238 / 0.28)" strokeWidth={1} strokeLinejoin="round" />
          {chapterCities.map((c) => {
            const [x, y] = project(c.lat, c.lon)
            const on = c.id === active
            const r = 4.5 + (c.chapters.length - 1) * 1.6
            return (
              <g
                key={c.id}
                role="button"
                tabIndex={0}
                aria-label={`${c.city}: ${c.chapters.join(", ")}`}
                aria-pressed={on}
                className="cursor-pointer outline-none [&:focus-visible>circle:last-child]:stroke-background"
                onMouseEnter={() => setActive(c.id)}
                onFocus={() => setActive(c.id)}
                onClick={() => setActive(c.id)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(c.id) } }}
              >
                <circle cx={x} cy={y} r={16} fill="transparent" />
                {on && <circle cx={x} cy={y} r={r} fill="none" stroke="var(--color-primary)" strokeWidth={1.5}>
                  <animate attributeName="r" from={r} to={r + 16} dur="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.9" to="0" dur="1.6s" repeatCount="indefinite" />
                </circle>}
                <circle cx={x} cy={y} r={on ? r + 2 : r} fill={on || c.id === "pilani" ? "var(--color-primary)" : "var(--color-background)"} stroke="var(--color-ink)" strokeWidth={2} className="transition-[r,fill] duration-300" />
                {c.chapters.length > 1 && <text x={x} y={y + 3} textAnchor="middle" fontSize={9} fontWeight={600} fill="var(--color-ink)" className="pointer-events-none">{c.chapters.length}</text>}
              </g>
            )
          })}
        </svg>
        <p className="label mt-3 text-background/40">Boundary: Survey of India, via Datameet</p>
      </div>

      <div>
        <div aria-live="polite" className="rounded-[var(--radius-xl)] bg-ink-2 p-7">
          <p className="label text-primary">{current.city}</p>
          <ul className="mt-3 space-y-1">
            {current.chapters.map((ch) => <li key={ch} className="display-md text-3xl sm:text-4xl">{ch}</li>)}
          </ul>
          {current.id === "pilani" && <p className="mt-4 text-background/60">That's us. Eight years on the Pilani campus.</p>}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {chapterCities.flatMap((c) => c.chapters.map((ch) => (
            <li key={ch}>
              <button
                type="button"
                onMouseEnter={() => setActive(c.id)}
                onFocus={() => setActive(c.id)}
                onClick={() => setActive(c.id)}
                className={cn("pill text-sm transition-colors duration-300", c.id === active ? "border-primary bg-primary text-ink" : "border-ink-line text-background/75 hover:border-background/60")}
              >
                {ch}
              </button>
            </li>
          )))}
        </ul>
      </div>
    </div>
  )
}
