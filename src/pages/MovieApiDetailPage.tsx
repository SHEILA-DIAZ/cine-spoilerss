import { useParams } from "react-router-dom"
import { useMovieDetail } from "@/hooks/useMovieDetail"

function MovieApiDetailPage() {
  const { id } = useParams()

  const { data: movie, isLoading } = useMovieDetail(id ?? "")

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Cargando...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10 flex justify-center">
      <div className="max-w-4xl bg-zinc-900 rounded-xl overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w780${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full"
        />

        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">
            {movie?.title}
          </h1>

          <p className="text-yellow-400 mb-2">
            ⭐ {movie?.vote_average?.toFixed(1)}
          </p>

          <p className="text-zinc-400 mb-4">
            📅 {movie?.release_date}
          </p>

          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieApiDetailPage