// EveryoneHolidays.jsx
import React from 'react';
import './EveryoneHolidays.css';
import Container from 'react-bootstrap/Container';
import EveryoneHolidaysCard from './EveryoneHolidaysCard';
import EveryoneHolidaysItems from './../../Assets/files(js)/HolidaysItems';
import 'animate.css/animate.min.css';

function EveryoneHolidays() {
  return (
    <div className='everyone-holidays-section my-4 my-sm-5'>
      <Container>
        <h2 className='title fw-bold text-center mb-4 mb-sm-5'>Holidays For Everyone</h2>
        <p className="quote text-center mx-auto mb-5 fw-light">
          "Escape the ordinary and embark on an unforgettable journey!"
        </p>
        <div className="row g-4">
          {EveryoneHolidaysItems.map((item) => (
            <EveryoneHolidaysCard
              key={item.id}
              itemTitle={item.itemTitle}
              itemSubTitle={item.itemSubTitle}
              itemPrice={item.itemPrice}
              lazy={true}
            />
          ))}
        </div>
        <div className='advertisement-section mt-5'>
          <h3 className='ad-title text-center mb-3'>Limited Time Offers</h3>
          <p className='ad-description text-center'>Don't miss out on our special deals! Book now and save big on your dream holiday.</p>
        </div>
      </Container>
    </div>
  );
}

export default EveryoneHolidays;