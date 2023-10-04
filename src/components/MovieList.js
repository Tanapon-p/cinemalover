import { useEffect, useState } from "react";
import { Card } from "./Card";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=67e88e6117b94b3a79e8bff832dd6655&language=en-US&page=1"
      );
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovie();
  }, []);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section>
    </main>
  );
};
