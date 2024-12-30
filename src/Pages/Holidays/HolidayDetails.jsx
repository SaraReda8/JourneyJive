import React from 'react';
import './Holidays.css';
import RecentHolidays from '../../components/RecentHolidays/RecentHolidays';
import FavouriteSection from '../../components/FavouriteSection/FavouriteSection';
import SearchSection from './../../components/SearchSection/SearchSection';

function HolidayDetails() {
    return (
        <div className='holidays-page'>
            <SearchSection />
            
            <RecentHolidays/>
                <FavouriteSection/>

        </div>
    )
}
export default HolidayDetails;