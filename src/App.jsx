import "./App.css";
import withResults from "./mocks/with-results.json";
//import withoutResults from "./mocks/no-results.json";
import { Movies } from "./components/movies";

function App() {
  const movies = withResults.Search;

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
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
