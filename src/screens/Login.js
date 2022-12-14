import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import "./Register.scss";

const LoginComponent = () => {
    const navigate = useNavigate()

    const login = (data) => {
        // Create a new user with email and password using firebase
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                navigate("/")
            })
            .catch(err => console.log(err, err.message))
    }

    const schema = Yup.object().shape({
        email: Yup.string().email("Pole obsahuje nesprávny formát")
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
            onSubmit={(values) => { login(values) }}
        >
            {({ errors, touched, isValidating }) => (
                <Form className='form register' id='signupForm'>
                    <div className='form-container mb-4'>

                        <div className='form-body'>

                            <h4 className='mb-3 mt-3'>Prihlásenie</h4>
                            <div className='row mb-3'>
                                <div className='col'>
                                    <Field className={`form-control input-border ${errors.email ? "is-invalid" : ""}`} name="email" type="email" placeholder="Email" />
                                    <div className="invalid-feedback">{errors.email}</div>
                                </div>
                            </div>
                            <div className='row '>
                                <div className='col'>
                                    <Field className={`form-control input-border ${errors.password ? "is-invalid" : ""}`} name="password" type="password" placeholder="Password" />
                                    <div className="invalid-feedback">{errors.password}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn next btn-primary">Prihlásenie</button>
                </Form>
            )}
        </Formik>
    );
}
export default LoginComponent;