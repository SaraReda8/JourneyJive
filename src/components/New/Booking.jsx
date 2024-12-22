import React from 'react';
import * as Yup from 'yup';
import { Field, Form, ErrorMessage } from 'formik';  // Import missing Formik components
import BaseForm from './../Form/Form';
import styles from './Booking.module.css';

const BookingForm = () => {
  const initialValues = {
    name: '',
    tel: '',
    email: '',
    country: '',
    date: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    tel: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    country: Yup.string().required('Country is required'),
    date: Yup.string().required('Date is required'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const additionalFields = () => (
    <>
      <div className="mb-3">
        <label className={styles.label}>Country</label>
        <Field name="country" type="text" className={`form-control ${styles.countryInput}`} placeholder="Country" />
        <ErrorMessage name="country" component="div" className="text-danger" />
      </div>

      <div className="mb-3">
        <label className={styles.label}>Date</label>
        <Field name="date" type="date" className={`form-control ${styles.dateInput}`} />
        <ErrorMessage name="date" component="div" className="text-danger" />
      </div>
    </>
  );

  return (
    <BaseForm
      title="Book Your Trip"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      additionalFields={additionalFields}
      buttonText="Submit Booking"
    />
  );
};

export default BookingForm;
