import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Card, InputAdornment, IconButton, Button } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

interface vlaues {
  FirstName: string;
  LastName: string;
  Email: string;
  password: string;
}

// const initialValues: vlaues = {
//   FirstName: "",
//   LastName: "",
//   Email: "",
//   password: "",
// };

const registerSchema = yup.object({
  FirstName: yup
    .string()
    .min(4, "atlest 4 character")
    .required("First Name is Required")
    .max(20, "Must be 20 character or less"),

  LastName: yup
    .string()
    .min(4, "atlest 4 charachter")
    .required("Last Name is Required")
    .max(20, "Must be 20 character or less"),

  Email: yup.string().required("You Must be entered your email"),

  password: yup
    .string()
    .required("You must be entered Password")
    .min(5, "Your Password is too short")
    .max(20, "Your Password is too Long"),
});

const PersonalDetail: React.FC<any> = ({ submit, setFormValue, prevValue }) => {
  const forSubmit = (values: vlaues) => {
    submit(1);
    alert(JSON.stringify(values));
    setFormValue({ ...values, ...prevValue });
  };
  let [passw, setPassw] = useState<boolean>(false);
  return (
    <Card style={{ width: "50%", padding: "25px", marginLeft: "20%" }}>
      <div>
        <Formik
          initialValues={prevValue}
          onSubmit={forSubmit}
          validationSchema={registerSchema}
        >
          {({ dirty, isValid }) => {
            return (
              <Form>
                <div>
                  <Field
                    name="FirstName"
                    color="secondary"
                    as={TextField}
                    label="First Name"
                    fullWidth
                    helperText={<ErrorMessage name="FirstName" />}
                  />
                </div>
                <div>
                  <Field
                    name="LastName"
                    color="secondary"
                    as={TextField}
                    label="Last Name"
                    fullWidth
                    helperText={<ErrorMessage name="LastName" />}
                  />
                </div>
                <div>
                  <Field
                    name="Email"
                    as={TextField}
                    type="email"
                    color="secondary"
                    label="Email"
                    Placeholder="bilal@gmail.com"
                    fullWidth
                    helperText={<ErrorMessage name="Email" />}
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    type={!passw ? "password" : "text"}
                    as={TextField}
                    color="secondary"
                    label="password"
                    fullWidth
                    helperText={<ErrorMessage name="password" />}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={() => setPassw(true)}>
                          {passw ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </div>
                <Button
                  variant="outlined"
                  style={{ margin: "10px" }}
                  color="secondary"
                  disabled={!dirty || !isValid}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Card>
  );
};

export default PersonalDetail;
