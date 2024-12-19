import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Import all images at the top
import featuredImage from '../../Assets/Images/holiday-paris.jpg';
import offersImage from '../../Assets/Images/Greece2.jpg';
import customerStoriesImage from '../../Assets/Images/Greece2.jpg';
import tipsImage from '../../Assets/Images/destinations-hero-bg.jpg';

export default function Newsletter() {
  const [reviews, setReviews] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: { name: '', review: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      review: Yup.string().required('Review is required'),
    }),
    onSubmit: (values) => {
      setReviews([...reviews, { ...values, image: uploadedImage }]);
      setUploadedImage(null);
      formik.resetForm();
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>

      {/* Featured Destinations */}
      <section className={styles.section}>
        <h2>Featured Destinations</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={featuredImage} alt="Destination" className={styles.image} />
            <h3>Paris, France</h3>
            <p>Experience the city of lights with our exclusive packages.</p>
          </div>
          <div className={styles.card}>
            <img src={featuredImage} alt="Destination" className={styles.image} />
            <h3>Maldives</h3>
            <p>Enjoy pristine beaches and luxurious resorts.</p>
          </div>
          <div className={styles.card}>
            <img src={featuredImage} alt="Destination" className={styles.image} />
            <h3>Egypt</h3>
            <p>Enjoy pristine beaches and luxurious resorts.</p>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className={styles.section}>
        <h2>Travel Tips</h2>
        <div className={styles.tips}>
          <div>
            <img src={tipsImage} alt="Travel Tips" className={styles.image} />
          </div>
          <div>
            <ul>
              <li>Pack light and carry essentials only.</li>
              <li>Check visa and passport requirements early.</li>
              <li>Always have travel insurance for emergencies.</li>
            </ul>
          </div>
        </div>
      </section>

   

      {/* Customer Stories */}
      <section className={styles.section}>
        <h2>Customer Stories</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={customerStoriesImage} alt="Customer Story" className={styles.image} />
            <p>
              "Our trip to Bali was amazing! Thanks to your fantastic planning, we had the time of
              our lives." – Sarah L.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={customerStoriesImage} alt="Customer Story" className={styles.image} />
            <p>
              "Our trip to Bali was amazing! Thanks to your fantastic planning, we had the time of
              our lives." – Sarah L.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={customerStoriesImage} alt="Customer Story" className={styles.image} />
            <p>
              "Our trip to Bali was amazing! Thanks to your fantastic planning, we had the time of
              our lives." – Sarah L.
            </p>
          </div>
        </div>
      </section>

   {/* Review Form */}
<section className={styles.reviewsection}>
  <h2 className='text-center'>Submit Your Review</h2>
  <form onSubmit={formik.handleSubmit} className={styles.form}>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
      className={styles.input}
    />
    {formik.touched.name && formik.errors.name && (
      <div className={styles.error}>{formik.errors.name}</div>
    )}
    
    <textarea
      name="review"
      placeholder="Write your review"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.review}
      className={styles.textarea}
    ></textarea>
    {formik.touched.review && formik.errors.review && (
      <div className={styles.error}>{formik.errors.review}</div>
    )}

    <div className={styles.rating}>
      <label >Rating:</label>
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
      {formik.touched.rating && formik.errors.rating && (
        <div className={styles.error}>{formik.errors.rating}</div>
      )}
    </div>

    <input type="file" accept="image/*" onChange={handleImageUpload} className={styles.file} />
    {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" className={styles.uploadedImage} />}
    
    <button type="submit" className={styles.button}>
      Submit Review
    </button>
  </form>
</section>

    </div>
  );
}
