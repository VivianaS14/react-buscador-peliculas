import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import "./App.css";

function App() {
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ search });
  };

  const handleChange = (e) => {
    updateSearch(e.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="query"
            value={search}
            onChange={handleChange}
            placeholder="Avengers, Star Wars, The Matrix"
            style={{
              border: "1px solid",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
