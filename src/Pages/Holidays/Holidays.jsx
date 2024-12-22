import React from 'react';
import './Holidays.css';
// import SecondHeroSection from '../../Components/SecondHeroSection/SecondHeroSection';
// import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
// import NextHoliday from '../../Components/NextHoliday/NextHoliday';
// import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
// import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import EveryoneHolidays from '../../components/EveryoneHolidays/EveryoneHolidays';
// import RecentHolidays from '../../components/RecentHolidays/RecentHolidays';
import PlanYourHoliday from '../../components/PlanYourHoliday/PlanYourHoliday';
import RecommendationSection from '../../components/RecommendationSection/RecommendationSection';

function Holidays() {
    return (
        <div className='holidays-page'>

`            <RecommendationSection/>
            <EveryoneHolidays />
            <PlanYourHoliday/>

`

        </div>
    )
}

export default Holidays;