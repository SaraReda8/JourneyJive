import React from 'react';
import worldmap from '../../Assets/Images/Worldmap.webp';
import styles from './Popular.module.css';

export default function Popular() {
  return (
    <div className={`row ${styles.container}`}>
      <div className="col-md-6">
        <img
          src={worldmap}
          alt="World map showing popular travel destinations"
          loading="lazy"
          className={styles.image}
          width="600"  // Add actual width
          height="400" // Add actual height
        />
      </div>
      <div className="col-md-6">
        <h3 className={styles.title}>Popular Destinations</h3>
        <p className={styles.description}>
          Discover the world's most beautiful and unique destinations.
        </p>
        <ul className={styles.list}>
          <li>Europe <span className={styles.seccolor}>(10)</span></li>
          <li>Asia <span className={styles.seccolor}>(25)</span></li>
          <li>Africa <span className={styles.seccolor}>(18)</span></li>
          <li>North America <span className={styles.seccolor}>(05)</span></li>
        </ul>
        <a
          href="/Destinations"
          className={`${styles.btn3} btn3`}
          aria-label="Discover All Destinations"
        >
          Discover All Destinations
        </a>
      </div>
    </div>
  );
}