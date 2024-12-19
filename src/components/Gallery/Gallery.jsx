import React from 'react';
import styles from './Gallery.module.css';

// Import images
import img1 from '../../Assets/Images/v1.jpg';
import img2 from '../../Assets/Images/v2.jpg';
import img3 from '../../Assets/Images/v3.jpg';
import img4 from '../../Assets/Images/v4.jpg';
import img5 from '../../Assets/Images/Maldives2.jpg';
import img6 from '../../Assets/Images/v5.jpg';
import img7 from '../../Assets/Images/v6.jpg';
import img8 from '../../Assets/Images/v7.jpg';
import img9 from '../../Assets/Images/turkey-holiday.jpg';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';


export default function Gallery() {
    const galleryImages = [
      [img1, img2, img3, img4], // First row: 4 images
      [img5, img6],            // Second row: 2 images
      [img7, img8, img9],      // Third row: 3 images
    ];
  
    return (
      <>
        {/* Background Section */}
        <Breadcrumbs title="Gallery" pagename="Gallery" />

  
        {/* Gallery Section */}
        <section className={styles.gallerySection}>
          {galleryImages.map((row, rowIndex) => (
            <div className={styles.gridRow} key={`row-${rowIndex}`}>
              {row.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  loading="lazy"
                  className={styles.galleryImage}
                />
              ))}
            </div>
          ))}
        </section>
      </>
    );
  }
