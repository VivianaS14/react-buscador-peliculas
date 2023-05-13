import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  // useCallback -> usa useMemo por debajo pero memoriza solo funciones, solo simplifica la sintaxis para no usar un callback
  const getMovies = useCallback(
    // solo se genera una vez la función
    // y se va a crear solamente por el search del parámetro
    async ({ search }) => {
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
    },
    []
  );

  // useMemo -> memoriza un valor para no tener que volverlo a calcular dependiendo de unas dependencias
  // ordena películas por nombre
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
