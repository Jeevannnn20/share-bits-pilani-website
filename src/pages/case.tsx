import { Link, useParams } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/data/content"
import { Kicker, Reveal, RevealText, Section } from "@/components/site/section"
import { wires } from "@/components/site/wireframes"
import { ArrowDot } from "@/components/site/section"
import NotFound from "./not-found"

export default function CasePage() {
  const { slug } = useParams()
  const idx = caseStudies.findIndex((c) => c.slug === slug)
  if (idx === -1) return <NotFound />
  const c = caseStudies[idx]
  const next = caseStudies[(idx + 1) % caseStudies.length]
  const Wire = wires[c.wire]

  return (
    <>
      <section className="bg-background">
        <div className="container-site pb-16 pt-36 sm:pt-44">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link to="/work" className="label text-muted-foreground transition-colors hover:text-ink">← All work</Link>
              <Kicker>{String(idx + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")} · {c.year}</Kicker>
            </div>
          </Reveal>
          <Reveal delay={0.05}><p className="label mt-12 text-green-deep">{c.sector}</p></Reveal>
          <RevealText as="h1" className="display mt-4 text-[3rem] sm:text-7xl lg:text-[7.5rem]">{c.client}</RevealText>
          <div className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-2">
            <Reveal><p className="display-md text-2xl sm:text-3xl">{c.headline}</p></Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground">{c.context}</p>
              <ul className="mt-6 flex flex-wrap gap-2">{c.tags.map((t) => <li key={t} className="pill label">{t}</li>)}</ul>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="mt-14 grid place-items-center rounded-[var(--radius-xl)] bg-ink p-8 text-background/70 sm:p-20">
              <Wire className="max-w-2xl" />
            </div>
          </Reveal>
          <dl className="mt-14 grid gap-y-10 sm:grid-cols-3">
            {c.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.07}>
                <div className="border-t border-line-strong pr-6 pt-5">
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="display text-6xl sm:text-7xl">{m.value}</dd>
                  <dd className="mt-3 max-w-[16rem] text-muted-foreground">{m.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <Section tone="paper">
        <Kicker className="mb-10">What we did</Kicker>
        <div>
          {c.areas.map((a, i) => (
            <Reveal key={a.area}>
              <article className="grid gap-6 border-t border-line-strong py-12 lg:grid-cols-2 lg:gap-12">
                <div>
                  <p className="label text-muted-foreground">{String(i + 1).padStart(2, "0")} — {a.area}</p>
                  <h2 className="display-md mt-4 text-3xl sm:text-4xl">{a.title}</h2>
                </div>
                <ul className="space-y-4 text-lg">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-4"><span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-primary" /><span>{p}</span></li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <Link to={`/work/${next.slug}`} className="group block">
          <Kicker className="mb-6">Next project <ArrowRight className="ml-1 inline size-3" aria-hidden /></Kicker>
          <div className="flex items-end justify-between gap-6 border-b border-line-strong pb-8">
            <div>
              <p className="display text-[3rem] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-3 sm:text-8xl">{next.client}</p>
              <p className="mt-3 text-muted-foreground">{next.tagline}</p>
            </div>
            <ArrowDot className="mb-2 size-14" />
          </div>
        </Link>
      </Section>
    </>
  )
}
