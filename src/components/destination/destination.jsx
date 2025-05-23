import React from 'react';
import styles from './destination.module.css';
import spain from '../../Assets/Images/spain.webp';
import thailand from '../../Assets/Images/thailand.webp';
import africa from '../../Assets/Images/africa.webp';
import Egypt from '../../Assets/Images/egypt-hotel2.webp';
import switzerland from '../../Assets/Images/destination-1.webp';

export default function Destination() {
    const destinations = [
        { image: spain, title: "Spain", hours: "6 Tours", className: styles.card1 },
        { image: thailand, title: "Thailand", hours: "Wildlife", className: styles.card2 },
        { image: africa, title: "Africa", hours: "4-5 Hours", className: styles.card3 },
        { image: Egypt, title: "Egypt", hours: "5-6 Hours", className: styles.card4 },
        { image: switzerland, title: "Switzerland", hours: "Adventure", className: styles.card5 }
    ];

    return (
        <div className={styles.destinationSection}>
            <h5 className={styles.subtitle}>Destination Lists</h5>
            <h1 className={styles.title}>Go Exotic Places</h1>
            <div className={styles.grid}>
                {destinations.map((dest, index) => (
                    <div key={index} className={`${styles.card} ${dest.className}`}>
                        <img src={dest.image} alt={dest.title} />
                        <div className={styles.overlay}>
                            {dest.hours && <span className={styles.hoursBadge}>{dest.hours}</span>}
                            <span className={styles.text}>{dest.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
