export default function HomePage() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
          E-commerce de tickets de cine
        </p>

        <h2 className="text-5xl font-black tracking-tight md:text-7xl">
          Vive el cine con CineSpoilerS
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Explora películas, revisa su información y prepárate para comprar tus entradas favoritas.
        </p>
      </div>
    </section>
  )
}