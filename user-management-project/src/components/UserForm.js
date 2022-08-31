import Input from "./Input.js";
import Button from "./Button.js";
import userFormulario from "../hooks/useFormulario.js";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = userFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default UserForm;
