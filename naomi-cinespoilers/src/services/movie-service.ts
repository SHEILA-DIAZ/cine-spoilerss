import { useQuery } from "@tanstack/react-query"
import api from "./api"

export async function getMovies() {
  const response = await api.get("/movie/popular")
  return response.data.results
}

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  })
}