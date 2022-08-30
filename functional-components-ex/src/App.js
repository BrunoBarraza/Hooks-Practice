import { useState } from "react";

// Hooks rules:
// Hooks cannot be called whitin loops. (if, while, etc.)
// Hooks need to be on the highest level of the function. (at the begging of the component)
// Hooks can only be called in React Components.
// Hooks can only be called in Custom Hooks.
// TIP: When creating a custom Hook, the naming should start with 'use'.

const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default App;
