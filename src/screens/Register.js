import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';


const RegisterComponent = () => {
    const navigate = useNavigate()

    const register = (data) => {
        // Create a new user with email and password using firebase
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                console.log(res.user)
                navigate("/customer-form")
            })
            .catch(err => console.log(err,err.message))
    }

    const schema = Yup.object().shape({
        email: Yup.string()
            .required('Povinné pole'),
        password: Yup.string()
            .required('Povinné pole')
            .min(6, 'Heslo by malo obsahovať aspoň 6 znakov')
    });
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={schema}
            onSubmit={(values) => { register(values) }}
        >
        {({ errors, touched, isValidating }) => (
            <Form className='form' id='signupForm'>
                <div className='form-container mb-4'>
                    <div className='form-body'>
                            <div className='row '>
                                <Field className={`form-control input-border ${errors.email ? "is-invalid" : ""}`} name="email" type="email" placeholder="E_mail" />
                                <div className="invalid-feedback">{errors.email}</div>
                                <div>&nbsp;</div>
                               <Field className={`form-control input-border ${errors.password ? "is-invalid" : ""}`} name="password" type="password" placeholder="Password" />
                                <div className="invalid-feedback">{errors.password}</div>
                            </div>
                    </div>
                </div>
                <button type="submit" className="btn next btn-primary">Sign up</button>
                </Form>
            )}
        </Formik>
    );
}
export default RegisterComponent;