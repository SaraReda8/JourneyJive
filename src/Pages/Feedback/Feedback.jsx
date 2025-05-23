import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Reviews from '../../components/Reviews/Reviews';
import Awards from '../../components/Awards/Awards';
import bgFeed from '../../assets/Images/bg.webp'

export default function Feedback(){


    return <>
      <Breadcrumbs title="Feedback" pagename="feedback" bgImage={bgFeed} />
      <Reviews />
      <Awards />
      </>
}