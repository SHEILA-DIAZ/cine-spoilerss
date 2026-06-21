import { useMoviesApi } from "@/hooks/useMoviesApi"

function MoviesApiPage() {
  const { data, isLoading } = useMoviesApi()

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          🎬 Cargando películas...
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-2 text-center">
        🎬 Películas desde TMDB
      </h1>

      <p className="text-zinc-400 text-center mb-10">
        Catálogo obtenido mediante Axios + React Query + TMDB
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.slice(0, 12).map((movie: any) => (
          <div
            key={movie.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">
                {movie.title}
              </h2>

              <p className="text-yellow-400 mb-1">
                ⭐ {movie.vote_average?.toFixed(1)}
              </p>

              <p className="text-zinc-400 text-sm">
                📅 {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesApiPage