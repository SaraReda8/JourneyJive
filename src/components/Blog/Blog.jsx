import { React } from 'react';
import styles from './Blog.module.css';
import about from '../../Assets/Images/trip2.jpg';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';
export default function Blog(){
    return <>
          <Breadcrumbs title="Blog" pagename="Blog" />

 <div className={`row ${styles.borderSection}`}>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={about} alt="About" loading="lazy" className={styles.aboutImg} />
        </div>
        <div className="col-md-6">
          <h3 className={styles.title}>UNLEASH ADVENTURE WITH JOURNEY JIVE          </h3>
          <p className={styles.text}>
          Embark on a journey like no other with Journey Jive, where your travel aspirations become reality. Our mission is to inspire and facilitate your adventures, whether you seek the excitement of bustling cities, the tranquility of untouched landscapes, or the allure of cultural heritage. At Journey Jive, we craft personalized itineraries and handpicked destinations that align with your unique desires. Discover hidden gems, embrace diverse cultures, and make memories that will stay with you forever.

With Journey Jive as your trusted travel companion, the world’s wonders are just a step away. Our expert insights and insider tips empower you to explore with confidence, turning every destination into an unforgettable experience. From the moment you start planning until you return home, we’re here to ensure that your travel journey is seamless, enriching, and full of wonder.
          </p>
        </div>
      </div>
          </>
}