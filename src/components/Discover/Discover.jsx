import React from 'react';
import { motion } from 'framer-motion';
import styles from './Discover.module.css';
import christmasMarket from '../../Assets/Images/christmas2.jpg';
import snowyVillage from '../../Assets/Images/snowy-village.jpg';
import festiveLights from '../../Assets/Images/festive-lights.jpg';

export default function Discover() {
  const imageVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.container}>
      {/* Title Section */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Christmas in Germany
      </motion.h1>

      {/* First Row */}
      <div className={styles.grid}>
        <motion.div
          className={styles.gridItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={textVariants}
        >
          <motion.img
            src={christmasMarket}
            alt="Christmas Market"
            className={styles.image}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.5 }}
          />
          <h2>Traditional Christmas Markets</h2>
          <h1 className='seccolor'>A Festive Wonderland Awaits!</h1>
          <p className={styles.text}>
            Stroll through Germany’s world-famous Christmas markets, where festive lights,
            handcrafted ornaments, and the aroma of mulled wine fill the air. A perfect way
            to embrace the holiday spirit!
          </p>
        </motion.div>

        <motion.div
          className={styles.gridItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={textVariants}
        >
          <h2>Snowy Village Escapes</h2>
          <h1 className='seccolor'>Cozy and Magical!</h1>
          <p className={styles.text}>
            Discover enchanting snow-covered villages that feel like a fairytale. Enjoy
            horse-drawn carriage rides, warm fireside gatherings, and the beauty of a white
            Christmas.
          </p>
          <motion.img
            src={snowyVillage}
            alt="Snowy Village"
            className={styles.image}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Overlay Section */}
      <motion.div
        className={styles.overlayContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={festiveLights}
          alt="Festive Lights"
          className={styles.overlayImage}
          initial="initial"
          animate="animate"
          variants={imageVariants}
          transition={{ duration: 0.5 }}
        />
        <motion.button
          className={styles.overlayButton}
          whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
          transition={{ duration: 0.3 }}
        >
          Plan Your Trip
        </motion.button>
      </motion.div>
    </div>
  );
}
