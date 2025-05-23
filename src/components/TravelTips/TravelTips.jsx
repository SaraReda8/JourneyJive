import React from 'react';
import styles from './TravelTips.module.css';

import packingImage from '../../Assets/Images/packing-tips.webp';
import safetyImage from '../../Assets/Images/safety-tips.webp';
import budgetImage from '../../Assets/Images/budget-travel.webp';

export default function TravelTips() {
    return (
        <div className={styles.travelTipsContainer}>
            <section className={styles.heroSection}>
                <h1>Travel Tips to Enhance Your Journey</h1>
                <p>Get expert advice on packing, safety, and budgeting to make your travels smoother and more enjoyable.</p>
            </section>

            <section className={styles.tipsSection}>
                            {/* Safety Tips */}
                            <div className={styles.tipCard}>
                    <img
                        src={safetyImage}
                        alt="Safety Tips"
                        className={styles.tipImage}
                        loading="lazy"
                    />
                    <h2 className={styles.tipTitle}>Safety Tips</h2>
                    <p>Safety is key when traveling! Get essential tips for staying safe, whether you're traveling solo or with a group.</p>
                </div>
                {/* Packing Tips */}
                <div className={styles.tipCard}>
                    <img
                        src={packingImage}
                        alt="Packing Tips"
                        className={styles.tipImage}
                        loading="lazy"
                    />
                    <h2 className={styles.tipTitle}>Packing Tips</h2>
                    <p>Learn how to pack efficiently for your trip and make the most out of your luggage space. Discover the best packing strategies for short and long trips!</p>
                </div>
                {/* Budget Travel Tips */}
                <div className={styles.tipCard}>
                    <img
                        src={budgetImage}
                        alt="Budget Travel"
                        className={styles.tipImage}
                        loading="lazy"
                    />
                    <h2 className={styles.tipTitle}>Budget Travel</h2>
                    <p>Traveling on a budget doesn't mean sacrificing fun. Learn how to find affordable flights, accommodations, and activities.</p>
                </div>
            </section>
        </div>
    );
}
