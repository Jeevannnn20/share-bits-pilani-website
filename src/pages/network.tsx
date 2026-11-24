import * as React from "react"
import { Link } from "react-router-dom"
import { Linkedin } from "@/components/site/brand"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Kicker, PageHero, Reveal, RevealText, Section, SectionHeading, StatRow } from "@/components/site/section"
import { IndiaMap } from "@/components/site/india-map"
import { consultantStats, globalClients, leadership, pillars, shareGlobal } from "@/data/content"

function Person({ name, role, linkedin }: { name: string; role: string; linkedin: string }) {
  const slug = name.toLowerCase().replace(/[^a-z]+/g, "-")
  const [noPhoto, setNoPhoto] = React.useState(false)
  return (
    <li>
      <a href={linkedin} target="_blank" rel="noreferrer" className="group flex h-full items-center gap-4 p-6" aria-label={`${name}, ${role}. Opens LinkedIn.`}>
        {/* Drop a photo at public/photos/team/<first-last>.jpg and it appears here; initials show until then. */}
        {noPhoto ? (
          <span aria-hidden className="grid size-16 shrink-0 place-items-center rounded-full bg-ink text-sm font-medium text-background">{name.split(" ").map((w) => w[0]).join("")}</span>
        ) : (
          <img src={`/photos/team/${slug}.jpg`} alt="" onError={() => setNoPhoto(true)} className="size-16 shrink-0 rounded-full object-cover" />
        )}
        <span className="min-w-0 flex-1">
          <span className="display-md block text-lg">{name}</span>
          <span className="label text-muted-foreground">{role}</span>
        </span>
        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong text-ink/70 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-ink"><Linkedin className="size-3.5" /></span>
      </a>
    </li>
  )
}

export default function NetworkPage() {
  return (
    <>
      <PageHero
        index="02"
        kicker="Network"
        title={<>One network.<br />Twenty countries.</>}
        intro={shareGlobal.definition}
      />

      {/* The organisation */}
      <Section tone="light" className="pt-0 sm:pt-0 lg:pt-0">
        <StatRow stats={shareGlobal.stats} />
        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker index="A" className="mb-6">Do Well, Do Good</Kicker>
            <RevealText as="h2" className="display text-4xl sm:text-5xl lg:text-6xl">An organisation built on one idea.</RevealText>
          </div>
          <Reveal delay={0.1}>
            <p className="display-md text-2xl sm:text-3xl">{shareGlobal.aim}</p>
            <p className="mt-6 text-lg text-muted-foreground">{shareGlobal.flp}</p>
          </Reveal>
        </div>
      </Section>

      {/* Global mentor */}
      <Section tone="paper">
        <figure className="grid items-center gap-10 lg:grid-cols-[20rem_1fr] lg:gap-16">
          <Reveal>
            <img src="/photos/tony-blair.jpg" alt="Tony Blair speaking at a podium" loading="lazy" className="aspect-[4/5] w-full max-w-xs rounded-[var(--radius-xl)] object-cover object-top grayscale" />
          </Reveal>
          <div>
            <Kicker className="mb-6">Global mentor</Kicker>
            <RevealText><blockquote className="display text-[2.2rem] sm:text-6xl lg:text-7xl">“{shareGlobal.quote.text}”</blockquote></RevealText>
            <figcaption className="mt-8">
              <span className="display-md block text-xl">{shareGlobal.quote.by}</span>
              <span className="text-muted-foreground">{shareGlobal.quote.role}</span>
            </figcaption>
          </div>
        </figure>
        <p className="mt-10 text-xs text-muted-foreground">Photo: U.S. Department of State, public domain, via Wikimedia Commons.</p>
      </Section>

      {/* Chapters map */}
      <Section tone="ink" id="chapters">
        <SectionHeading invert kicker="Chapters in India" index="B" title={<>22 chapters,<br />from Ropar to Kozhikode.</>} intro="ShARE runs at India's leading institutes. Hover over a city, or pick a chapter, to see who is there." />
        <div className="mt-16"><IndiaMap /></div>
        <div className="mt-20 border-t border-ink-line pt-8">
          <Kicker invert>ShARE Global has worked with</Kicker>
          <p className="display-md mt-5 max-w-5xl text-2xl text-background/85 sm:text-3xl">{globalClients.join(" · ")}</p>
        </div>
      </Section>

      {/* BITS chapter */}
      <Section tone="light" id="bits-chapter">
        <SectionHeading kicker="The BITS Pilani chapter" index="C" title={<>Our chapter.</>} intro="We have run for more than eight years. We take on live projects for start-ups and established companies, and train every member to the same standard." />
        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {consultantStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="border-t border-line-strong pt-5">
                <p className="display text-6xl">{s.value}</p>
                <p className="label mt-4 text-green-deep">{s.label}</p>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="cells mt-20 grid gap-3 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06}>
              <div className="h-full p-8">
                <span className="label text-muted-foreground">0{i + 1}</span>
                <h3 className="display-md mt-5 text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section tone="paper" id="team">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Leadership 2026" index="D" title="The people leading it." size="md" />
          <Button asChild variant="outline"><Link to="/bits-pilani">About BITS Pilani <ArrowRight aria-hidden /></Link></Button>
        </div>
        <ul className="cells mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((m) => <Person key={m.name} {...m} />)}
        </ul>
      </Section>
    </>
  )
}
