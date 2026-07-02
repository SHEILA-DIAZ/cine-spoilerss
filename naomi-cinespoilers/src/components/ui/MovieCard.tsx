import { Link } from "react-router-dom"
import type { Movie } from "../../data/movies"

type MovieCardProps = {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-[#18191d] p-6 text-white transition hover:-translate-y-1 hover:border-yellow-400">
      <div className="mb-5 flex h-28 items-center justify-center rounded-xl bg-black text-5xl">
        🍿
      </div>

      <h2 className="text-xl font-bold">{movie.title}</h2>

      <p className="mt-2 text-sm text-zinc-400">
        {movie.genre} · {movie.year} · {movie.duration}
      </p>

      <p className="mt-4 text-sm font-bold text-yellow-400">
        ⭐ {movie.rating}
      </p>

      <Link
        to={`/movies/${movie.id}`}
        className="mt-5 inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black hover:bg-yellow-500"
      >
        Ver detalle
      </Link>
    </article>
  )
}