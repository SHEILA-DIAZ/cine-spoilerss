import axios from "axios"

console.log(import.meta.env.VITE_TMDB_API_KEY)

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "es-PE",
  },
})