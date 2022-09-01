import { Routes, Route, Link, Outlet } from "react-router-dom";
// Router v6 has updated, 'Switch' to 'Routes' and can only render Components using the element tag, as shown below.
// Nested Routes has updated, you need to nest the route within 'Routes' then import 'Outlet' on the parent component to show the JSX.

const Inicio = () => {
  return <h1>Incio</h1>;
};

const Proyecto1 = () => {
  return <h2>Proyecto 1</h2>;
};

const Proyecto2 = () => {
  return <h2>Proyecto 2</h2>;
};

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={"projecto-1"}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={"projecto-2"}>Proyecto 2</Link>
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
            <Route path={"projecto-1"} element={<Proyecto1 />} />
            <Route path={"projecto-2"} element={<Proyecto2 />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
