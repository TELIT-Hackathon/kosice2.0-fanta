import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import GenericButton from '../GenericButton';
// import * as Yup from 'yup';

function Location({setNextStep}) {

  const handleNext = () => {
    console.log("Next")
    setNextStep()
  }


  return (
    <Formik
      initialValues={{
        street: '',
        type: '',
        location: '',
        roomCount: '',
        floor: '',
        elevator: '',
        priceFrom: '',
        priceTo: '',
        areaFrom: '',
        areaTo: '',
        sitation: ''
      }}
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

        <div className='form-container mb-4'>
          <div className='form-body'>

            <div className="row form-group ">
              <Field className="form-control input-border" name="street" type="text" placeholder="Ulica" />
              <ErrorMessage name="firstName" />
            </div>

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

            <div className='row '>
              <Field className="col form-control input-border" name="roomCount" type="number" placeholder="Počet izieb" />
              <div className="col form-checkbox">
                <Field type="checkbox" name="elevator" />
                <label className="form-check-label">
                  Výťah
                </label>
              </div>
            </div>

            <div className='row '>
              <Field className="col form-control input-border" name="floor" type="number" placeholder="Poschodie" />
              <div className="col"> </div>
            </div>

            <label>Cena</label>
            <div className='row '>

              <Field className="col form-control input-border" name="priceFrom" type="number" placeholder="Od" />
              <Field className="col form-control input-border" name="priceTo" type="number" placeholder="Do" />
            </div>

            <label>Výmera</label>
            <div className='row '>

              <Field className="col form-control input-border" name="areaFrom" type="number" placeholder="Od" />
              <Field className="col form-control input-border" name="areaTo" type="number" placeholder="Do" />
            </div>

            <div className='row '>
              <Field className="col form-select input-border" name="situation" as="select" >
                <option value="" label="Životná situácia"></option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <div className="col"> </div>
            </div>
          </div>
        </div>
        <GenericButton text={"Ďalej"} type="submit" onClick={handleNext} ></GenericButton>
      </Form>
    </Formik>
  );
}

export default Location;
