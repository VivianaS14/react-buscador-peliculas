import { useRef } from "react";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies } = useMovies();
  // useRef() te permite crear una referencia mutable que PERSISTE durante todo el ciclo de vida de tu componente (entre renderizados)
  // util para guardar cualquier valor que puedas mutar, que cada vez que cambia NO se renderiza/dispara otra vez el componente
  // util para guardar referencias del DOM
  //const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // por ej si hay mas de 10 ref/inputs
    const { query } = Object.fromEntries(new FormData(e.target));
    // const fields = new FormData(e.target);
    // const query = fields.get("query");
    console.log(query);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="query" placeholder="Avengers, Star Wars, The Matrix" />
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
