export type Movie = {
  id: number
  title: string
  rating: number
  genre: string
  year: number
  duration: string
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Interstellar",
    rating: 9.0,
    genre: "Ciencia ficción",
    year: 2014,
    duration: "2h 49min",
  },
  {
    id: 2,
    title: "The Batman",
    rating: 8.5,
    genre: "Acción",
    year: 2022,
    duration: "2h 56min",
  },
  {
    id: 3,
    title: "Avengers: Endgame",
    rating: 8.8,
    genre: "Superhéroes",
    year: 2019,
    duration: "3h 1min",
  },
]