import { useMovies } from "../services/movie-service"

type ApiMovie = {
  id: number
  title: string
}

export default function MoviesApiPage() {
  const { data, isLoading, isError } = useMovies()

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#08090b] p-8 text-white">
        Cargando películas desde API...
      </main>
    )
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-[#08090b] p-8 text-white">
        No se pudo obtener la información desde el servicio externo.
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#08090b] p-8 text-white">
      <h1 className="mb-6 text-3xl font-black">🎬 Películas desde API</h1>

      <div className="space-y-3">
        {data?.slice(0, 10).map((movie: ApiMovie) => (
          <article
            key={movie.id}
            className="rounded-md bg-[#18191d] px-4 py-3 text-sm"
          >
            {movie.title}
          </article>
        ))}
      </div>
    </main>
  )
}