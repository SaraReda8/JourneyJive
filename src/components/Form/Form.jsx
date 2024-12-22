import React from 'react';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import styles from './Form.module.css';

const BaseForm = ({
  title,
  additionalFields,
  buttonText,
  initialValues,
  validationSchema,
  onSubmit,
}) => (
  <div className={styles.formWrapper}>
    <div className={styles.formContainer}>
      <h2>{title}</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
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

            {additionalFields?.(formik)}

            <Button type="submit" className="w-100">
              {buttonText}
            </Button>
          </FormikForm>
        )}
      </Formik>
    </div>
  </div>
);

export default BaseForm;
