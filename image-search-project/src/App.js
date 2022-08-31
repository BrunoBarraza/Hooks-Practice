import { Formik, Form, Field } from "formik";
import { useState } from "react";
import "./header.css";
import "./content.css";
import "./article.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const open = (url) => window.open(url);
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
      <section className="container">
        <div className="center">
          {photos.map((photo) => (
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} alt="img" />
              <p>{[photo.description, photo.alt_description].join(" - ")}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default App;
