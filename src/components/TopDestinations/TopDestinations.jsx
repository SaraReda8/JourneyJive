import React from 'react';
import Slider from 'react-slick';
import styles from './TopDestinations.module.css';
import topDestinations from '../../Assets/files(js)/TopDestinations';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function TopDestinations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className={styles.carouselContainer}>
      <h2>Explore Top Destinations</h2>
      <Slider {...settings}>
        {topDestinations.map((destination) => (
          <div key={destination.id} className={styles.card}>
            <img
              src={destination.image}
              alt={destination.name}
              loading="lazy"
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{destination.name}</h3>
            <p className={styles.info}>
              {destination.places} Places | {destination.hotels} Hotels
            </p>
            <div className={styles.stars}>
              {Array(destination.stars)
                .fill()
                .map((_, i) => (
                  <span key={i} className={styles.star}>
                    &#9733;
                  </span>
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
