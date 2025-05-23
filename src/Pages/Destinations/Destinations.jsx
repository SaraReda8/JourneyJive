import TopDestinations from '../../components/TopDestinations/TopDestinations';
import Destination from '../../components/destination/destination';
import Banner from './../../components/Banner/Banner';
import RecentHolidays from '../../components/RecentHolidays/RecentHolidays';
import ScrollReveal from './../../components/ScrollReveal/ScrollReveal';

export default function Destinations(){



    return <>
      
       <Banner/>
         <ScrollReveal>
       <Destination/>
         </ScrollReveal>

         <ScrollReveal>
       <TopDestinations/>
            </ScrollReveal>

       <RecentHolidays/>

  

    </>
}