import { useState } from "react";
//import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/no-results.json";

export function useMovies({ search }) {
  const [responserMovies, setResponseMovies] = useState([]);

  const movies = responserMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      // setResponseMovies(withResults);
      fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_API_KEY
        }&s=${search}`
      )
        .then((response) => response.json())
        .then((json) => setResponseMovies(json))
        .catch((error) => console.error(error));
    } else {
      setResponseMovies(withoutResults);
    }
  };

  return { movies: mappedMovies, getMovies };
}
