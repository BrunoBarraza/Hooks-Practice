import { createContext, useContext } from "react";

const ContextDefault = createContext("valor por defecto");
const Context2 = createContext("valor por defecto 2");

const Provider = ({ children }) => {
  return <ContextDefault.Provider value={"mi valor"}>{children}</ContextDefault.Provider>;
};

const Contenido = () => {
  const ctx = useContext(ContextDefault);
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
