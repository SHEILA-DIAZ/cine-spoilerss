const movies = [
  {
    id: 1,
    title: "Interstellar",
    rating: "⭐ 9.0",
  },
  {
    id: 2,
    title: "The Batman",
    rating: "⭐ 8.5",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    rating: "⭐ 8.8",
  },
]

function MoviesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center">
        🎥 Catálogo de Películas
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {movie.title}
            </h2>

            <p className="text-yellow-400">
              {movie.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoviesPage