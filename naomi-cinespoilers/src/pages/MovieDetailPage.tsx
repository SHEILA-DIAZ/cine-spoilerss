import { useParams } from "react-router-dom"

export default function MovieDetailPage() {
  const { id } = useParams()

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">Detalle de Película</h2>
      <p className="mt-2 text-muted-foreground">
        Película seleccionada con ID: {id}
      </p>
    </section>
  )
}