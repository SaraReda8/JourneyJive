import React from 'react';
import styles from './RecommendationSection.module.css';
import bgImage from '../../Assets/Images/sea.jpg'; // Import image

function RecommendationSection() {
  return (
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
    
  );
}

export default RecommendationSection;
