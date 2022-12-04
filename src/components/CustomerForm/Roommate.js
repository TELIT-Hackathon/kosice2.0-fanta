import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

function Roommate({ setNextStep }) {

  const schema = Yup.object().shape({
    ageFrom: Yup.number()
      .positive()
      .integer("Musí byť celé číslo")
      .max(99999999, "Maximálna cena je 99999999€"),
    ageTo: Yup.number()
      .integer("Musí byť celé číslo")
      .max(99999999, "Maximálna cena je 99999999€")
      .when('ageFrom', (ageFrom) => {
        if (ageFrom) {
          return Yup.number()
            .min(ageFrom, 'Maximálna vek musí byť vyšší ako minimálny vek')
        }
      }),
  });

  return (
    <Formik
      initialValues={{
        roommate: false,
        sex: '',
        ageFrom: '',
        ageTo: ''
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        setNextStep(values)
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form className='form'>

          <div className='form-container mb-4'>
            <div className='form-body'>

              <div className="row">
                <div className="form-checkbox">
                  <Field type="checkbox" name="elevator" />
                  <label className="form-check-label">
                    Viac spolubývajúcich
                  </label>
                </div>

              </div>

              <div className='row '>
                <div className='col'>
                  <Field className={`form-control form-select input-border`} name="sex" as="select" >
                    <option value="" label="Pohlavie"></option>
                    <option value="m">Muž</option>
                    <option value="f">Žena</option>
                  </Field>

                </div>
                <div className="col"> </div>
              </div>

              <label>Vek</label>
              <div className='row '>
                <div className='col'>
                  <Field className={`form-control input-border ${errors.ageFrom ? "is-invalid" : ""}`} name="ageFrom" type="number" placeholder="Od" />
                  <div className="invalid-feedback">{errors.ageFrom}</div>
                </div>

                <div className='col'>
                  <Field className={`form-control input-border ${errors.ageTo ? "is-invalid" : ""}`} name="ageTo" type="number" placeholder="Do" />
                  <div className="invalid-feedback">{errors.ageTo}</div>
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

export default Roommate;