import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

function Surrounding({setNextStep}) {

  const handleNext = () => {
    console.log("Next")
    setNextStep()
  }


  return (
    <Formik
      initialValues={{
        street: '',
        
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

        <div className='form-container'>
          <div className='form-body'>



            <div className="row form-group ">
              <Field className="form-control input-border" name="street" type="text" placeholder="Ulica" />
              <ErrorMessage name="firstName" />
            </div>

           
          </div>
        </div>

        <button type="submit" className='mt-3 btn btn-primary' onClick={handleNext}>Ďalej</button>
      </Form>
    </Formik>
  );
}

export default Location;
