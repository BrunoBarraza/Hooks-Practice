import { useState } from "react";
import userFormulario from "./hooks/useFormulario.js";
import Input from "./components/Input.js";
import Card from "./components/Card.js";
import Container from "./components/Container.js";
import Button from "./components/Button.js";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = userFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset()
  };

  console.log(formulario, usuarios);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
            <Input
              label="Nombre"
              name="name"
              value={formulario.name}
              onChange={handleChange}
            />
            <Input
              label="Apellido"
              name="lastname"
              value={formulario.lastname}
              onChange={handleChange}
            />
            <Input
              label="Correo"
              name="email"
              value={formulario.email}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
