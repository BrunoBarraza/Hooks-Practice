import { Routes, Route, Link } from "react-router-dom";
// Router v6 has updated 'Switch' to 'Routes' and can only render Components using the element tag, as shown below1.

const Inicio = () => {
  return <h1>Incio</h1>;
};

const Portafolio = () => {
  return <h1>Portafolio</h1>;
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
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
