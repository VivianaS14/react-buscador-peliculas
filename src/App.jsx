import { useEffect, useRef, useState } from "react";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ query });
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery === "") {
      setError("No se puede buscar uns película vacía");
      return;
    }

    if (newQuery.match(/^d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (newQuery.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="query"
            value={query}
            onChange={handleChange}
            placeholder="Avengers, Star Wars, The Matrix"
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
