import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";


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



    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={(values) => { register(values) }}
        >
            <Form className='form' id='signupForm'>
                <div className='form-container mb-4'>
                    <div className='form-body'>
                        <div className='row '>
                            <Field className="col form-control input-border" id='email-signup' name="email" type="email" placeholder="E-mail" />
                            <Field className="col form-control input-border" id='password-signup' name="password" type="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn next btn-primary">Sign up</button>
            </Form>
        </Formik>
    );
}

export default RegisterComponent;