import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

function HouseLocation({ setNextStep }) {

  return (
    <Formik
      initialValues={{
        type: '',
        location: '',
        priceFrom: '',
        priceTo: ''
      }}
      onSubmit={(values) => {
        setNextStep(values)
      }}
    >
      <Form className='form'>

        <div className='form-container mb-4'>
          <div className='form-body'>

            <div className='row '>
              <Field className="col form-control form-select input-border" name="type" as="select" placeholder="Typ" >
                <option value="" label="Typ"></option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>

              <Field className="col form-control form-select input-border" name="location" as="select" placeholder="Lokalita" >
                <option value="" label="Lokalita"></option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
            </div>

            <label>Cena prenájmu</label>
            <div className='row '>

              <Field className="col form-control input-border" name="priceFrom" type="number" placeholder="Od" />
              <Field className="col form-control input-border" name="priceTo" type="number" placeholder="Do" />
            </div>

          </div>
        </div>
        <button type="submit" className="btn next btn-primary">Ďalej</button>
      </Form>
    </Formik>
  );
}

export default HouseLocation;
