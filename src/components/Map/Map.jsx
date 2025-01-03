import React from 'react';
import styles from './Map.module.css'; // CSS module for styling

const Map = () => {
  return (
    <div className={`container ${styles.mapContainer}`}>
      <h2 className='text-center'>Our Location</h2>
      <p className={styles.caption}>Find us easily using the map below!</p>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6907.219742445176!2d31.241524558446567!3d30.04804838666024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c7487e04cd%3A0x3377b407fe2c3754!2z2YjYs9i3INin2YTYqNmE2K_YjCDYqNin2Kgg2KfZhNmE2YjZgtiMINi52KfYqNiv2YrZhtiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1735783141457!5m2!1sar!2seg"
          className={styles.map}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
