import { createContext, useContext } from "react";

const Context = createContext("valor por defecto");
const Context2 = createContext("valor por defecto 2");

const Provider = ({ children }) => {
  return <Context.Provider value={"mi valor"}>{children}</Context.Provider>;
};

const Contenido = () => {
  const ctx = useContext(Context);
  return <div>{ctx}</div>;
};

const Contenido2 = () => {
  const ctx = useContext(Context2);
  return <div>{ctx}</div>;
};

function App() {
  return (
    <Provider>
      <Contenido />
      <Contenido2 />
    </Provider>
  );
}

export default App;
