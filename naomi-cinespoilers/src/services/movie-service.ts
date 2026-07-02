import { useQuery } from "@tanstack/react-query"
import api from "./api"

const getMovies = async () => {
  const response = await api.get("/posts")
  return response.data
}

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  })
}