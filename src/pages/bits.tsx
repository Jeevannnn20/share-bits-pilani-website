import { CompanyLogo, CrossRule, Kicker, Reveal, RevealText, Section, SectionHeading, StatRow } from "@/components/site/section"
import { bitsHighlights, bitsStartups, bitsStats, branches, campuses } from "@/data/bits"

export default function BitsPage() {
  return (
    <>
      {/* Hero over a photo of the clock tower */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink text-background">
        <img src="/photos/bits-clock-tower.jpg" alt="The clock tower and main building at BITS Pilani" className="absolute inset-0 size-full object-cover object-[75%_60%]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="container-site relative pb-14 pt-40">
          <Reveal><Kicker index="04" invert className="mb-8 text-background/80">BITS Pilani</Kicker></Reveal>
          <RevealText as="h1" className="display text-[3rem] sm:text-7xl lg:text-[7.5rem]">Where the talent<br />comes from.</RevealText>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-lg text-background/85">The Birla Institute of Technology and Science, Pilani. A desert campus in Rajasthan that has produced many of India's best-known engineers and founders.</p>
            <p className="mt-8 text-xs text-background/50">Photo: Vinwe, CC BY-SA 3.0, via Wikimedia Commons.</p>
          </Reveal>
        </div>
      </section>

      <Section tone="light">
        <StatRow stats={bitsStats} />
      </Section>

      {/* Highlights */}
      <Section tone="paper">
        <SectionHeading kicker="Why BITS" index="A" title={<>Built to make<br />generalists.</>} intro="Good consultants have range, independence and patience with unclear problems. BITS teaches all three." />
        <div className="mt-14 grid cells gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bitsHighlights.map((h, i) => (
            <Reveal key={h.title} delay={(i % 3) * 0.05} className="bg-paper">
              <div className="h-full p-7">
                <span className="label text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display-md mt-5 text-xl">{h.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Startups */}
      <Section tone="ink">
        <SectionHeading invert kicker="Start-up DNA" index="B" title={<>BITSians<br />build.</>} intro="Eleven companies founded or co-founded by BITS alumni. ShARE comes from the same habit of building things." />
        <ul className="cells-dark mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bitsStartups.map((s, i) => (
            <li key={s.name}>
              <Reveal delay={(i % 3) * 0.05}>
                <a href={s.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col p-6">
                  <span className="flex items-center justify-between gap-4">
                    <CompanyLogo logo={s.logo} name={s.name} className="size-14 rounded-2xl border-0 [&_img]:size-9" />
                    <span aria-hidden className="text-background/40 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary">↗</span>
                  </span>
                  <span className="display-md mt-6 text-2xl">{s.name}</span>
                  <span className="mt-2 text-sm text-background/65">{s.note}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Branches */}
      <Section tone="light">
        <SectionHeading kicker="Disciplines" index="C" title={<>Every branch<br />in one team.</>} intro="ShARE recruits from all of them. A typical project team mixes a CS major, an economist, a chemical engineer and a physicist." />
        <CrossRule className="mt-14" count={4} />
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {Object.entries(branches).map(([deg, list]) => (
            <div key={deg}>
              <Kicker>{deg}</Kicker>
              <ul className="mt-5 flex flex-wrap gap-2">
                {list.map((b) => <li key={b} className="pill text-xs text-foreground/80">{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <CrossRule count={4} />
      </Section>

      {/* Campuses */}
      <Section tone="paper">
        <SectionHeading kicker="Campuses" index="D" title="One institute, four campuses." size="md" />
        <div className="mt-14 grid cells gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {campuses.map((c) => (
            <div key={c.name} className="bg-paper p-7">
              <p className="label text-muted-foreground">Est. {c.since}</p>
              <h3 className="display mt-4 text-4xl">{c.name}</h3>
              <p className="label mt-2 text-green-deep">{c.place}</p>
              <p className="mt-4 text-sm text-muted-foreground">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">Facts compiled from public sources.</p>
      </Section>
    </>
  )
}
