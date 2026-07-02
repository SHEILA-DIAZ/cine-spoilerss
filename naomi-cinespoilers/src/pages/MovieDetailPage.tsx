import { Link, useParams } from "react-router-dom"
import { Button } from "../components/ui/button"
import { useMovieById } from "../services/movie-service"

const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
const BACKDROP_URL = "https://image.tmdb.org/t/p/original"

export default function MovieDetailPage() {
  const { id } = useParams()
  const { data: movie, isLoading, isError } = useMovieById(id)

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090b] text-white">
        Cargando detalle de película...
      </main>
    )
  }

  if (isError || !movie) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090b] text-white">
        No pudimos cargar el detalle de esta película.
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      <section
        className="relative min-h-screen bg-cover bg-center px-6 py-14"
        style={{
          backgroundImage: movie.backdrop_path
            ? `linear-gradient(to right, rgba(8,9,11,0.95), rgba(8,9,11,0.75)), url(${BACKDROP_URL}${movie.backdrop_path})`
            : "none",
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[340px_1fr]">
          <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#18191d]">
            {movie.poster_path ? (
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-[500px] items-center justify-center text-7xl">
                🎬
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Detalle de película
            </p>

            <h1 className="text-5xl font-black md:text-7xl">
              {movie.title}
            </h1>

            <p className="mt-4 text-xl text-zinc-300">
              {movie.tagline || "Una historia para disfrutar en pantalla grande."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-yellow-400 px-4 py-2 font-bold text-black">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>

              <span className="rounded-full border border-zinc-600 px-4 py-2 text-zinc-200">
                {movie.release_date || "Próximamente"}
              </span>

              <span className="rounded-full border border-zinc-600 px-4 py-2 text-zinc-200">
                {movie.runtime ? `${movie.runtime} min` : "Duración no disponible"}
              </span>

              {movie.genres?.slice(0, 2).map((genre: { id: number; name: string }) => (
                <span
                  key={genre.id}
                  className="rounded-full border border-zinc-600 px-4 py-2 text-zinc-200"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="mt-8 max-w-3xl">
              <h2 className="text-2xl font-bold">Sinopsis</h2>
              <p className="mt-3 leading-8 text-zinc-300">
                {movie.overview || "La sinopsis aún no está disponible."}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild className="bg-yellow-400 font-bold text-black hover:bg-yellow-500">
                <Link to="/movies-api">Volver a cartelera</Link>
              </Button>

              <Button
                variant="outline"
                className="border-zinc-600 bg-black/20 text-white hover:bg-zinc-900"
              >
                Comprar entrada
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}