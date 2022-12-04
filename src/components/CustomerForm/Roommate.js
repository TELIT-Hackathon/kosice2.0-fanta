import React from 'react';
import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';

function Roommate({ setNextStep }) {

  return (
    <Formik
      initialValues={{
        roommate: false,
        sex: '',
        ageFrom: '',
        ageTo: ''
      }}

      onSubmit={(values) => {
        console.log(values);
        setNextStep(values)
      }}
    >
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
              <Field className="col form-select input-border" name="sex" as="select" >
                <option value="" label="Pohlavie"></option>
                <option value="m">Muž</option>
                <option value="z">Žena</option>
              </Field>
              <div className="col"> </div>
            </div>

            <label>Vek</label>
            <div className='row '>

              <Field className="col form-control input-border" name="ageFrom" type="number" placeholder="Od" />
              <Field className="col form-control input-border" name="ageTo" type="number" placeholder="Do" />
            </div>


          </div>
        </div>
        <button type="submit" className="btn next btn-primary">Ďalej</button>
      </Form>
    </Formik>
  );
}

export default Roommate;