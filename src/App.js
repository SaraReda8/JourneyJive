import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Holidays from './Pages/Holidays/Holidays';
import TermOfServices from './components/TermOfService/TermOfService';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import Gallery from './components/Gallery/Gallery';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourGuide from './components/TourGuide/TourGuide';
import Destinations from './Pages/Destinations/Destinations';
import HolidayDetails from './Pages/Holidays/HolidayDetails.jsx';
import Contact from './components/Contact/Contact';
import PrivacyPolicyy from './components/PrivacyPolicyy/PrivacyPolicyy';
import Feedback from './components/Feedback/Feedback';
import Blog from './components/Blog/Blog';
import Faq from './components/Faq/Faq';
import Newsletter from './components/Newsletter/Newsletter';
import BaseForm from './components/Form/Form';
import Booking from './components/Booking/Booking';
const routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index:true , element: <Home /> },
      { path: '*', element: <NotFound /> },
      { path: 'about', element: <About /> },
      { path: 'terms', element: <TermOfServices /> },
      { path: 'citybreaks', element: <CityBreaks /> },
      { path: 'faqs', element: <Faq /> },
      { path: 'destinations', element: <Destinations /> },
      { path: 'holidayDetails', element: <HolidayDetails /> },
      { path: 'privacypolicy', element: <PrivacyPolicyy /> },
      { path: 'feedback', element: <Feedback /> },
      { path: 'blog', element: <Blog /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'baseform', element: <BaseForm /> },
      { path: 'holidays', element: <Holidays /> },
      { path: 'tourguide', element: <TourGuide /> },
      { path: 'ContactUs', element: <Contact /> },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'Booking', element: <Booking /> },


    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;