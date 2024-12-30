import React from 'react';
import styles from './RecentHolidays.module.css'; // Use CSS module
import Container from 'react-bootstrap/Container';
import RecentHolidaysItems from '../../Assets/files(js)/RecentHolidaysItems';
import RecentHolidayCard from './RecentHolidayCard';

export default function RecentHolidays() {
    return (
        <div className={`${styles.recentHolidays} my-4 my-sm-5`}>
            <Container>
                <div className="col-12">
                    {RecentHolidaysItems.map((item) => (
                        <RecentHolidayCard
                            key={item.id}
                            itemImage={item.itemImage}
                            itemTitle={item.itemTitle}
                            itemDescription={item.itemDescription}
                            itemNights={item.itemNights}
                            itemPrice={item.itemPrice}
                            itemRating={item.itemRating}
                            itemAvailability={item.itemAvailability}
                            itemAmenities={item.itemAmenities}
                            itemLocation={item.itemLocation}
                            itemDiscount={item.itemDiscount}
                            itemCancellation={item.itemCancellation}
                            itemRecommendedAge={item.itemRecommendedAge}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
