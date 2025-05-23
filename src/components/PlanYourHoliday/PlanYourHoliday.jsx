import React from 'react';
import styles from './PlanYourHoliday.module.css'; 

export default function PlanYourHoliday() {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <h2 className={styles.title}>Plan Your Summer Holiday</h2>
                <p className={styles.text}>
                  Let the world be your playground this summer, where 
                    every journey brings new stories to tell and experiences to cherish for a lifetime.
                </p>
            </div>
        </div>
    );
}
