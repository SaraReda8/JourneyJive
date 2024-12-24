import { React } from 'react';
import styles from './Embark.module.css';
import image33 from '../../Assets/Images/africa2.jpg';
import image34 from '../../Assets/Images/sunset2.jpg';
import bgImage from '../../Assets/Images/sunset3.jpg'; // Import image

export default function Embark(){

    return <>
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
    </div>  </>
}