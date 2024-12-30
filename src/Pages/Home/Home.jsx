import { React } from 'react';
import SearchSection from '../../components/SearchSection/SearchSection';
import TopDestinations from '../../components/TopDestinations/TopDestinations';
import Plane from './../../components/Plane/Plane';
import Reviews from './../../components/Reviews/Reviews';
import { Container, Row, Col,  } from "react-bootstrap";

import styles from './Home.module.css'
import Popular from './../../components/Popular/Popular';
export default function Home(){
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };



    
    return <>
    <Plane/>
    <TopDestinations/>
    <section className={styles.callUs}>
  <Container>
    <Row className="align-items-center">
      <Col md="8">
        <h5 className={styles.title}>JOIN US ON AN UNFORGETTABLE JOURNEY</h5>
        <h2 className={styles.heading}>
          EMBARK ON YOUR NEXT ADVENTURE WITH US!
        </h2>
        <p className={styles.text}>
          Experience the thrill of discovering new destinations, cultures, and memories that will last a lifetime. Let us make your travel dreams come true, with carefully curated trips designed just for you.
        </p>
      </Col>
      <Col md="4" className="text-center mt-3 mt-md-0">
        <a
          href="/ContactUs" // Link updated to /ContactUs
          className={`${styles.secondaryBtn} ${styles.bounce}`}
        >
          Contact Us!
        </a>
      </Col>
    </Row>
  </Container>
  <div className={styles.overlay}></div>
</section>


<Popular/>
    <Reviews/>
          <SearchSection/>

    </>
}