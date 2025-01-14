import React from 'react';
import styles from './Embark.module.css';
import image33 from '../../Assets/Images/africa2.webp';
import image34 from '../../Assets/Images/sunset2.webp';
import bgImage from '../../Assets/Images/sunset4.webp';

export default function Embark() {
  return (
    <>
      <div className={styles.bookNow}>
        <div className={styles.bookNowImage}>
        <img
  src={image33}
  alt="Beautiful African landscape"
  className={`${styles.image} ${styles.animate}`}
  loading="lazy"
  srcSet={`${image33} 1200w, ${image33} 800w, ${image33} 400w`}
/>
        </div>
        <div className={styles.bookNowContent}>
          <h1>Embark on the journey of a lifetime!</h1>
          <h2 className={styles.bold}>
            Travel across Africa, Asia, and Europe in one epic 3-week adventure.
          </h2>
          <p className={styles.text}>
            From the savannas of Kenya to the bustling streets of Tokyo, and the historic charm of Rome, you’ll experience it all in one seamless trip!
          </p>
          <button className={styles.bookNowButton}>Book Now</button>
        </div>
        <div className={styles.bookNowImage}>
        <img
  src={image34}
  alt="Stunning sunset view"
  className={`${styles.image} ${styles.animate}`}
  loading="lazy"
  srcSet={`${image34} 1200w, ${image34} 800w, ${image34} 400w`}
/>
        </div>
      </div>
      <div
        className={styles.RecommendationSection}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-light text-center">
          <p className={styles.title}>
            Choose Your Tours
            <br />
            <strong>Get The Best Plans For Yours</strong>
          </p>
        </div>
      </div>
    </>
  );
}
