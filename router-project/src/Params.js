import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";

const Inicio = () => {
  return <h1>Incio</h1>;
};

// const Proyecto1 = () => {
//   return <h2>Proyecto 1</h2>;
// };

// const Proyecto2 = () => {
//   return <h2>Proyecto 2</h2>;
// };

const Proyecto = () => {
  let params = useParams();
  return <h2>Proyecto {params.proyecto_id}</h2>;
};

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={"proyecto-1"}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={"proyecto-2"}>Proyecto 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
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
          <Route path="portafolio" element={<Portafolio />}>
            <Route path={":proyecto_id"} element={<Proyecto />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
