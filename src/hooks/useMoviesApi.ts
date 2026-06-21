import { useQuery } from "@tanstack/react-query"
import { getMovies } from "@/services/movieApi.service"

export function useMoviesApi() {
  return useQuery({
    queryKey: ["movies-api"],
    queryFn: getMovies,
  })
}