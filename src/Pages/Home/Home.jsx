import { React } from 'react';
import Plane from './../../components/Plane/Plane';
import TopDestinations from '../../components/TopDestinations/TopDestinations';
import DynamicADv from './../../components/DynamicADv/DynamicADv';
import Popular from './../../components/Popular/Popular';
import Reviews from './../../components/Reviews/Reviews';
import About from './../About/About';

export default function Home(){

    return <>
  <div>
    <Plane/>
    <TopDestinations/>
    <DynamicADv/>
    <Popular/>
    <Reviews/>
    <About/>
  </div>

    </>
}