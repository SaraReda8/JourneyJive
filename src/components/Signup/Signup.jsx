import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Style from './Signup.module.css';
import { FaUser, FaEnvelope, FaGlobe, FaLock } from 'react-icons/fa';
import signupImg from '../../Assets/Images/signup.jpg'; // Import the sign-up image

// Sign-up component
export default function SignUp() {
    const initialValues = {
        name: '',
        username: '',
        email: '',
        country: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        country: Yup.string().required('Country is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className={Style.container}>
            <div className={Style.formContainer}>
                <h2 className='title2'>Sign Up</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {() => (
                        <Form>
                            <div className={Style.fieldContainer}>
                                <FaUser className={Style.icon} />
                                <Field name="name" placeholder="Name" />
                                <ErrorMessage name="name" component="div" className={Style.error} />
                            </div>
                            <div className={Style.fieldContainer}>
                                <FaUser className={Style.icon} />
                                <Field name="username" placeholder="Username" />
                                <ErrorMessage name="username" component="div" className={Style.error} />
                            </div>
                            <div className={Style.fieldContainer}>
                                <FaEnvelope className={Style.icon} />
                                <Field name="email" type="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" className={Style.error} />
                            </div>
                            <div className={Style.fieldContainer}>
                                <FaGlobe className={Style.icon} />
                                <Field name="country" placeholder="Country" />
                                <ErrorMessage name="country" component="div" className={Style.error} />
                            </div>
                            <div className={Style.fieldContainer}>
                                <FaLock className={Style.icon} />
                                <Field name="password" type="password" placeholder="Password" />
                                <ErrorMessage name="password" component="div" className={Style.error} />
                            </div>
                            <div className={Style.fieldContainer}>
                                <FaLock className={Style.icon} />
                                <Field name="confirmPassword" type="password" placeholder="Confirm Password" />
                                <ErrorMessage name="confirmPassword" component="div" className={Style.error} />
                            </div>
                            <button type="submit" className='glowButton'>Sign up for free</button>
                            <p>
                                Already have an account? <a href="/login" className='text-main'>Sign in</a>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className={Style.imageContainer}>
                <img src={signupImg} alt="Sign Up" className={Style.signupImg} />
            </div>
        </div>
    );
};