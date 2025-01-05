import React from 'react';
import Card from 'react-bootstrap/Card';
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
        <div className={`container ${styles.cardWrapper} animate__animated animate__fadeInUp`}>
            {/* Image Section */}
            <div className={`col-12 col-md-6 ${styles.imageWrapper}`}>
                <img src={itemImage} alt={itemTitle} className={styles.img} />
            </div>

            {/* Content Section */}
            <div className="col-12 col-md-6 d-flex flex-column">
                <Card.Body className={`p-3 ${styles.cardBody}`}>
                    <Card.Title className={`text-center fw-bold ${styles.title}`}>
                        {itemTitle}
                    </Card.Title>
                    <p className={styles.description}>{itemDescription}</p>
                    <ul className={`list-unstyled ${styles.featuresList}`}>
    <li><strong>Nights:</strong> {itemNights}</li>
    <li> <strong>Price:</strong> {itemPrice} pp </li>
    <li> <strong>Rating:</strong> {itemRating} ⭐ </li>
    <li><strong>Availability:</strong> {itemAvailability}</li>
    <li><strong>Location:</strong> {itemLocation}</li>
    <li><strong>Discount:</strong> {itemDiscount}</li>
    <li><strong>Cancellation Policy:</strong> {itemCancellation}</li>
    <li><strong>Recommended Age:</strong> {itemRecommendedAge}</li>


                        <li><strong>Amenities:</strong>
                            <ul className={styles.amenitiesList}>
                                {itemAmenities.map((amenity, index) => (
                                    <li key={index}>{amenity}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    <button type="submit" className='btn2 w-100'>
                    View Now</button>
                </Card.Body>
            </div>
        </div>
    );
}

export default RecentHolidayCard;
