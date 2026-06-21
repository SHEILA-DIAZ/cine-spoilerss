import { api } from "./api"

export async function getMovies() {
  const response = await api.get("/movie/popular")
  return response.data.results
}