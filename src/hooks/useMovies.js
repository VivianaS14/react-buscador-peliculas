import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = async () => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // ordena películas por nombre
  // useMemo -> memoriza un valor para no tener que volverlo a calcular dependiendo de unas dependencias
  const sortMovies = useMemo(
    // aunque cambie el search, al no ser parte de sus dependencias no necesita la función del memo
    () =>
      sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies,
    [sort, movies]
  );

  return { movies: sortMovies, getMovies, loading, error };
}
