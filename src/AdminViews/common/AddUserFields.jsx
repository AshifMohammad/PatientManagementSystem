import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { roles } from "@/_services/mockData/mockData";
import * as Yup from "yup";

import { accountService, alertService } from "@/_services";

function AddUserFields({ history, userValues, onSubmit }) {
  const [user, setUser] = useState(userValues);
  const initialValues = user;

  const handleOnFieldChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email("Email is invalid"),
    companyName: Yup.string().required("Please enter the Company Name "),
    role: Yup.string().required("Please select the roles to create a user.")
  });

  // function onSubmit(fields, { setStatus, setSubmitting }) {
  //     console.log(fields,"---submit ")
  //   // setStatus();
  //   // accountService
  //   //   .register(fields)
  //   //   .then(() => {
  //   //     alertService.success(
  //   //       "Registration successful, please check your email for verification instructions",
  //   //       { keepAfterRouteChange: true }
  //   //     );
  //   //     history.push("login");
  //   //   })
  //   //   .catch((error) => {
  //   //     setSubmitting(false);
  //   //     alertService.error(error);
  //   //   });
  // }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form onSubmit={onSubmit}>
          <h3 className="card-header">Add a user</h3>
          <div className="card-body">
            <div className="form-row">
              <div className="form-group col">
                <label>Title</label>
                <Field
                  name="title"
                  as="select"
                  className={
                    "form-control" +
                    (errors.title && touched.title ? " is-invalid" : "")
                  }
                >
                  <option value=""></option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Ms">Ms</option>
                </Field>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-5">
                <label>First Name</label>
                <Field
                  value={user.firstName}
                  onChange={e => handleOnFieldChange(e)}
                  name="firstName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.firstName && touched.firstName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group col-5">
                <label>Last Name</label>
                <Field
                  onChange={e => {
                    handleOnFieldChange(e);
                  }}
                  value={user.lastName}
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <Field
                name="email"
                value={user.emailAddress}
                onChange={e => {
                  handleOnFieldChange(e);
                }}
                type="text"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <Field
                value={user.companyName}
                onChange={e => handleOnFieldChange(e)}
                name="companyName"
                type="text"
                className={
                  "form-control" +
                  (errors.companyName && touched.companyName
                    ? " is-invalid"
                    : "")
                }
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group col">
              <label>Role Assignment</label>
              <Field
                name="role"
                as="select"
                className={
                  "form-control" +
                  (errors.role && touched.role ? " is-invalid" : "")
                }
              >
                {roles &&
                  roles.map(role => {
                    return (
                      <option value={role.permission}>{role.roleName}</option>
                    );
                  })}
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="invalid-feedback"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export { AddUserFields };
