import { useQuery } from "@tanstack/react-query"
import api from "./api"

export async function getMovies() {
  const response = await api.get("/movie/popular")
  return response.data.results
}

export async function getMovieById(id: string | undefined) {
  const response = await api.get(`/movie/${id}`)
  return response.data
}

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  })
}

export function useMovieById(id: string | undefined) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    enabled: Boolean(id),
  })
}