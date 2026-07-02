import { Link } from "react-router-dom"
import { useMovies } from "../services/movie-service"

type TmdbMovie = {
  id: number
  title: string
  poster_path: string | null
  vote_average: number
  release_date: string
}

const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

export default function MoviesApiPage() {
  const { data, isLoading, isError } = useMovies()

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090b] text-white">
        Cargando cartelera...
      </main>
    )
  }

  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08090b] text-white">
        No pudimos cargar la cartelera. Inténtalo nuevamente.
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#08090b] px-6 py-14 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Estrenos y populares
          </p>

          <h1 className="text-5xl font-black">Películas en cartelera</h1>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-400">
            Explora los títulos más populares del momento, revisa sus
            calificaciones y descubre nuevas historias para disfrutar en la
            pantalla grande.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((movie: TmdbMovie) => (
            <Link key={movie.id} to={`/movies-api/${movie.id}`}>
              <article className="group overflow-hidden rounded-2xl border border-zinc-800 bg-[#18191d] transition hover:-translate-y-1 hover:border-yellow-400">
                <div className="aspect-[2/3] bg-zinc-900">
                  {movie.poster_path ? (
                    <img
                      src={`${IMAGE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl">
                      🎬
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h2 className="line-clamp-2 text-lg font-bold text-white">
                    {movie.title}
                  </h2>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-bold text-yellow-400">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </span>

                    <span className="text-zinc-400">
                      {movie.release_date || "Próximamente"}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}