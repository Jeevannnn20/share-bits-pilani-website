import * as React from "react"
import { Linkedin } from "@/components/site/brand"
import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react"
import { services, site } from "@/data/content"
import { Button } from "@/components/ui/button"
import { Input as BaseInput, Select as BaseSelect, Textarea as BaseTextarea } from "@/components/ui/input"
import { PageHero } from "@/components/site/section"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const line = "rounded-none border-0 border-b border-line-strong bg-transparent px-0 focus-visible:ring-0 focus-visible:border-solid focus-visible:border-ink aria-[invalid=true]:border-red-700"
const Input = (p: React.ComponentProps<typeof BaseInput>) => <BaseInput {...p} className={cn(line, "h-12", p.className)} />
const Select = (p: React.ComponentProps<typeof BaseSelect>) => <BaseSelect {...p} className={cn(line, "h-12", p.className)} />
const Textarea = (p: React.ComponentProps<typeof BaseTextarea>) => <BaseTextarea {...p} className={cn(line, "min-h-28 py-3", p.className)} />

type Errors = Partial<Record<"name" | "email" | "org" | "problem", string>>

// No backend yet: submitting opens a pre-filled email to the President.
// TODO: swap for Formspree, Google Forms or a serverless endpoint before launch.
export default function ContactPage() {
  const [errors, setErrors] = React.useState<Errors>({})
  const [sent, setSent] = React.useState(false)
  const [areas, setAreas] = React.useState<string[]>([])

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const get = (k: string) => String(f.get(k) ?? "").trim()
    const next: Errors = {}
    if (!get("name")) next.name = "Please enter your name."
    if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "Please enter a valid work email."
    if (!get("org")) next.org = "Please enter your organisation."
    if (get("problem").length < 20) next.problem = "A couple of sentences helps us scope this (20+ characters)."
    setErrors(next)
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0]
      document.getElementById(first)?.focus()
      return
    }
    const body = [
      `Name: ${get("name")}`,
      `Role: ${get("role")}`,
      `Organisation: ${get("org")}`,
      `Website: ${get("website")}`,
      `Email: ${get("email")}`,
      `Stage: ${get("stage")}`,
      `Sector: ${get("sector")}`,
      `Areas: ${areas.join(", ") || "Not sure yet"}`,
      `Timeline: ${get("timeline")}`,
      `Heard about us: ${get("source")}`,
      "",
      "What we're trying to solve:",
      get("problem"),
    ].join("\n")
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Project enquiry: ${get("org")}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="text-sm font-medium text-red-700">{errors[k]}</p>
    ) : null

  return (
    <>
      <PageHero
        index="06"
        kicker="Contact"
        title={<>Tell us what<br />you're deciding.</>}
        intro="Share a few details and we'll set up a 30-minute call. We reply within a few working days."
      />

      <section className="bg-background pb-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[var(--radius-xl)] bg-card p-6">
              <p className="label text-muted-foreground">Find us on</p>
              <div className="mt-4 grid gap-2">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-full border border-line px-4 py-3 text-sm transition-colors hover:border-ink"><Mail className="size-4 text-green-deep" aria-hidden />Email the team</a>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full border border-line px-4 py-3 text-sm transition-colors hover:border-ink"><Linkedin className="size-4 text-green-deep" />LinkedIn</a>
              </div>
              <p className="mt-6 flex gap-3 text-sm text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-green-deep" aria-hidden />NDAs on request. Everything you share stays confidential.</p>
            </div>
          </aside>
          <div>
          {sent ? (
            <div className="flex flex-col items-start py-10" role="status">
              <CheckCircle2 className="size-12 text-green-deep" aria-hidden />
              <h2 className="display-md mt-6 text-3xl">Your email is ready to send</h2>
              <p className="mt-3 text-muted-foreground">We've opened a pre-filled email in your mail app. Hit send and we'll be in touch to set up a scoping call.</p>
              <Button variant="outline" className="mt-8" onClick={() => setSent(false)}>Edit the details</Button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-8">
              <fieldset className="grid gap-5 sm:grid-cols-2">
                <legend className="label mb-5 text-green-deep">About you</legend>
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  {err("name")}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" name="role" autoComplete="organization-title" placeholder="Founder, Head of Product…" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email *</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" inputMode="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  {err("email")}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org">Organisation *</Label>
                  <Input id="org" name="org" autoComplete="organization" aria-invalid={!!errors.org} aria-describedby={errors.org ? "org-error" : undefined} />
                  {err("org")}
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" name="website" type="url" inputMode="url" placeholder="https://" />
                </div>
              </fieldset>

              <fieldset className="grid gap-5 sm:grid-cols-2">
                <legend className="label mb-5 text-green-deep">About the project</legend>
                <div className="space-y-2">
                  <Label htmlFor="stage">Stage</Label>
                  <Select id="stage" name="stage" defaultValue="">
                    <option value="" disabled>Select stage</option>
                    <option>Pre-seed / idea</option>
                    <option>Seed</option>
                    <option>Series A–B</option>
                    <option>Series C+ / growth</option>
                    <option>Established company</option>
                    <option>Non-profit / social enterprise</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sector">Sector</Label>
                  <Input id="sector" name="sector" placeholder="Fintech, climate, health…" />
                </div>
                <div className="space-y-3 sm:col-span-2">
                  <p className="text-sm font-semibold" id="areas-label">What do you need help with?</p>
                  <div role="group" aria-labelledby="areas-label" className="flex flex-wrap gap-2">
                    {services.map((s) => {
                      const on = areas.includes(s.title)
                      return (
                        <button
                          key={s.id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => setAreas((a) => (on ? a.filter((x) => x !== s.title) : [...a, s.title]))}
                          className={cn("label min-h-10 rounded-full border px-4 text-[0.68rem] transition-colors", on ? "border-ink bg-ink text-background" : "border-line-strong hover:border-ink")}
                        >
                          {s.title}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="problem">What are you trying to solve? *</Label>
                  <Textarea id="problem" name="problem" placeholder="The decision you're facing, what you've tried, and what a great outcome looks like." aria-invalid={!!errors.problem} aria-describedby={errors.problem ? "problem-error" : "problem-help"} />
                  {errors.problem ? err("problem") : <p id="problem-help" className="text-sm text-muted-foreground">Two or three sentences is plenty.</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeline">Ideal start</Label>
                  <Select id="timeline" name="timeline" defaultValue="">
                    <option value="" disabled>Select timing</option>
                    <option>As soon as possible</option>
                    <option>Within a month</option>
                    <option>Next semester</option>
                    <option>Just exploring</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Input id="source" name="source" placeholder="LinkedIn, referral…" />
                </div>
              </fieldset>

              <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">* Required. Submitting opens a pre-filled email.</p>
                <Button type="submit" size="lg">Send enquiry <ArrowRight aria-hidden /></Button>
              </div>
            </form>
          )}
          </div>
        </div>
      </section>
    </>
  )
}
