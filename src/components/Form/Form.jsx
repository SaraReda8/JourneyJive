import styles from "./Form.module.css";
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form as FormikForm } from 'formik';
import * as Yup from 'yup';

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
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <p className={styles.text2}>Contact Form</p>
        <h2>Let’s Get in Touch</h2>
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

            <Button className="w-100 btn2">Send a Message</Button>
          </FormikForm>
        </Formik>
      </div>
    </div>
  );
}
