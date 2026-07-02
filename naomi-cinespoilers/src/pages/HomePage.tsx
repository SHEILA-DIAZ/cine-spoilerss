import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-yellow-400">
          E-commerce de tickets de cine
        </p>

        <h1 className="text-5xl font-black md:text-7xl">
          Bienvenido a CineSpoilerS
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Explora películas, revisa su información principal y accede al catálogo
          inicial de una aplicación web escalable creada con React, TypeScript,
          Shadcn UI y React Router DOM.
        </p>

        <div className="mt-8">
          <Button asChild className="bg-yellow-400 font-bold text-black hover:bg-yellow-500">
            <Link to="/movies">Ver catálogo de películas</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-3">
        <Card className="border-zinc-800 bg-[#18191d] text-white">
          <CardContent className="p-6 text-center">
            <p className="text-4xl">🎬</p>
            <h2 className="mt-4 font-bold">Películas</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Catálogo inicial con información básica.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-[#18191d] text-white">
          <CardContent className="p-6 text-center">
            <p className="text-4xl">🎟️</p>
            <h2 className="mt-4 font-bold">Tickets</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Base para un e-commerce de cine.
            </p>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-[#18191d] text-white">
          <CardContent className="p-6 text-center">
            <p className="text-4xl">⚡</p>
            <h2 className="mt-4 font-bold">Escalable</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Preparado para crecer con buenas prácticas.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}