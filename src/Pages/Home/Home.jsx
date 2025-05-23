import Plane from './../../components/Plane/Plane';
import TopDestinations from '../../components/TopDestinations/TopDestinations';
import DynamicADv from './../../components/DynamicADv/DynamicADv';
import Popular from './../../components/Popular/Popular';
import Reviews from './../../components/Reviews/Reviews';
import About from './../About/About';
import ScrollReveal from './../../components/ScrollReveal/ScrollReveal';
export default function Home(){

    return <>
  <div>

      <div>
        <ScrollReveal>
          <Plane />
        </ScrollReveal>

        <ScrollReveal>
          <TopDestinations />
        </ScrollReveal>

        <ScrollReveal>
          <DynamicADv />
        </ScrollReveal>

        <ScrollReveal>
          <Popular />
        </ScrollReveal>

        <ScrollReveal>
          <Reviews />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>
      </div>
  </div>

    </>
}