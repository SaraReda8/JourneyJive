import React from 'react';
import styles from './FavouriteSection.module.css'; // Import the CSS module

export default function FavouriteSection() {
    return (
        <div className={styles.favouritesSection}>
            <div className='container'>
                <h3 className='title '>Explore Your Favorites
                </h3>
                <div className='row g-4'>
                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.spaDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light mb-4 h2 fw-semibold'>Spa</h4>
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.poolDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light mb-4 h2 fw-semibold'>Pool</h4>
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.petFriendlyDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Pet friendly</h4>
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.allInclusiveDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>All inclusive</h4>
                        </div>
                    </div>

                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.OceanViewDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Ocean View                            </h4>
                        </div>
                    </div>
                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.AdventureToursDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Adventure Tours                            </h4>
                        </div>
                    </div>

                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.MountainDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Mountain Retreat                            </h4>
                        </div>
                    </div>

               

               
                    <div className='col-sm-6 col-lg-3'>
                        <div className={`${styles.LuxurySuiteeDiv} ${styles.imgHover} d-flex align-items-end justify-content-center rounded`}>
                            <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Luxury Suite</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
