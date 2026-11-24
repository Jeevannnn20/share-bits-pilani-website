import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Button } from "@/components/ui/button"
import { ArrowDot, CompanyLogo, Kicker, Reveal, RevealText, Section, StatRow } from "@/components/site/section"
import { Dots } from "@/components/site/brand"
import { caseStudies, process, services, stats, transform } from "@/data/content"
import { alumni, featuredLogos } from "@/data/alumni"
import { cn } from "@/lib/utils"

/** Pinned section: one dot grows from grey to charcoal to green as a question becomes a decision. */
function Transform() {
  const ref = React.useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [step, setStep] = React.useState(0)
  useMotionValueEvent(scrollYProgress, "change", (v) => setStep(v < 0.34 ? 0 : v < 0.67 ? 1 : 2))
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.5, 1])
  const color = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["#acacac", "#2f2d2e", "#2f2d2e", "#03c883"])

  return (
    <section ref={ref} className={cn("relative bg-paper", reduce ? "" : "h-[300vh]")}>
      <div className={cn("flex flex-col overflow-hidden", reduce ? "py-24" : "sticky top-0 h-screen")}>
        <div className="container-site flex flex-1 flex-col pb-10 pt-28">
          <div className="flex items-start justify-between gap-6">
            <Kicker index="04">Question to decision</Kicker>
            <Kicker className="hidden sm:block">Scroll to transform ↓</Kicker>
          </div>
          <div className="grid flex-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="display text-[2.75rem] sm:text-7xl lg:text-[5.5rem]">From question<br />to decision.</h2>
              <ol className="mt-10 max-w-md">
                {transform.map((t, i) => (
                  <li key={t.n} className={cn("border-t border-line-strong py-5 transition-opacity duration-500", !reduce && step !== i && "opacity-30")}>
                    <p className="label text-muted-foreground">{t.n} — {t.title}</p>
                    <p className="mt-2 text-lg">{t.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative mx-auto hidden aspect-square w-full max-w-[26rem] place-items-center lg:grid">
              <span className="absolute inset-0 rounded-full border border-line-strong" />
              <span className="absolute inset-[16%] rounded-full border border-line" />
              <motion.span className="block size-full rounded-full" style={reduce ? { background: "#03c883", scale: 0.6 } : { scale, backgroundColor: color }} />
            </div>
          </div>
          <p className="label text-muted-foreground">{String(step + 1).padStart(2, "0")} — 03</p>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const logoAlums = featuredLogos.map((k) => alumni.find((a) => a.logo === k)!).filter(Boolean)
  return (
    <>
      {/* 01 — Hero */}
      <section className="relative flex min-h-[100svh] flex-col bg-background">
        <div className="container-site flex flex-1 flex-col pb-8 pt-32 sm:pt-40">
          <Reveal>
            <div className="flex items-start justify-between gap-6">
              <Kicker>Student consulting<br />from BITS Pilani</Kicker>
              <Kicker className="text-right">Do well<br />Do good</Kicker>
            </div>
          </Reveal>
          <div className="flex flex-1 flex-col justify-center py-10">
            <RevealText as="h1" className="display text-[3.4rem] sm:text-8xl lg:text-[10rem]" delay={0.1}>Hard questions,</RevealText>
            <div className="flex flex-wrap items-end gap-x-8">
              <RevealText className="display text-[3.4rem] sm:text-8xl lg:text-[10rem]" delay={0.2}>clear answers.</RevealText>
              <Reveal delay={0.6} className="mb-3 hidden lg:block"><Dots className="h-24 w-36" /></Reveal>
            </div>
          </div>
          <Reveal delay={0.5}>
            <div className="grid gap-8 border-t border-line pt-7 lg:grid-cols-[1fr_1fr]">
              <p className="label text-muted-foreground">01 / ShARE BITS Pilani</p>
              <div>
                <p className="max-w-xl text-lg text-muted-foreground">
                  We are engineers, scientists and economists at BITS Pilani. Founders and companies bring us questions on strategy, product and data, and we give them answers they can act on.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild><Link to="/work">See our work <ArrowRight aria-hidden /></Link></Button>
                  <Button asChild variant="outline"><Link to="/contact">Work with us</Link></Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 — Approach */}
      <Section tone="light" id="approach">
        <Kicker index="02" className="mb-8">Our approach</Kicker>
        <RevealText as="h2" className="display text-[2.75rem] sm:text-7xl lg:text-[6.5rem]">Beyond the slides.<br />Into the decision.</RevealText>
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <Dots className="h-28 w-40" />
            <p className="label mt-6 text-muted-foreground">Different disciplines.<br />One team.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="display-md text-2xl sm:text-3xl">A consulting team works best when its people think differently. Ours come from ten disciplines.</p>
            <p className="mt-6 max-w-xl text-muted-foreground">
              We don't stop at a tidy deck. We size the market, write the spec, build the model, and stay until your team knows what to do next.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {services.map((sv) => <li key={sv.id} className="pill label">{sv.title}</li>)}
            </ul>
          </Reveal>
        </div>

        {/* How a project runs: four steps */}
        <ol className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.07}>
              <li className="border-t border-line-strong pt-5">
                <span className="label text-muted-foreground">{p.step}</span>
                <h3 className="display mt-6 text-5xl">{p.title}</h3>
                <p className="mt-4 text-muted-foreground">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-muted-foreground">Most projects run six to ten weeks. We sign NDAs on request, and a second consultant checks every deliverable before you see it.</p>
        <div className="mt-24"><StatRow stats={stats} /></div>
      </Section>

      {/* 03 — Selected work */}
      <Section tone="light" className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <RevealText as="h2" className="display text-[3.2rem] sm:text-8xl lg:text-[8rem]">
            Selected<br />work<sup className="label ml-2 align-super text-muted-foreground">({String(caseStudies.length).padStart(2, "0")})</sup>
          </RevealText>
          <Reveal delay={0.15}>
            <p className="text-lg">Seven projects, from trade finance to satellites.</p>
            <p className="label mt-3 text-muted-foreground">Strategy, product and data<br />for founders and companies.</p>
          </Reveal>
        </div>
        <ul className="mt-14 border-t border-line-strong">
          {caseStudies.map((c, i) => (
            <li key={c.slug} className="border-b border-line-strong">
              <Reveal delay={i * 0.04}>
                <Link to={`/work/${c.slug}`} className="group grid grid-cols-[5.5rem_1fr_auto] items-center gap-4 py-5 transition-[padding] duration-500 ease-[var(--ease-out-expo)] hover:px-3 sm:grid-cols-[9rem_1.1fr_1.4fr_auto] sm:gap-8 sm:py-6">
                  <span className="grid h-16 place-items-center rounded-2xl bg-card px-3 sm:h-20 sm:px-5">
                    {c.logo ? (
                      <img src={c.logo} alt={`${c.client} logo`} loading="lazy" className="max-h-9 w-auto max-w-full object-contain sm:max-h-11" />
                    ) : (
                      <span className="text-center text-sm font-semibold leading-tight tracking-tight sm:text-base">{c.client.split(" ")[0]}</span>
                    )}
                  </span>
                  <span>
                    <span className="display-md block text-2xl sm:text-3xl">{c.client}</span>
                    <span className="label mt-1 block text-muted-foreground">{c.tags.join(" · ")}</span>
                  </span>
                  <span className="col-span-2 col-start-2 text-muted-foreground sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:text-lg">{c.tagline}</span>
                  <ArrowDot className="col-start-3 row-start-1 sm:col-start-4" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Button asChild variant="outline" size="lg"><Link to="/work">See the projects in full <ArrowRight aria-hidden /></Link></Button>
        </div>
      </Section>

      {/* 04 — Question to decision */}
      <Transform />

      {/* 05 — Alumni */}
      <Section tone="light" className="overflow-hidden">
        <div className="grid items-end gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Kicker index="05" className="mb-8">Alumni</Kicker>
            <RevealText as="h2" className="display text-[2.75rem] sm:text-7xl lg:text-[5.5rem]">Where our<br />people go next.</RevealText>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-lg text-muted-foreground">McKinsey, BCG, Goldman Sachs, Google, Peak XV, Sarvam AI. {alumni.length} alumni from seven batches, and what each does now.</p>
            <Button asChild className="mt-7"><Link to="/alumni">Meet the alumni <ArrowRight aria-hidden /></Link></Button>
          </Reveal>
        </div>
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
            {[...logoAlums, ...logoAlums].map((a, i) => (
              <li key={i} aria-hidden={i >= logoAlums.length} className="flex items-center gap-3 rounded-full bg-card py-2 pl-2 pr-6">
                <CompanyLogo logo={a.logo} name={a.company!} className="size-10 rounded-full" />
                <span className="whitespace-nowrap text-sm font-medium">{a.company}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
