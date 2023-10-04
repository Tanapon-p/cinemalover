import { Routes, Route } from "react-router-dom";
import { MovieDetail, Search, PageNotFound } from "../pages";
import { MovieList } from "../components/MovieList";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <main>
        <Routes>
          <Route path="" element={<MovieList />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/popular" element={<MovieList />} />
          <Route path="movies/top" element={<MovieList />} />
          <Route path="movies/upcoming" element={<MovieList />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};
