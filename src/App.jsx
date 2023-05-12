import { useRef } from "react";
import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies } = useMovies();
  // useRef() te permite crear una referencia mutable que PERSISTE durante todo el ciclo de vida de tu componente (entre renderizados)
  // util para guardar cualquier valor que puedas mutar, que cada vez que cambia NO se renderiza/dispara otra vez el componente
  // util para guardar referencias del DOM
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    console.log(value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input ref={inputRef} placeholder="Avengers, Star Wars, The Matrix" />
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
