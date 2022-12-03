import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

function Location() {
  return (
    <Formik
      initialValues={{ street: '', type: "", location: "" }}
      // validationSchema={Yup.object({
      //   firstName: Yup.string()
      //     .max(15, 'Must be 15 characters or less')
      //     .required('Required'),
      //   lastName: Yup.string()
      //     .max(20, 'Must be 20 characters or less')
      //     .required('Required'),
      //   email: Yup.string().email('Invalid email address').required('Required'),
      // })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className='form'>
        <div className="form-group mb-2">
          <Field className="form-control input " name="street" type="text" placeholder="Ulica" />
          <ErrorMessage name="firstName" />
        </div>
        <div class="input-group mb-2">
          <Field className="form-control input" name="type" as="select" placeholder="Typ" >
            <option value="" label="Typ"></option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          {/* <ErrorMessage name="lastName" /> */}

          <Field className="form-control input" name="location" as="select" placeholder="Lokalita" >
            <option value="" label="Typ"></option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          {/* <ErrorMessage name="email" /> */}
        </div>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </Form>
    </Formik>
  );
}

export default Location;
