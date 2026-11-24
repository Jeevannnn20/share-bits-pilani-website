import * as React from "react"
import { Linkedin } from "@/components/site/brand"
import { CompanyLogo, Kicker, PageHero, Reveal, RevealText, Section, StatRow } from "@/components/site/section"
import { alumni, batches, type Alum } from "@/data/alumni"
import { cn } from "@/lib/utils"

const rank = (a: Alum) => (a.por === "President" ? 0 : /Vice President|Director/.test(a.por) ? 1 : a.company ? 2 : 3)

function AlumCard({ a }: { a: Alum }) {
  const inner = (
    <>
      <div className="flex items-start justify-between">
        <CompanyLogo logo={a.logo} name={a.company ?? a.name} className="size-16 rounded-2xl [&_img]:size-10" />
        {a.linkedin && (
          <span className="grid size-9 place-items-center rounded-full border border-line-strong text-ink/60 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-ink">
            <Linkedin className="size-3.5" />
          </span>
        )}
      </div>
      <div className="mt-auto pt-10">
        <p className="display-md text-2xl">{a.name}</p>
        <p className="mt-2 font-medium">{a.company ?? "Profile coming soon"}</p>
        {a.role && <p className="text-sm text-muted-foreground">{a.role}</p>}
        <p className="label mt-5 border-t border-line pt-4 text-muted-foreground">
          At ShARE: <span className={a.por === "President" ? "text-green-deep" : ""}>{a.por}</span>
        </p>
      </div>
    </>
  )
  const cls = "group flex h-full min-h-[19rem] w-[17rem] flex-col rounded-[var(--radius-xl)] bg-card p-6 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 sm:w-[19rem]"
  return (
    <li className="shrink-0 snap-start">
      {a.linkedin ? (
        <a href={a.linkedin} target="_blank" rel="noreferrer" className={cls} aria-label={`${a.name}, ${a.company ?? ""}. Opens LinkedIn.`}>{inner}</a>
      ) : (
        <div className={cls}>{inner}</div>
      )}
    </li>
  )
}

/** One batch: the year on the left, its people in a strip that scrolls sideways. */
function BatchRow({ year, people }: { year: number; people: Alum[] }) {
  const ref = React.useRef<HTMLUListElement>(null)
  const [edge, setEdge] = React.useState({ start: true, end: false })
  const update = React.useCallback(() => {
    const el = ref.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 })
  }, [])
  React.useEffect(() => {
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [update])
  const move = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * Math.max(320, ref.current.clientWidth * 0.8), behavior: "smooth" })
  const arrow = "grid size-11 place-items-center rounded-full border border-line-strong transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-background disabled:pointer-events-none disabled:opacity-25"

  return (
    <section aria-label={`Batch of ${year}`} className="border-t border-line-strong py-10 sm:py-14">
      <div className="container-site flex items-end justify-between gap-6">
        <Reveal>
          <Kicker>Batch of</Kicker>
          <h2 className="display mt-2 text-6xl sm:text-8xl">{year}</h2>
        </Reveal>
        <div className="flex items-center gap-4 pb-2">
          <span className="label hidden text-muted-foreground sm:block">{people.length} {people.length === 1 ? "person" : "people"}</span>
          <div className="flex gap-2">
            <button type="button" className={arrow} onClick={() => move(-1)} disabled={edge.start} aria-label={`Scroll batch of ${year} back`}>←</button>
            <button type="button" className={arrow} onClick={() => move(1)} disabled={edge.end} aria-label={`Scroll batch of ${year} forward`}>→</button>
          </div>
        </div>
      </div>
      <Reveal delay={0.1}>
        <ul
          ref={ref}
          onScroll={update}
          tabIndex={0}
          aria-label={`People from the batch of ${year}`}
          className={cn(
            "mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            // Start in line with the page gutter, and let cards run off the right edge.
            "scroll-pl-4 px-4 sm:scroll-pl-7 sm:px-7 lg:scroll-pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:px-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))]",
          )}
        >
          {people.map((a) => <AlumCard key={`${a.name}-${a.batch}`} a={a} />)}
        </ul>
      </Reveal>
    </section>
  )
}

export default function AlumniPage() {
  const companies = new Set(alumni.map((a) => a.company).filter(Boolean)).size
  const founders = alumni.filter((a) => a.sector === "Founder").length
  const presidents = alumni.filter((a) => a.por === "President")

  return (
    <>
      <PageHero
        index="03"
        kicker="Alumni"
        title={<>Where our<br />people go.</>}
        intro="Seven batches of ShARE consultants, and what each of them does now. Scroll a batch sideways to meet everyone in it."
      />

      <Section tone="light" className="pt-0 sm:pt-0 lg:pt-0 pb-16 sm:pb-20 lg:pb-24">
        <StatRow stats={[
          { value: String(alumni.length), label: "Alumni" },
          { value: String(batches.length), label: `Batches, ${batches[batches.length - 1]} to ${batches[0]}` },
          { value: String(companies), label: "Companies and schools" },
          { value: String(founders), label: "Founders" },
        ]} />
      </Section>

      <div className="bg-paper">
        {batches.map((b) => (
          <BatchRow key={b} year={b} people={alumni.filter((a) => a.batch === b).sort((x, y) => rank(x) - rank(y))} />
        ))}
      </div>

      <Section tone="light">
        <Kicker index="B" className="mb-6">Past presidents</Kicker>
        <RevealText as="h2" className="display text-4xl sm:text-6xl">The people who led the chapter.</RevealText>
        <ul className="mt-12">
          {presidents.sort((x, y) => y.batch - x.batch).map((a) => (
            <li key={a.name} className="grid grid-cols-[4rem_1fr] items-baseline gap-x-6 border-t border-line-strong py-5 sm:grid-cols-[6rem_1fr_1fr]">
              <span className="label text-muted-foreground">{a.batch}</span>
              <span className="display-md text-2xl">{a.name}</span>
              <span className="col-start-2 text-muted-foreground sm:col-start-3">{a.company}</span>
            </li>
          ))}
        </ul>
        <p className="mt-12 text-sm text-muted-foreground">
          A ShARE BITS Pilani alum who is missing, or has changed roles? <a className="text-green-deep underline underline-offset-4" href="mailto:f20230956@pilani.bits-pilani.ac.in?subject=Alumni%20update">Send us an update</a>.
        </p>
      </Section>
    </>
  )
}
