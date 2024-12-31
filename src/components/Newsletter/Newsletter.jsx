import React from 'react';
import styles from './Newsletter.module.css';



import tipsImage from '../../Assets/Images/destinations-hero-bg.jpg';

import Discover from './../Discover/Discover';

const Newsletter = () => {




  const travelTips = [
    'Pack light and carry essentials only.',
    'Check visa and passport requirements early.',
    'Always have travel insurance for emergencies.',
  ];







  return <>
    <Discover />

  <div className={styles.container}>
      <h1 className={styles.title}>Newsletter</h1>

  

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


    </div>
  </>
    
    
};

export default Newsletter;
