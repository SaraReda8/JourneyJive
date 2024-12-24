import React from 'react';
import worldmap from '../../Assets/Images/Worldmap.jpeg';
import styles from './Popular.module.css';

export default function Popular() {
  return (
    <div className={`row ${styles.container}`}>
      <div className="col-md-6">
        <img
          src={worldmap}
          alt="World map"
          loading="lazy"
          className={styles.image}
        />
      </div>
      <div className="col-md-6">
        <h3 className={styles.title}>Popular Destinations</h3>
        <p className={styles.description}>
          Discover the world's most beautiful and unique destinations.
        </p>
        <ul className={styles.list}>
          <li>Europe <span className='seccolor'>(10)</span></li>
          <li>Asia<span className='seccolor'>(25)</span></li>
          <li>Africa<span className='seccolor'>(18)</span></li>
          <li>North America<span className='seccolor'>(05)</span></li>
        </ul>
        <a href="/Destinations" className="btn3">
          Discover All Destination
        </a>
      </div>
    </div>
  );
}
