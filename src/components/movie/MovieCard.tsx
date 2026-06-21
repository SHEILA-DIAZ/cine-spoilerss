import type { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
      <h2 className="text-2xl font-semibold mb-2">
        {movie.title}
      </h2>

      <p className="text-yellow-400 mb-2">
        ⭐ {movie.rating}
      </p>

      <span className="text-zinc-400">
        {movie.genre}
      </span>
    </div>
  )
}

export default MovieCard