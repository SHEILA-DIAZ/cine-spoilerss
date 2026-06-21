import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "@/services/movieDetailApi.service"

export function useMovieDetail(id: string) {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => getMovieById(id),
    enabled: !!id,
  })
}