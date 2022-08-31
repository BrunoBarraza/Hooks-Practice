import { useState } from "react";

import Card from "./components/Card.js";
import Container from "./components/Container.js";
import UserForm from "./components/UserForm.js";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };
  console.log(usuarios);
  return (
    <section style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit}></UserForm>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((user) => (
              <li
                key={user.email}
              >{`${user.name} ${user.lastname}: ${user.email} `}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}

export default App;
