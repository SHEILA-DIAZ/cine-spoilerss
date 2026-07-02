import { Link, useParams } from "react-router-dom"
import { movies } from "../data/movies"
import { Button } from "../components/ui/button"

export default function MovieDetailPage() {
  const { id } = useParams()

  const movie = movies.find((item) => item.id === Number(id))

  if (!movie) {
    return (
      <main className="min-h-screen bg-[#08090b] px-6 py-16 text-white">
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-black">Película no encontrada</h1>
          <p className="mt-4 text-zinc-400">
            La película que buscas no está disponible en nuestro catálogo.
          </p>

          <Button asChild className="mt-8 bg-yellow-400 font-bold text-black hover:bg-yellow-500">
            <Link to="/movies">Volver al catálogo</Link>
          </Button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#08090b] px-6 py-16 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="rounded-3xl border border-zinc-800 bg-[#18191d] p-8">
          <div className="flex h-[420px] items-center justify-center rounded-2xl bg-black text-8xl">
            🎬
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Detalle de película
          </p>

          <h1 className="text-5xl font-black">{movie.title}</h1>

          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-yellow-400 px-4 py-2 font-bold text-black">
              ⭐ {movie.rating}
            </span>
            <span className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-300">
              {movie.genre}
            </span>
            <span className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-300">
              {movie.year}
            </span>
            <span className="rounded-full border border-zinc-700 px-4 py-2 text-zinc-300">
              {movie.duration}
            </span>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold">Sinopsis</h2>
            <p className="mt-3 leading-8 text-zinc-400">{movie.synopsis}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold">Director</h2>
            <p className="mt-2 text-zinc-400">{movie.director}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="bg-yellow-400 font-bold text-black hover:bg-yellow-500">
              <Link to="/movies">Volver al catálogo</Link>
            </Button>

            <Button
              variant="outline"
              className="border-zinc-700 bg-transparent text-white hover:bg-zinc-900"
            >
              Comprar entrada
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}