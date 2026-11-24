import * as React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import * as Dialog from "@radix-ui/react-dialog"
import { motion } from "motion/react"
import { nav, site } from "@/data/content"
import { Logo } from "./brand"
import { cn } from "@/lib/utils"

// Frosted "liquid glass": translucent fill, heavy blur with boosted saturation,
// a bright top edge and a soft drop shadow.
const glass =
  "border border-white/60 bg-white/55 shadow-[0_10px_40px_-10px_rgb(47_45_46/0.28),inset_0_1px_0_rgb(255_255_255/0.85),inset_0_-1px_0_rgb(47_45_46/0.06)] backdrop-blur-2xl backdrop-saturate-[1.8]"

/** Floating glass bar that stays at the top while the page scrolls: logo, tabs, and a call to action. */
export function Header() {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()
  React.useEffect(() => setOpen(false), [pathname])
  const isActive = (to: string) => pathname === to || pathname.startsWith(to + "/")

  const items = [{ to: "/", label: "Home" }, ...nav, { to: "/contact", label: "Contact" }]
  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-6">
      <a href="#main" className="pointer-events-auto sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-background">
        Skip to content
      </a>
      <div className={cn("pointer-events-auto mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 rounded-full pl-5 pr-2", glass)}>
        <Link to="/" aria-label="ShARE BITS Pilani home" className="shrink-0"><Logo /></Link>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {nav.map((item) => {
            const on = isActive(item.to)
            return (
              <NavLink key={item.to} to={item.to} className={cn("relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300", on ? "text-background" : "text-ink/75 hover:text-ink")}>
                {on && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <span className="relative">{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="label hidden h-12 items-center gap-2 rounded-full bg-primary px-5 text-ink transition-colors duration-300 hover:bg-ink hover:text-background sm:inline-flex">
            Work with us <span aria-hidden>↗</span>
          </Link>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="label inline-flex h-12 items-center gap-3 rounded-full bg-ink px-5 text-background lg:hidden" aria-label="Open menu">
              Menu
              <span aria-hidden className="flex flex-col gap-1"><span className="h-px w-4 bg-current" /><span className="h-px w-4 bg-current" /></span>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Content className="fixed inset-0 z-50 overflow-y-auto bg-ink text-background focus:outline-none data-[state=open]:animate-[menu-in_0.6s_var(--ease-out-expo)]">
                <style>{`@keyframes menu-in{from{clip-path:inset(0 0 100% 0)}to{clip-path:inset(0 0 0 0)}}@keyframes item-in{from{transform:translateY(110%)}to{transform:none}}`}</style>
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <Dialog.Description className="sr-only">All pages on the ShARE BITS Pilani site</Dialog.Description>
                <div className="container-site flex min-h-full flex-col">
                  <div className="flex h-20 items-center justify-between">
                    <Link to="/" aria-label="ShARE BITS Pilani home"><Logo inverted /></Link>
                    <Dialog.Close className="label inline-flex h-11 items-center gap-3 rounded-full border border-ink-line px-5 transition-colors hover:bg-primary hover:text-ink" aria-label="Close menu">
                      Close <span aria-hidden>✕</span>
                    </Dialog.Close>
                  </div>
                  <nav aria-label="Menu" className="flex flex-1 items-center py-8">
                    <ul className="w-full">
                      {items.map((item, i) => (
                        <li key={item.to} className="overflow-hidden border-b border-ink-line">
                          <NavLink
                            to={item.to}
                            end
                            style={{ animation: `item-in 0.9s var(--ease-out-expo) ${0.15 + i * 0.05}s both` }}
                            className={({ isActive: a }) => cn("flex items-baseline gap-5 py-3 transition-colors duration-300", a ? "text-primary" : "hover:text-primary")}
                          >
                            <span className="label w-8 text-background/50">{String(i + 1).padStart(2, "0")}</span>
                            <span className="display text-[2.6rem] sm:text-6xl">{item.label}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="label flex flex-wrap justify-between gap-4 py-6 text-background/60">
                    <span>{site.motto}</span>
                    <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn ↗</a>
                  </div>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
