import { useMoviesApi } from "@/hooks/useMoviesApi"

function MoviesApiPage() {
  const { data, isLoading } = useMoviesApi()

  if (isLoading) {
    return <h1>Cargando...</h1>
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        🎬 Películas desde API
      </h1>

      <div className="grid gap-4">
        {data?.slice(0, 10).map((movie: any) => (
          <div
            key={movie.id}
            className="bg-zinc-900 p-4 rounded-lg"
          >
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesApiPage