import React from 'react';
import Card from 'react-bootstrap/Card';
import ChevronRight from '../../assets/Icons/chevron-right.svg';
import 'animate.css';

function EveryoneHolidaysCard({ itemTitle, itemSubTitle, itemPrice, image }) {
  return (
    <div className="col-12 col-md-6 col-xl-4 animate__animated animate__fadeInUp">
      <Card className="shadow d-flex flex-sm-row overflow-hidden">
        <div
          className="image-div img-hover col-sm-6 d-flex align-items-center justify-content-center px-4 py-5"
          style={{ backgroundImage: `url(${image})` }}
        >
          <h5 className="text-capitalize text-light">{itemTitle}</h5>
        </div>
        <div className="col-sm-6 d-flex align-items-center">
          <Card.Body className="p-4">
            <p className="mb-0 text-capitalize">{itemSubTitle}</p>
            <p className="price my-2 fw-bold text-green">{itemPrice}</p>
            <p className="mb-0">per person</p>
          </Card.Body>
          <img src={ChevronRight} className="me-3" alt="chevron-right" />
        </div>
      </Card>
    </div>
  );
}

export default EveryoneHolidaysCard;
