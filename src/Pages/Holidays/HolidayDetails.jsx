import React from 'react';
import RecentHolidays from '../../components/RecentHolidays/RecentHolidays';
import FavouriteSection from '../../components/FavouriteSection/FavouriteSection';
import SearchSection from './../../components/SearchSection/SearchSection';
import ScrollReveal from './../../components/ScrollReveal/ScrollReveal';

function HolidayDetails() {
    return (
        <div className='holidays-page'>
            <ScrollReveal>
                <SearchSection />
            </ScrollReveal>
            <ScrollReveal>
                <RecentHolidays />
            </ScrollReveal>   
            <ScrollReveal>
                <FavouriteSection />
            </ScrollReveal>


        </div>
    )
}
export default HolidayDetails;