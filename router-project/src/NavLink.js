import { Routes, Route, NavLink, Outlet, useParams } from "react-router-dom";

const Inicio = () => {
  return <h1>Incio</h1>;
};

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
          <NavLink
            // This changes the default behavior of the active class name. Replaces 'activeClassName'.
            className={({ isActive }) => (isActive ? "activado" : '')}
            to={"proyecto-1"}
          >
            Proyecto 1
          </NavLink>
        </li>
        <li>
          <NavLink
            // This changes the default behavior of the active style. Replaces 'activeStyle'
            style={({ isActive }) => ({ fontSize: isActive ? 20 : '' })}
            to={"proyecto-2"}
          >
            Proyecto 2
          </NavLink>
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
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/portafolio">Portafolio</NavLink>
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
