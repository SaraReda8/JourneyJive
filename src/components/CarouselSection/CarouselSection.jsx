import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from './CarouselSection.module.css'; // Assuming additional styling in this file
import headerImg1 from '../../Assets/Images/header-img1.jpg';
import headerImg2 from '../../Assets/Images/header-img2.jpg';
import headerImg3 from '../../Assets/Images/header-img3.jpg';

export default function CarouselSection() {
  return (
    <div className={styles.heroSection}>

    <Carousel>
        <Carousel.Item className={`${styles.carouselItem} vh-100`} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.40)), url(${headerImg1})` }}>
            <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                <div className="row h-100">
                    <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                        <h1 className='text-capitalize text-start'>Find your perfect holiday</h1>
                        <p className='text-start'>
                        Imagine a place where every moment feels tailor-made for you, where every sunrise holds the promise of discovery. Your perfect holiday is more than a getaway—it's the experience of a lifetime, crafted just for you                             </p>
                        <Button as={Link} to='/holidays' variant='success' className='text-capitalize'>Check our holidays</Button>
                    </div>
                    <div className='col-lg-6 d-none d-lg-block'></div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.carouselItem} vh-100`} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.30)), url(${headerImg2})` }}>
            <Carousel.Caption className='h-100'>
                <div className="row h-100">
                    <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                        <h1 className='text-capitalize text-start'>Do you need a city break?</h1>
                        <p className='text-start'>In the hustle of life, sometimes all we need is a pause. Escape to a city that invites you to slow down, breathe deeply, and find beauty in the heart of urban wonders. Rediscover yourself in the pulse of a new city</p>
                        <Button as={Link} to='/city-breaks' variant='success' className='text-capitalize'>Our city breaks</Button>
                    </div>
                    <div className='col-lg-6 d-none d-lg-block'></div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={`${styles.carouselItem} vh-100`} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.50)), url(${headerImg3})` }}>
            <Carousel.Caption className='h-100'>
                <div className="row h-100">
                    <div className='col-lg-6 d-none d-lg-block'></div>
                    <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                        <h1 className='text-capitalize text-start'>Travel anywhere</h1>
                        <p className='text-start'>The world is vast, full of wonders waiting to be explored. No matter where you go, adventure is out there—just waiting for you to make it your own

</p>
                        <Button as={Link} to='/destinations' variant='success' className='text-capitalize'>Check all destinations</Button>
                    </div>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</div>
  )
}
