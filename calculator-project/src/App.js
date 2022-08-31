import { Formik, Form } from "formik";
import Input from "./components/Input.js";
import Button from "./components/Button.js";
import Container from "./components/Container.js";
import Section from "./components/Section.js";

function App() {
  const handleSubmit = () => {};
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: "",
            contribution: "",
            years: "",
            rate: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Depósito Inicial" />
            <Input name="contribution" label="Contibución Anual" />
            <Input name="years" label="Años" />
            <Input name="rate" label="Interés Estimado" />
            <Button>Calcular</Button>
          </Form>
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
