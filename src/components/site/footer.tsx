import { Link, useLocation } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { site } from "@/data/content"
import { Dots } from "./brand"
import { Kicker, Reveal, RevealText } from "./section"

/** Closing invitation plus contact details, shown at the end of every page. */
export function Footer() {
  const { pathname } = useLocation()
  const onContact = pathname === "/contact"
  return (
    <footer className="bg-ink text-background">
      <div className="container-site pt-24 sm:pt-32">
        {!onContact && (
          <div className="pb-24 text-center sm:pb-32">
            <Kicker invert className="mb-8"><span className="mr-3 text-primary">+</span>Have a hard question?<span className="ml-3 text-primary">+</span></Kicker>
            <RevealText as="p" className="display text-[3.2rem] sm:text-8xl lg:text-[9.5rem]">Let’s work<br />it out together.</RevealText>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-8 max-w-md text-background/70">Tell us what you’re deciding. We’ll reply with how we’d approach it.</p>
              <Button asChild variant="green" size="lg" className="mt-9"><Link to="/contact">Start a conversation <ArrowRight aria-hidden /></Link></Button>
            </Reveal>
          </div>
        )}
        <div className="grid gap-10 border-t border-ink-line py-12 sm:grid-cols-3">
          <div>
            <p className="label mb-3 text-background/50">Contact</p>
            <a href={`mailto:${site.email}`} className="break-all hover:text-primary">{site.email} ↗</a>
          </div>
          <div>
            <p className="label mb-3 text-background/50">Elsewhere</p>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn ↗</a>
          </div>
          <div>
            <p className="label mb-3 text-background/50">Based in</p>
            <p>Pilani, Rajasthan, India</p>
          </div>
        </div>
        <div className="label flex flex-wrap items-center justify-between gap-4 border-t border-ink-line py-6 text-background/50">
          <span className="flex items-center gap-3"><Dots inverted className="h-4 w-6" />© {new Date().getFullYear()} ShARE BITS Pilani</span>
          <span>{site.motto}</span>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="label hover:text-primary">Back to top ↑</button>
        </div>
      </div>
    </footer>
  )
}
