import { useMovies } from "../services/movie-service"

type Movie = {
  id: number
  title: string
}

export default function MoviesApiPage() {
  const { data, isLoading, isError } = useMovies()

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#08090b] p-8 text-white">
        Cargando películas...
      </main>
    )
  }

  if (isError) {
    return (
      <main className="min-h-screen bg-[#08090b] p-8 text-white">
        Error al obtener la información.
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#08090b] p-8 text-white">
      <h1 className="mb-8 text-3xl font-black">
        🎬 Películas desde API
      </h1>

      <div className="space-y-3">
        {data?.map((movie: Movie) => (
          <div
            key={movie.id}
            className="rounded-lg bg-[#18191d] px-5 py-4"
          >
            {movie.title}
          </div>
        ))}
      </div>
    </main>
  )
}