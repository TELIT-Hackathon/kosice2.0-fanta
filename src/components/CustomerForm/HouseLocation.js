import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function HouseLocation({ setNextStep }) {

  const schema = Yup.object().shape({
    type: Yup.string()
      .required('Povinné pole'),
    location: Yup.string()
      .required('Povinné pole'),
    priceFrom: Yup.number()
      .integer("Musí byť celé číslo")
      .max(99999999, "Maximálna cena je 99999999€"),
    priceTo: Yup.number()
      .integer("Musí byť celé číslo")
      .max(99999999, "Maximálna cena je 99999999€")
      .when('priceFrom', (priceFrom) => {
        if (priceFrom) {
          return Yup.number()
            .min(priceFrom, 'Maximálna cena musí byť vyššia ako minimálna cena')
        }
      }),
  });


  return (
    <Formik
      initialValues={{
        type: '',
        location: '',
        priceFrom: '',
        priceTo: ''
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

              <div className='row '>
                <div className='col'>
                  <Field className={`form-control form-select input-border ${errors.type ? "is-invalid" : ""}`} name="type" as="select">
                    <option disabled value="" label="Typ"></option>
                    <option value="dom">Dom</option>
                    <option value="byt">Byt</option>
                    <option value="Všetko">Všetko</option>
                  </Field>
                  <div className="invalid-feedback">{errors.type}</div>
                </div>

                <div className='col'>
                  <Field className={`form-control form-select input-border ${errors.location ? "is-invalid" : ""}`} name="location" as="select" placeholder="Lokalita" >
                    <option disabled value="" label="Lokalita"></option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                  </Field>
                  <div className="invalid-feedback">{errors.location}</div>
                </div>
              </div>

              <label>Cena prenájmu</label>
              <div className='row '>
                <div className='col'>
                  <Field className={`form-control input-border ${errors.priceFrom ? "is-invalid" : ""}`} name="priceFrom" type="number" placeholder="Od" />
                  <div className="invalid-feedback">{errors.priceFrom}</div>
                </div>

                <div className='col'>
                  <Field className={`form-control input-border ${errors.priceTo ? "is-invalid" : ""}`} name="priceTo" type="number" placeholder="Do" />
                  <div className="invalid-feedback">{errors.priceTo}</div>
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

export default HouseLocation;
