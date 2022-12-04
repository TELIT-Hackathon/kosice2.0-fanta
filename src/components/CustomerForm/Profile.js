import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Profile({ setNextStep }) {

  const schema = Yup.object().shape({
    firstName: Yup.string()
      .required('Povinné pole'),
    lastName: Yup.string()
      .required('Povinné pole'),
    age: Yup.number()
      .integer("Musí byť celé číslo")
      .min(15, "Minimálny vek je 15 rokov")
      .max(150, "Maximálny vek je 150 rokov")
      .required('Povinné pole'),
    description: Yup.string()
      .required('Povinné pole')
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age: '',
        description: ''

      }}
      validationSchema={schema}
      onSubmit={(values) => {
        setNextStep(values)
      }}
    >
      {({ errors, touched, isValidating }) => (

        <Form className='form'>

          <div className='form-container mb-4'>
            <div className='form-body'>

              <label>Meno priezvisko</label>
              <div className='row '>
                <div className='col'>
                  <Field className={`form-control input-border ${errors.firstName ? "is-invalid" : ""}`} name="firstName" type="text" placeholder="Meno" />
                  <div className="invalid-feedback">{errors.firstName}</div>
                </div>
                <div className='col'>
                  <Field className={`form-control input-border ${errors.lastName ? "is-invalid" : ""}`} name="lastName" type="text" placeholder="Priezvisko" />
                  <div className="invalid-feedback">{errors.lastName}</div>
                </div>
              </div>

              <div className='row '>
                <div className='col'>
                  <Field className={`form-control input-border ${errors.age ? "is-invalid" : ""}`} name="age" type="number" placeholder="Vek" />
                  <div className="invalid-feedback">{errors.age}</div>
                </div>
              </div>

              <div className='row '>
                <div className='col'>
                  <Field className={`form-control input-border ${errors.description ? "is-invalid" : ""}`} name="description" type="text" placeholder="Popis" />
                  <div className="invalid-feedback">{errors.description}</div>
                </div>
              </div>

            </div>
          </div>
          <button type="submit" className="btn next btn-primary">Ďalej</button>
        </Form>
      )}
    </Formik>
  );
}

export default Profile;
