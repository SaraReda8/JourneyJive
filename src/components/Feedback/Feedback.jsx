import { React } from 'react';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';
import Reviews from './../Reviews/Reviews';
import Awards from './../Awards/Awards';
import bgFeed from '../../Assets/Images/bg.jpg'

export default function Feedback(){


    return <>
      <Breadcrumbs title="Feedback" pagename="feedback" bgImage={bgFeed} />
      <Reviews />
      <Awards />
      </>
}