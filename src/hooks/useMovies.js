import withResults from "../mocks/with-results.json";
//import withoutResults from "../mocks/no-results.json";

export function useMovies() {
  const movies = withResults.Search;

  // evitar que un componente utilice el contrato de la API
  // si la API llega a cambiar es mucho mas accesible cambiarlo
  // aquí que en cada componente que se use
  const mappedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
