import { React } from 'react';
import TopDestinations from '../../components/TopDestinations/TopDestinations';
import Destination from '../../components/destination/destination';
import Banner from './../../components/Banner/Banner';
import RecentHolidays from '../../components/RecentHolidays/RecentHolidays';

export default function Destinations(){



    return <>
      
       <Banner/>
       <Destination/>
       <TopDestinations/>
       <RecentHolidays/>

  

    </>
}