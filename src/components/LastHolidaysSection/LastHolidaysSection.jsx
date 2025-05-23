// LastHolidaysSection.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaHeart, FaStar } from 'react-icons/fa';
import styles from './LastHolidaysSection.module.css';

const LastHolidaysSection = ({ products }) => {
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>Featured Products</h2>
      <p className={styles.carouselSubtitle}>Check out our latest collections!</p>
      <Carousel interval={3000} indicators={false}>
        {products.map((product, index) => (
          <Carousel.Item key={index}>
            <div className={styles.card}>
              <div className={styles.cardImageContainer}>
                <img src={product.image} alt={product.name} className={styles.cardImage} />
                <button className={styles.wishlistButton}>
                  <FaHeart />
                </button>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardRating}>
                  {[...Array(product.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.starFilled} />
                  ))}
                  {[...Array(5 - product.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.starEmpty} />
                  ))}
                </div>
                <h5 className={styles.cardTitle}>{product.name}</h5>
                <p className={styles.cardCountry}>{product.country}</p>
                <p className={styles.cardDetails}>{product.details}</p>
                <p className={styles.cardPrice}>${product.price.toFixed(2)}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default LastHolidaysSection;
