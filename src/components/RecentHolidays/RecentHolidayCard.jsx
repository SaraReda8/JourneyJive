// RecentHolidayCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './RecentHolidayCard.module.css'; // Import CSS module for styling

function RecentHolidayCard({
    itemImage,
    itemTitle,
    itemDescription,
    itemNights,
    itemPrice,
    itemRating,
    itemAvailability,
    itemAmenities,
    itemLocation,
    itemDiscount,
    itemCancellation,
    itemRecommendedAge
}) {
    return (
        <div className={`col-lg-4 ${styles.cardWrapper} animate__animated animate__fadeInUp`}>
            <Card className="shadow h-100 overflow-hidden">
                {/* Image on Top */}
                <Card.Img variant="top" src={itemImage} className={styles.img} alt={itemTitle} />

                {/* Card Body with Features Below */}
                <Card.Body className="p-4">
                    <Card.Title className="text-center fw-bold">{itemTitle}</Card.Title>
                    <ul className="list-unstyled">
                        <li><strong>Description:</strong> {itemDescription}</li>
                        <li><strong>Nights:</strong> {itemNights}</li>
                        <li className="price ">
                            <strong>Price:</strong> <span >{itemPrice}</span> pp
                        </li>
                        <li className="rating">
                            <strong>Rating:</strong> {itemRating} ⭐
                        </li>
                        <li className="availability">
                            <strong>Availability:</strong> {itemAvailability}
                        </li>
                        <li className="amenities">
                            <strong>Amenities:</strong>
                            <ul>
                                {itemAmenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                        </li>
                        <li className="location">
                            <strong>Location:</strong> {itemLocation}
                        </li>
                        <li className="discount">
                            <strong>Discount:</strong> {itemDiscount}
                        </li>
                        <li className="cancellation">
                            <strong>Cancellation Policy:</strong> {itemCancellation}
                        </li>
                        <li className="recommendedAge">
                            <strong>Recommended Age:</strong> {itemRecommendedAge}
                        </li>
                    </ul>
                    <Button className='btn1'>View Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default RecentHolidayCard;
