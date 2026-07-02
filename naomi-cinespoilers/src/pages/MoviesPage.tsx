export default function MoviesPage() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 9.0,
    },
    {
      id: 2,
      title: "The Batman",
      rating: 8.5,
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      rating: 8.8,
    },
  ]

  return (
    <main className="min-h-screen bg-[#08090b] py-8">
      <section className="mx-auto w-full max-w-[430px] px-4">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          🎥 Catálogo de Películas
        </h1>

        <div className="space-y-5">
          {movies.map((movie) => (
            <article
              key={movie.id}
              className="rounded-lg border border-zinc-800 bg-[#1c1c20] p-6"
            >
              <h2 className="text-xl font-bold text-white">
                {movie.title}
              </h2>

              <p className="mt-3 text-sm font-bold text-yellow-400">
                ⭐ {movie.rating}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}