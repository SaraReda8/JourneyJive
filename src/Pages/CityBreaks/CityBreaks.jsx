import React, { useState } from 'react';
import CityBreaksItems from '../../Assets/files(js)/CityBreaksItems';
import CityBreakCard from '../../components/CityBreakCard/CityBreakCard';
import Container from 'react-bootstrap/Container';
import styles from './CityBreaks.module.css';
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import bghotel from '../../../src/Assets/Images/1.webp'
export default function CityBreaks() {
  const [selectedCity, setSelectedCity] = useState('london');

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className={styles.cityBreaks}>
      {/* Intro Image */}
      <Breadcrumbs title="Hotels" pagename="Hotels" bgImage={bghotel} />


      <Container>
        <div className="row">
          <div className={`col-md-2 mt-5 ${styles.buttonGroupContainer}`}>
            <div className="quote">
              <h5>“Discover stays where comfort meets savings, and memories are made.”</h5>
            </div>
            <div className="btn-group-vertical w-100">
              {['london', 'paris', 'amsterdam', 'egypt', 'china'].map((city) => (
                <button
                  key={city}
                  className={`btn btn-outline-dark my-2 ${selectedCity === city ? styles.active : ''}`}
                  onClick={() => handleCityChange(city)}
                >
                  {city.charAt(0).toUpperCase() + city.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* City Break Cards - 10 columns */}
          <div className="col-md-10">
            <div className="row g-4 mt-4">
              {CityBreaksItems[selectedCity].map((item) => (
                <div key={item.id} className="col-md-4">
                  <CityBreakCard
                    itemImage={item.itemImage}
                    itemTitle={item.itemTitle}
                    itemSubTitle={item.itemSubTitle}
                    itemNights={item.itemNights}
                    itemPrice={item.itemPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
