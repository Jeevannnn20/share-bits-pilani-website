import * as React from "react"
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { Loader } from "@/components/site/loader"
import Lenis from "lenis"
import HomePage from "@/pages/home"
import NetworkPage from "@/pages/network"
import WorkPage from "@/pages/work"
import CasePage from "@/pages/case"
import AlumniPage from "@/pages/alumni"
import BitsPage from "@/pages/bits"
import JoinPage from "@/pages/join"
import ContactPage from "@/pages/contact"
import NotFound from "@/pages/not-found"

const titles: Record<string, string> = {
  "/": "ShARE BITS Pilani · Do Well, Do Good",
  "/network": "Network · ShARE BITS Pilani",
  "/work": "Work · ShARE BITS Pilani",
  "/alumni": "Alumni · ShARE BITS Pilani",
  "/bits-pilani": "BITS Pilani · ShARE BITS Pilani",
  "/join": "Join ShARE · ShARE BITS Pilani",
  "/contact": "Work with us · ShARE BITS Pilani",
}

function Layout() {
  const { pathname, hash } = useLocation()
  const lenis = React.useRef<Lenis | null>(null)

  // Smooth, weighted scrolling. Skipped when the visitor prefers reduced motion.
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const l = new Lenis({ duration: 1.1, anchors: true })
    lenis.current = l
    let raf = 0
    const loop = (t: number) => { l.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); l.destroy(); lenis.current = null }
  }, [])

  React.useEffect(() => {
    document.title = titles[pathname] ?? (pathname.startsWith("/work/") ? "Project · ShARE BITS Pilani" : "ShARE BITS Pilani")
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
    } else if (lenis.current) {
      lenis.current.scrollTo(0, { immediate: true, force: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return (
    <>
      <Loader />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="network" element={<NetworkPage />} />
          <Route path="about" element={<Navigate to="/network" replace />} />
          <Route path="approach" element={<Navigate to="/#approach" replace />} />
          <Route path="services" element={<Navigate to="/#approach" replace />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<CasePage />} />
          <Route path="alumni" element={<AlumniPage />} />
          <Route path="bits-pilani" element={<BitsPage />} />
          <Route path="team" element={<Navigate to="/network#team" replace />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
