import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Dots } from "@/components/site/brand"

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80vh] flex-col items-start justify-center pb-20 pt-40">
      <Dots className="h-16 w-24" />
      <p className="label mt-8 text-muted-foreground">404</p>
      <h1 className="display mt-4 text-6xl sm:text-8xl">Page not found.</h1>
      <p className="mt-5 text-lg text-muted-foreground">That page doesn't exist, or it has moved.</p>
      <Button asChild size="lg" className="mt-8"><Link to="/">Back to home</Link></Button>
    </section>
  )
}
