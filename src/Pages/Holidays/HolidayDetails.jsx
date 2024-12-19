import React from 'react';
import './Holidays.css';
import RecentHolidays from '../../components/RecentHolidays/RecentHolidays';
import FavouriteSection from '../../components/FavouriteSection/FavouriteSection';
function HolidayDetails() {
    return (
        <div className='holidays-page'>
            <RecentHolidays/>
                <FavouriteSection/>
        </div>
    )
}
export default HolidayDetails;