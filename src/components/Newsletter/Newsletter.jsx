import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BaseForm from './../Form/Form';

// Import all images
import featuredImage from '../../Assets/Images/holiday-paris.jpg';
import offersImage from '../../Assets/Images/Greece2.jpg';
import tipsImage from '../../Assets/Images/destinations-hero-bg.jpg';
import customerStoriesImage from '../../Assets/Images/destination-2.jpg';
import image33 from '../../Assets/Images/africa2.jpg';
import image34 from '../../Assets/Images/sunset2.jpg';
import Discover from './../Discover/Discover';

const Newsletter = () => {
  const featuredDestinations = [
    { title: 'Paris, France', description: 'Experience the city of lights with our exclusive packages.', image: featuredImage },
    { title: 'Maldives', description: 'Enjoy pristine beaches and luxurious resorts.', image: offersImage },
    { title: 'Egypt', description: 'Explore ancient wonders and cultural treasures.', image: tipsImage },
  ];

  const customerStories = [
    {
      quote: "Our trip to Bali was amazing! Thanks to your fantastic planning, we had the time of our lives.",
      name: 'Sarah L.',
      image: customerStoriesImage,
    },
    {
      quote: "We loved our Paris getaway. Everything was perfectly organized. Thank you!",
      name: 'John D.',
      image: customerStoriesImage,
    },
  ];

  const travelTips = [
    'Pack light and carry essentials only.',
    'Check visa and passport requirements early.',
    'Always have travel insurance for emergencies.',
  ];

  const initialValues = {
    name: '',
    tel: '',
    email: '',
    rating: null,
    review: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    tel: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    rating: Yup.number().required('Rating is required'),
    review: Yup.string().required('Review is required'),
  });

  const onSubmit = (values) => {
    console.log('Submitted Review:', values);
  };

  const additionalFields = (formik) => (
    <>
      <textarea
        name="review"
        placeholder="Write your review"
        rows="4"
        className={styles.textarea}
        onChange={formik.handleChange}
        value={formik.values.review}
      />
      {formik.errors.review && <div className={styles.error}>{formik.errors.review}</div>}

      <div className={styles.rating}>
        <label>Rating:</label>
        <div className={styles.ratingButtons}>
          {[...Array(10).keys()].map((num) => (
            <button
              key={num + 1}
              type="button"
              onClick={() => formik.setFieldValue('rating', num + 1)}
              className={`${styles.ratingButton} ${formik.values.rating === num + 1 ? styles.selected : ''}`}
            >
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return <>
    <Discover />
<div className={styles.bookNow}>
        <div className={styles.bookNowImage}>
          <img
            src={image33}
            alt="Image 33"
            className={`${styles.image} ${styles.animate}`}
            loading="lazy"
          />
        </div>
        <div className={styles.bookNowContent}>
          <h1>   Embark on the journey of a lifetime!</h1>
          <h2 className={styles.bold}> Travel across Africa, Asia, and Europe in one epic 3-week adventure.</h2>
          <p className={styles.text}>
        From the savannas of Kenya to the bustling streets of Tokyo, and the historic charm of Rome, you’ll experience it all in one seamless trip!
          </p>
          <button className={styles.bookNowButton}>Book Now</button>
        </div>
        <div className={styles.bookNowImage}>
          <img
            src={image34}
            alt="Image 34"
            className={`${styles.image} ${styles.animate}`}
            loading="lazy"
          />
        </div>
      </div> 
  <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>

      {/* Featured Destinations Section */}
      <section className={styles.section}>
        <h2>Featured Destinations</h2>
        <div className={styles.cards}>
          {featuredDestinations.map((destination, index) => (
            <div key={index} className={styles.card}>
              <img src={destination.image} alt={destination.title} className={styles.image} />
              <h3>{destination.title}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className={styles.section}>
        <h2>Travel Tips</h2>
        <div className={styles.tips}>
          <img src={tipsImage} alt="Travel Tips" className={styles.image} />
          <ul>
            {travelTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className={styles.section}>
        <h2>Customer Stories</h2>
        <div className={styles.cards}>
          {customerStories.map((story, index) => (
            <div key={index} className={styles.card}>
              <img src={story.image} alt={story.name} className={styles.image} />
              <p>
                "{story.quote}" – <strong>{story.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Review Form Section */}
      <BaseForm
        title="Submit Your Review"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        additionalFields={additionalFields}
        buttonText="Submit Review"
      />
    </div>
  </>
    
    
};

export default Newsletter;
