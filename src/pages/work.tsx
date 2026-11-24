import { PageHero, Reveal, Section, SectionHeading } from "@/components/site/section"
import { ProjectCard } from "@/components/site/project-card"
import { caseStudies, clients, otherClients } from "@/data/content"

export default function WorkPage() {
  return (
    <>
      <PageHero
        index="01"
        kicker="Work"
        title={<>Selected<br />work<sup className="label ml-2 align-super text-muted-foreground">({String(caseStudies.length).padStart(2, "0")})</sup></>}
        intro="Seven projects across fintech, biotech, space, climate, healthcare, architecture and electric mobility. Each one started with a question a founder or leadership team needed answered."
      />

      <Section tone="light" className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
          {caseStudies.map((c, i) => <ProjectCard key={c.slug} c={c} i={i} total={caseStudies.length} />)}
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading kicker="Clients" index="B" title={<>Who we've<br />worked with.</>} size="md" />
        <ul className="cells mt-14 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {clients.map((c, i) => (
            <li key={c.slug}>
              <Reveal delay={(i % 3) * 0.05}>
                <div className="flex h-full flex-col gap-4 p-6 sm:p-8">
                  <img src={c.logo} alt={`${c.name} logo`} className="h-10 w-auto self-start object-contain" loading="lazy" />
                  <p className="label text-green-deep">{c.sector}</p>
                  <p className="text-sm text-muted-foreground">{c.blurb}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground">Also: {otherClients.join(", ")}.</p>
      </Section>
    </>
  )
}
