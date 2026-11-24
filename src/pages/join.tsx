import * as React from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Linkedin } from "@/components/site/brand"
import { Kicker, PageHero, Reveal, Section, SectionHeading } from "@/components/site/section"
import { careerPaths, guesstimate, recruitment, recruitment2026, site, verticals, whyJoin } from "@/data/content"
import { cn } from "@/lib/utils"

export default function JoinPage() {
  const [step, setStep] = React.useState(0)
  return (
    <>
      <PageHero
        index="05"
        kicker="Join ShARE · Recruitment 2026"
        title={<>Join the<br />1.11%.</>}
        intro="Every branch is welcome. We look for clear thinking, curiosity and care for the world around you. You don't need consulting experience."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild><a href="#timeline">See the timeline <ArrowRight aria-hidden /></a></Button>
          <Button asChild variant="outline"><a href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin /> Follow for dates</a></Button>
        </div>
      </PageHero>

      {/* Why */}
      <Section tone="light">
        <SectionHeading kicker="Why join" index="A" title={<>Six reasons<br />to apply.</>} />
        <div className="mt-14 grid cells gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {whyJoin.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.05} className="bg-background">
              <div className="h-full p-7">
                <span className="label text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-md mt-5 text-xl">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Guesstimate */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading invert kicker="Try Round 1" index="B" title={<>Try a<br />guesstimate.</>} />
            <p className="display-md mt-8 border-l-2 border-primary pl-5 text-xl text-background/90">{guesstimate.question}</p>
            <p className="mt-5 text-sm text-background/60">This is the kind of question we ask in Round 1. Step through how we would break it down.</p>
          </div>
          <div>
            <div role="tablist" aria-label="Guesstimate steps" className="grid grid-cols-4 gap-2">
              {guesstimate.steps.map((s, i) => (
                <button key={s.title} role="tab" aria-selected={step === i} aria-controls="g-panel" onClick={() => setStep(i)}
                  className={cn("label rounded-full px-2 py-3 transition-colors duration-300", step === i ? "bg-primary text-ink" : "bg-ink-2 text-background/70 hover:text-background")}>
                  Step {i + 1}
                </button>
              ))}
            </div>
            <div id="g-panel" role="tabpanel" className="mt-3 min-h-56 rounded-[var(--radius-xl)] bg-ink-2 p-7">
              <h3 className="display-md text-2xl text-primary">{guesstimate.steps[step].title}</h3>
              <p className="mt-4 text-background/80">{guesstimate.steps[step].body}</p>
              <div className="mt-8 flex gap-2">
                <Button variant="outlineLight" size="sm" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>Back</Button>
                <Button size="sm" disabled={step === guesstimate.steps.length - 1} onClick={() => setStep((s) => s + 1)}>Next step</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section tone="paper" id="timeline">
        <SectionHeading kicker="Recruitment 2026" index="C" title={<>Four weeks,<br />four rounds.</>} />
        <ol className="mt-14 grid cells gap-3 md:grid-cols-4">
          {recruitment2026.map((r, i) => (
            <li key={r.title} className={cn("flex flex-col p-7", i === 0 ? "!bg-primary text-ink" : "")}>
              <span className="label">{r.when}</span>
              <span className="display mt-8 text-5xl">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display-md mt-4 text-xl">{r.title}</h3>
              <p className={cn("mt-3 text-sm", i === 0 ? "text-ink/75" : "text-muted-foreground")}>{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Verticals + careers */}
      <Section tone="light">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading kicker="Where you'll work" index="D" title="Verticals." size="md" />
            <ul className="mt-8 border-t border-line">
              {verticals.map((v) => (
                <li key={v.id} className="border-b border-line py-5">
                  <h3 className="display-md text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading kicker="Where it leads" index="E" title="Careers." size="md" />
            <ul className="mt-8 border-t border-line">
              {careerPaths.map((c) => (
                <li key={c.title} className="flex items-baseline justify-between border-b border-line py-5">
                  <span className="display-md text-xl">{c.title}</span>
                  <span className="label text-green-deep">{c.note}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-8"><Link to="/alumni">See where alumni went <ArrowRight aria-hidden /></Link></Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper" id="faq">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading kicker="FAQ" index="F" title="Questions." size="md" />
            <Kicker className="mt-8">Ask the team</Kicker>
            <p className="mt-3 text-sm text-muted-foreground">Find us at orientation, or message ShARE BITS Pilani on LinkedIn.</p>
          </div>
          <Accordion type="single" collapsible className="border-t border-line">
            {recruitment.faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  )
}
