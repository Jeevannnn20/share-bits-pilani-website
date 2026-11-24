import * as React from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

/** Opening screen: orbiting dot, a 000→100 counter, then the green dot grows to wipe the screen.
    Shown once per browser session. */
export function Loader() {
  const reduce = useReducedMotion()
  const [show, setShow] = React.useState(() => {
    try { return !sessionStorage.getItem("share-loaded") } catch { return true }
  })
  const [n, setN] = React.useState(0)

  React.useEffect(() => {
    if (!show) return
    if (reduce) { setShow(false); return }
    document.documentElement.style.overflow = "hidden"
    const start = performance.now()
    const dur = 1900
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setShow(false), 650)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); document.documentElement.style.overflow = "" }
  }, [show, reduce])

  React.useEffect(() => {
    if (!show) {
      document.documentElement.style.overflow = ""
      try { sessionStorage.setItem("share-loaded", "1") } catch { /* private mode */ }
    }
  }, [show])

  const done = n >= 100
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading ShARE BITS Pilani"
          className="fixed inset-0 z-[100] overflow-hidden bg-ink text-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label absolute left-5 top-5 flex items-center gap-2 text-background/60 sm:left-8 sm:top-7">
            <span className="size-1.5 rounded-full bg-primary" /> ShARE BITS Pilani
          </p>
          <p className="label absolute bottom-6 left-5 text-background/50 sm:bottom-8 sm:left-8">Do well — Do good</p>

          <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 sm:size-72">
            <span className="absolute inset-0 rounded-full border border-background/25" />
            <span className="absolute inset-[18%] rounded-full border border-background/15" />
            <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/40" />
            <span className="absolute inset-0 animate-orbit">
              <motion.span
                className="absolute left-1/2 top-0 block size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                animate={done ? { scale: 260 } : { scale: 1 }}
                transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
              />
            </span>
          </div>

          <div className="absolute bottom-5 right-5 text-right sm:bottom-7 sm:right-8">
            <p className="label mb-1 text-background/50">Loading</p>
            <p className="display text-6xl tabular-nums sm:text-8xl">
              {String(n).padStart(3, "0")}<span className="ml-1 text-base text-background/50">%</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
