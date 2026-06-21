function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        🎬 Cine Spoilerss
      </h1>

      <p className="text-xl text-gray-300 text-center max-w-2xl mb-8">
        Descubre las mejores películas del momento y encuentra tu próxima aventura cinematográfica.
      </p>

      <a
        href="/movies"
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
      >
        Ver Películas
      </a>
    </div>
  )
}

export default HomePage