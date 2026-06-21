import { api } from "./api"

export async function getMovieById(id: string) {
  const response = await api.get(`/movie/${id}`)
  return response.data
}