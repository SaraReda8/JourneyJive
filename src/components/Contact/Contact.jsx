import React from "react";
import styles from "./Contact.module.css";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import {   Form, Button} from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';

export default function ContactUs() {
    const initialValues = {
        name: '',
        tel: '',
        email: '',
        country: '',
        message: '',
      };
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        tel: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        country: Yup.string().required('Country is required'),
        message: Yup.string().required('Message is required'),
      });
    
    const onSubmit = (values, { resetForm }) => {
        alert('Thank you for your message! Hiber Support Team will get back to you soon.');
        resetForm();
      };
  return (
    <>
      {/* Header Section */}
      <Breadcrumbs title="Contact Us" pagename="Contact Us" />

      {/* Main Container */}
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>JourneyJive Travel Agency Inc.</h2>
        <p className={styles.text}>
          But I must explain to you how all this mistaken idea of denouncing <br/>
          pleasure and praising pain was born and I will give you a complete<br/>
          account of the system, and expound the actual teachings of the great<br/>
          explorer of the truth, the master-builder of human happiness.
        </p>

        {/* Cards Section */}
        <div className="row">
          {/* Address Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`card text-center ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <MdLocationOn />
                </div>
              </div>
              <h3 className={styles.cardTitle}>Address</h3>
              <p className={styles.cardBody}>
                168/170, Ave 01, Old York Drive Rich, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Call Us Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`card text-center ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <HiOutlinePhone />
                </div>
              </div>
              <h3 className={styles.cardTitle}>Call Us!</h3>
              <p className={styles.cardBody}>
                +88 0156 986 2560 <br />
                +880 176 1111 456
              </p>
            </div>
          </div>

          {/* Email Info Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`card text-center ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <HiOutlineMail />
                </div>
              </div>
              <h3 className={styles.cardTitle}>Email Info</h3>
              <p className={styles.cardBody}>
                info@companyname123.com <br />
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
   {/* Contact Form Section */}
<div className={styles.formWrapper}>
  <div className={styles.formContainer}>
    <p className={styles.text2}>Reservation Form    </p>
    <h2 className="mb-4">Let’s Get in Touch
    </h2>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormikForm>
        <Form.Group className="mb-3">
          <Field name="name" type="text" className="form-control" placeholder="Name" />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Field name="tel" type="text" className="form-control" placeholder="Phone" />
          <ErrorMessage name="tel" component="div" className="text-danger" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Field name="email" type="email" className="form-control" placeholder="Email" />
          <ErrorMessage name="email" component="div" className="text-danger" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Field name="country" type="text" className="form-control" placeholder="Country" />
          <ErrorMessage name="country" component="div" className="text-danger" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Field as="textarea" name="message" className="form-control" placeholder="Leave your message" rows="4" />
          <ErrorMessage name="message" component="div" className="text-danger" />
        </Form.Group>

        <Button  className='btn2 w-100'>Send a Message</Button>
      </FormikForm>
    </Formik>
  </div>
</div>

    </>
  );
}
