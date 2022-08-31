import userFormulario from "./hooks/useFormulario.js";

function App() {
  const [formulario, handleChange] = userFormulario({ name: "" });

  console.log(formulario);
  return (
    <form>
      <input
        name="name"
        placeholder="Nombre"
        value={formulario.name}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
