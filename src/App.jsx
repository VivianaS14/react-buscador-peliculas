import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();

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
