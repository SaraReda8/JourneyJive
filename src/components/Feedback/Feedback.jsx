import { React } from 'react';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';
import Reviews from './../Reviews/Reviews';
import Awards from './../Awards/Awards';


export default function Feedback(){


    return <>
      <Breadcrumbs title="Feedback" pagename="feedback" />
      <Reviews />
      <Awards />
      </>
}