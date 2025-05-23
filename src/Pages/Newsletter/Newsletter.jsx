
import Discover from '../../components/Discover/Discover';
import TravelTips from '../../components/TravelTips/TravelTips';
import Banner from './../../components/Banner/Banner';
import ScrollReveal from './../../components/ScrollReveal/ScrollReveal';

const Newsletter = () => {
  return <>
    <ScrollReveal>
     <Discover />

    </ScrollReveal>
    <ScrollReveal>
     <TravelTips />

 </ScrollReveal>
     <ScrollReveal>
     <Banner />

    </ScrollReveal>
  </>
    
    
};

export default Newsletter;
