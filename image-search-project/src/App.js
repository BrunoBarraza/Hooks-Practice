import { Formik, Form, Field } from "formik";
import { useState } from "react";
import "./header.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);
  return (
    <section>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            // call Unplash API
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID 4HP8s7FcS6MlIrMVIgZn0UkaRE9YOx0fDFmq6FRgn5k",
                },
              }
            );
            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </section>
  );
};

export default App;
