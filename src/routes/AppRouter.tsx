import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "@/pages/HomePage"
import MoviesPage from "@/pages/MoviesPage"
import MovieDetailPage from "@/pages/MovieDetailPage"
import MoviesApiPage from "@/pages/MoviesApiPage"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
        <Route path="/movies-api" element={<MoviesApiPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter