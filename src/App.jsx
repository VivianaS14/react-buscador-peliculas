import "./App.css";
import withResults from "./mocks/with-results.json";
//import withoutResults from "./mocks/no-results.json";
import { Movies } from "./components/movies";

function App() {
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

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form">
          <input type="search" placeholder="Avengers, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
