import { Routes, Route, Link, Navigate } from "react-router-dom";
// Navigate replaces Redirect using 'replace' and 'to' to redirect to an specificed route based on loggedIn.

const Inicio = () => {
  return <h1>Incio</h1>;
};

const Perfil = () => {
  return <h1>Perfil</h1>;
};

const Portafolio = () => {
  const loggedIn = true;

  if (!loggedIn) {
    // Changed on React-Router v6. Instead of using 'push', just don't include 'replace'.
    return <Navigate replace to="/" />;
  }

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
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          {/* !! ASK ABOUT THIS 'Redirect from='/' to='/inicio' */}
          <Route exact path="/" element={<Inicio />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="portafolio" element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
