import { motion } from 'framer-motion';
import styles from './Discover.module.css';
import christmasMarket from '../../assets/Images/christmas2.jpg';
import snowyVillage from '../../assets/Images/snowy-village.jpg';

export default function Discover() {
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
        {/* Christmas Market Section */}
        <motion.div
          className={styles.gridItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={christmasMarket}
            alt="Christmas Market"
            className={styles.image}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
          <h2>Traditional Christmas Markets</h2>
          <h1 className="seccolor">A Festive Wonderland Awaits!</h1>
          <p className={styles.text}>
            Stroll through Germany’s world-famous Christmas markets, where festive lights,
            handcrafted ornaments, and the aroma of mulled wine fill the air. A perfect way
            to embrace the holiday spirit!
          </p>
        </motion.div>

        {/* Snowy Village Section */}
        <motion.div
          className={styles.gridItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Snowy Village Escapes</h2>
          <h1 className="seccolor">Cozy and Magical!</h1>
          <p className={styles.text}>
            Discover enchanting snow-covered villages that feel like a fairytale. Enjoy
            horse-drawn carriage rides, warm fireside gatherings, and the beauty of a white
            Christmas.
          </p>
          <motion.img
            src={snowyVillage}
            alt="Snowy Village"
            className={styles.image}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
