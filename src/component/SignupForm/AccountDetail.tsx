import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { Card, Button } from "@material-ui/core";

interface vlaues {
  FullName: string;
  Phone: string;
  Address: string;
  country: string;
  city: string;
  gender: string;
}

// const initialValues: vlaues = {
//   FullName: "",
//   Phone: "",
//   Address: "",
//   country: "",
//   city: "",
//   gender: "",
// };
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerSchema = yup.object({
  FullName: yup
    .string()
    .max(25, "Not More Than 25 character")
    .required("You must be entered your full Name")
    .min(4, "at least 5 character or more"),
  Phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("You must be entered phone number"),
  Address: yup.string().required("You must be entered yout Address"),
  country: yup.string().required("You must be entered your country Name"),
  city: yup.string().required("You must be entered your city Name"),
});

const AccountDetail: React.FC<any> = ({ submit, setFormValue, prevValue }) => {
  const forSubmit = (values: vlaues) => {
    submit(2);

    setFormValue({ ...values, ...prevValue });
  };

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
                    name="FullName"
                    color="secondary"
                    as={TextField}
                    label="Full Name"
                    fullWidth
                    helperText={<ErrorMessage name="FullName" />}
                  />
                </div>
                <div>
                  <Field
                    name="Phone"
                    color="secondary"
                    as={TextField}
                    label="Phone Number"
                    placeholder="0342xxxxxxx"
                    type="number"
                    fullWidth
                    helperText={<ErrorMessage name="Phone" />}
                  />
                </div>
                <div>
                  <Field
                    color="secondary"
                    name="Address"
                    as={TextField}
                    label="Address"
                    fullWidth
                    helperText={<ErrorMessage name="Address" />}
                  />
                </div>
                <div>
                  <Field
                    color="secondary"
                    name="country"
                    as={TextField}
                    label="Country"
                    fullWidth
                    helperText={<ErrorMessage name="country" />}
                  />
                </div>
                <div>
                  <Field
                    color="secondary"
                    name="city"
                    as={TextField}
                    label="City"
                    fullWidth
                    helperText={<ErrorMessage name="city" />}
                  />
                </div>
                <div
                  style={{
                    paddingTop: "25px",
                    paddingBottom: "25px",
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  <label style={{ color: "#ffaaa4" }}>Gender :</label>
                  <label>
                    <Field type="radio" name="picked" value="Female" />
                    Female
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="Male" />
                    Male
                  </label>
                </div>

                <Button
                  variant="outlined"
                  style={{ margin: "10px" }}
                  color="secondary"
                  onClick={() => submit(0)}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
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

export default AccountDetail;
