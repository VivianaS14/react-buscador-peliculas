import "./App.css";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas</h1>
        <form className="form">
          <input type="search" placeholder="Avengers, Star Wars, The Matrix" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>Aquí iran los resultados</main>
    </div>
  );
}

export default App;
