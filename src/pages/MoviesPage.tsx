import MovieCard from "@/components/movie/MovieCard"
import { useMovies } from "@/hooks/useMovies"

function MoviesPage() {
  const { data: movies = [] } = useMovies()

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-2 text-center">
        🎥 Catálogo de Películas
      </h1>

      <p className="text-zinc-400 text-center mb-10">
        Explora las películas disponibles y elige tu próxima función.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesPage