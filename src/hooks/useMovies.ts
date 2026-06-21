import { useQuery } from "@tanstack/react-query"
import { movies } from "@/services/movie.service"

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => movies,
  })
}