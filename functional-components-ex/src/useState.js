import { useState } from "react";

// Hooks rules:
// Hooks cannot be called whitin loops. (if, while, etc.)
// Hooks need to be on the highest level of the function. (at the begging of the component)
// Hooks can only be called in React Components.
// Hooks can only be called in Custom Hooks.
// TIP: When creating a custom Hook, the naming should start with 'use'.

// Class based component
// class App extends Component {
//   state = { contador: 0 };
//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 });
//   };
//   render() {
//     return (
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     );
//   }
// }

// Custom Hook
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };

  return [contador, incrementar];
};

// Functional Component
const App = () => {
  const [contador, incrementar] = useContador(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default App;
