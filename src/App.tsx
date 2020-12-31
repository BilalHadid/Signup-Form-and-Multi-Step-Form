import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

interface vlaues {
  name: string;
}

const initialValues: vlaues = {
  name: "",
};

const registerSchema = yup.object({
  name: yup.string().min(2, "atlest 2 charachter").required("Name is Required"),
});

function App() {
  const forSubmit = (values: vlaues) => {
    alert(JSON.stringify(values));
  };
  return (
    <div className="App">
      <h1>Register</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={forSubmit}
        validationSchema={registerSchema}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div>
                <label>Name</label>
                <Field name="name" as="input" />
                <ErrorMessage name="name" />
              </div>
              <button disabled={!dirty || !isValid} type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
