import { useParams } from "react-router-dom"
import { movies } from "@/services/movie.service"

function MovieDetailPage() {
  const { id } = useParams()

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  )

  if (!movie) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Película no encontrada
        </h1>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 max-w-2xl w-full">
        <h1 className="text-5xl font-bold mb-4">
          🎬 {movie.title}
        </h1>

        <p className="text-yellow-400 text-xl mb-3">
          ⭐ {movie.rating}
        </p>

        <p className="text-zinc-400 mb-6">
          🎭 {movie.genre}
        </p>

        <p className="text-lg leading-relaxed">
          {movie.description}
        </p>
      </div>
    </div>
  )
}

export default MovieDetailPage