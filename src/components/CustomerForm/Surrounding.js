import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

const Surrounding = ({setNextStep}) => {

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
      onSubmit={(values) => {
        console.log(values);
        setNextStep(values)
      }}
    >
      <Form className='form'>

        <div className='form-container mb-4'>
          <div className='form-body'>



            <div className="row form-group ">
              <Field className="form-control input-border" name="street" type="text" placeholder="Ulica" />
              <ErrorMessage name="firstName" />
            </div>
            
           
          </div>
        </div>

        <button type="submit"  className="btn next btn-primary">Ďalej</button>
      </Form>
    </Formik>
  );
}

export default Surrounding;
