import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

function Profile({ setNextStep }) {


    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                age: '',
                description: ''

            }}

            onSubmit={(values) => {
                setNextStep(values)
            }}
        >
            <Form className='form'>

                <div className='form-container mb-4'>
                    <div className='form-body'>

                        <label>Meno priezvisko</label>
                        <div className='row '>
                            <Field className="col form-control input-border" name="name" type="text" placeholder="Meno" />
                            <Field className="col form-control input-border" name="surname" type="text" placeholder="Priezvisko" />
                        </div>

                        <div className='row '>
                            <Field className="col form-control input-border" name="age" type="number" placeholder="Vek" />
                        </div>

                        <div className='row '>
                            <Field className="col form-control input-border" name="diescription" type="text" placeholder="Popis" />
                        </div>

                       
                    </div>
                </div>
                <button type="submit" className="btn next btn-primary">Ďalej</button>
            </Form>
        </Formik>
    );
}

export default Profile;
