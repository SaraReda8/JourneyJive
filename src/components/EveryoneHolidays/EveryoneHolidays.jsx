import React from 'react';
import './EveryoneHolidays.css';
import Container from 'react-bootstrap/Container';
import EveryoneHolidaysCard from './EveryoneHolidaysCard';
import EveryoneHolidaysItems from './../../Assets/files(js)/HolidaysItems';
import AllInclusive from './../../Assets/Images/all-inclusive-all.jpg';
import Thailand from './../../Assets/Images/thailand.webp';
import BoatCruise from './../../Assets/Images/boat-cruise.jpg';
import CityBreak from './../../Assets/Images/city-break.jpg';
import HotelHoliday from './../../Assets/Images/hotel-holiday.jpg';
import SnowyVillage from './../../Assets/Images/snowy-village.jpg';
import LuxuryEscapes from './../../Assets/Images/Luxuryescapes.jpg';
import AboutUs from './../../Assets/Images/aboutus.webp';
import V3 from './../../Assets/Images/v3.jpg';

const images = [
  AllInclusive,
  Thailand,
  BoatCruise,
  CityBreak,
  HotelHoliday,
  SnowyVillage,
  V3,
  LuxuryEscapes,
  AboutUs,
];

function EveryoneHolidays() {
  return (
    <div className="everyone-holidays-section my-4 my-sm-5">
      <Container>
        <h2 className="title fw-bold text-center mb-4 mb-sm-5">Holidays For Everyone</h2>
        <p className="quote text-center mx-auto mb-5 fw-light">
          "Escape the ordinary and embark on an unforgettable journey!"
        </p>
        <div className="row g-4">
          {EveryoneHolidaysItems.map((item, index) => (
            <EveryoneHolidaysCard
              key={item.id}
              itemTitle={item.itemTitle}
              itemSubTitle={item.itemSubTitle}
              itemPrice={item.itemPrice}
              image={images[index]}
            />
          ))}
        </div>
        <div className="advertisement-section mt-5">
          <h3 className="ad-title text-center mb-3">Limited Time Offers</h3>
          <p className="ad-description text-center text-beige">
            Don't miss out on our special deals! Book now and save big on your dream holiday.
          </p>
        </div>
      </Container>
    </div>
  );
}


export default EveryoneHolidays;
