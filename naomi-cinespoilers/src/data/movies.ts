export type Movie = {
  id: number
  title: string
  rating: number
  genre: string
  year: number
  duration: string
  director: string
  synopsis: string
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    rating: 9.0,
    genre: "Ciencia ficción",
    year: 2014,
    duration: "2h 49min",
    director: "Christopher Nolan",
    synopsis:
      "Un grupo de exploradores viaja más allá de nuestra galaxia para encontrar un nuevo hogar para la humanidad, enfrentándose al tiempo, la distancia y los límites del amor.",
  },
  {
    id: 2,
    title: "The Batman",
    rating: 8.5,
    genre: "Acción",
    year: 2022,
    duration: "2h 56min",
    director: "Matt Reeves",
    synopsis:
      "Batman investiga una serie de crímenes en Gotham mientras descubre secretos que conectan la corrupción de la ciudad con su propia familia.",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    rating: 8.8,
    genre: "Superhéroes",
    year: 2019,
    duration: "3h 1min",
    director: "Anthony Russo, Joe Russo",
    synopsis:
      "Después de una derrota devastadora, los Vengadores restantes se reúnen para intentar revertir el daño causado y enfrentar una última batalla por el destino del universo.",
  },
]