import { React } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Reviews from '../../components/Reviews/Reviews';
import Awards from '../../components/Awards/Awards';
import bgFeed from '../../Assets/Images/bg.webp'

export default function Feedback(){


    return <>
      <Breadcrumbs title="Feedback" pagename="feedback" bgImage={bgFeed} />
      <Reviews />
      <Awards />
      </>
}