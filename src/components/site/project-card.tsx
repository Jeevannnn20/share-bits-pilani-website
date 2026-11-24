import { Link } from "react-router-dom"
import type { CaseStudy } from "@/data/content"
import { wires } from "@/components/site/wireframes"
import { ArrowDot, Reveal } from "@/components/site/section"
import { cn } from "@/lib/utils"

const panels = ["bg-card text-ink/70", "bg-ink text-background/70", "bg-green-soft text-ink/70", "bg-paper text-ink/70"]

/** Large rounded project tile: a quiet line drawing on top, title and one-line summary below. */
export function ProjectCard({ c, i, total }: { c: CaseStudy; i: number; total: number }) {
  const Wire = wires[c.wire]
  return (
    <Reveal delay={(i % 2) * 0.1}>
      <Link to={`/work/${c.slug}`} className="group block">
        <div className={cn("relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[var(--radius-xl)] p-8 sm:p-14", panels[i % panels.length])}>
          <span className="label absolute left-5 top-5 opacity-70">{c.sector}</span>
          <span className="label absolute bottom-5 left-5 opacity-70">{String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <span className="label absolute bottom-5 right-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">View project</span>
          <Wire className="max-w-md transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.06]" />
        </div>
        <div className="mt-5 flex items-start justify-between gap-6">
          <div>
            <p className="label text-muted-foreground">{c.tags.join(" · ")}</p>
            <h3 className="display-md mt-2 text-3xl sm:text-4xl">{c.client}</h3>
            <p className="mt-2 text-muted-foreground">{c.tagline}</p>
          </div>
          <ArrowDot className="mt-1" />
        </div>
      </Link>
    </Reveal>
  )
}
