import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import NotFound from './Pages/NotFound/NotFound.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Holidays from './Pages/Holidays/Holidays';
import TermOfServices from './Pages/TermOfService/TermOfService.jsx';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import CityBreaks from './Pages/CityBreaks/CityBreaks';
import Gallery from './Pages/Gallery/Gallery.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TourGuide from './Pages/TourGuide/TourGuide.jsx';
import Destinations from './Pages/Destinations/Destinations';
import HolidayDetails from './Pages/Holidays/HolidayDetails.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import PrivacyPolicyy from './Pages/PrivacyPolicyy/PrivacyPolicyy.jsx';
import Feedback from './Pages/Feedback/Feedback.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Faq from './Pages/Faq/Faq.jsx';
import BaseForm from './components/Form/Form';
import Booking from './Pages/Booking/Booking.jsx';
import Newsletter from './Pages/Newsletter/Newsletter';
import TravelList from './Pages/TravelList/TravelList';
import ScrollReveal from './components/ScrollReveal/ScrollReveal.jsx';
// Configure the router
const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
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
        { path: 'travelList', element: <TravelList /> },
        {path: 'scrollreveal', element: <ScrollReveal />},

      ],
    },
  ],

);


function App() {
  return <RouterProvider router={routers} />;
}

export default App;

