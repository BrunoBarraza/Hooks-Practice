import { Routes, Route, Link } from "react-router-dom";

const Inicio = () => {
  return <h1>Incio</h1>;
};

const Perfil = () => {
  return <h1>Perfil</h1>;
};

const NotFound = () => {
  return <p>404: Ruta no Encontrada</p>;
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
