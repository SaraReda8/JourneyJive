import { React } from 'react';
import styles from './Destinations.module.css';
import TopDestinations from '../../components/TopDestinations/TopDestinations';
import Destination from '../../components/destination/destination';
import CarouselSection from '../../components/CarouselSection/CarouselSection';
import Banner from './../../components/Banner/Banner';
export default function Destinations(){

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
            {/* <section className={styles.header}>
          <div className={styles.headerContent}>
            <h1>Destinations</h1>
            <p>
              Home <span>&gt;</span> Gallery
            </p>
          </div>
        </section> */}
       {/* <CarouselSection/> */}
       <Banner/>
       <Destination/>
       <TopDestinations/>
  

    </>
}