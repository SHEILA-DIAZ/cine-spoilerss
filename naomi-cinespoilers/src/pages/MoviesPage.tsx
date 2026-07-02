import MovieCard from "../components/ui/MovieCard"
import { movies } from "../data/movies"

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-6 py-14 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
  Ahora en cartelera
</p>

<h1 className="text-5xl font-black">
  Catálogo de Películas
</h1>

<p className="mx-auto mt-4 max-w-2xl text-zinc-400 leading-8">
  Descubre los estrenos más esperados, los clásicos que marcaron generaciones
  y las películas más populares del momento. Encuentra tu próxima función y
  vive una experiencia única en la pantalla grande.
</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}