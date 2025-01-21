import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Icons/airplane.svg';
import {
  FaUmbrellaBeach,
  FaInfoCircle,
  FaBlog,
  FaBook,
  FaNewspaper,
  FaFileAlt,
  FaShieldAlt,
  FaQuestionCircle,
  FaIdCard,
  FaHandshake,
  FaCommentDots,
} from 'react-icons/fa';
import Style from './Navbar.module.css';

const NavBar = React.memo(() => {
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className={Style.navbar}>
      <Container>
        {/* Logo and Brand */}
        <Navbar.Brand as={Link} to="/" className={`d-flex align-items-center ${Style.brand}`}>
          <img
            src={AirplaneLogo}
            alt="logo"
            className={Style.logo}
            width="32" 
            height="32"  
          />
          <span className={Style.brandName}>JourneyJive</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Links */}
          <Nav className={`mx-auto ${Style.navLinks}`}>
            <Nav.Link
              as={Link}
              to="/"
              className={`${Style.navlink} ${activeLink === '/' ? Style.active : ''}`}
              onClick={() => handleLinkClick('/')}
            >
              Home
            </Nav.Link>

            <NavDropdown
              title="Holidays"
              id="holidays-dropdown"
              className={Style.navDropdown}
              aria-label="Holidays Dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/Holidays"
                className={`${Style.navlink} ${activeLink === '/Holidays' ? Style.active : ''}`}
                onClick={() => handleLinkClick('/Holidays')}
              >
                <FaUmbrellaBeach className={Style.icon} /> Holiday
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/HolidayDetails"
                className={`${Style.navlink} ${activeLink === '/HolidayDetails' ? Style.active : ''}`}
                onClick={() => handleLinkClick('/HolidayDetails')}
              >
                <FaInfoCircle className={Style.icon} /> Holiday Details
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/CityBreaks"
              className={`${Style.navlink} ${activeLink === '/CityBreaks' ? Style.active : ''}`}
              onClick={() => handleLinkClick('/CityBreaks')}
            >
              Hotels
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/Destinations"
              className={`${Style.navlink} ${activeLink === '/Destinations' ? Style.active : ''}`}
              onClick={() => handleLinkClick('/Destinations')}
            >
              Destinations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/TravelList"
              className={`${Style.navlink} ${activeLink === '/TravelList' ? Style.active : ''}`}
              onClick={() => handleLinkClick('/TravelList')}
            >
              TravelList
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/ContactUs"
              className={`${Style.navlink} ${activeLink === '/ContactUs' ? Style.active : ''}`}
              onClick={() => handleLinkClick('/ContactUs')}
            >
              ContactUs
            </Nav.Link>

            <NavDropdown
              title="Pages"
              id="pages-dropdown"
              className={`${Style.navDropdown} mega-menu`}
              aria-label="Pages Dropdown"
            >
              <div className={Style.megaMenuContainer}>
                <div className={Style.column}>
                  <NavDropdown.Item
                    as={Link}
                    to="/About"
                    className={`${Style.megaMenuItem} ${activeLink === '/About' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/About')}
                  >
                    <FaInfoCircle className={Style.icon} /> About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Blog"
                    className={`${Style.megaMenuItem} ${activeLink === '/Blog' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/Blog')}
                  >
                    <FaBlog className={Style.icon} /> Blog
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Gallery"
                    className={`${Style.megaMenuItem} ${activeLink === '/Gallery' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/Gallery')}
                  >
                    <FaBook className={Style.icon} /> Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Newsletter"
                    className={`${Style.megaMenuItem} ${activeLink === '/Newsletter' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/Newsletter')}
                  >
                    <FaNewspaper className={Style.icon} /> Newsletter
                  </NavDropdown.Item>
                </div>

                <div className={Style.column}>
                  <NavDropdown.Item
                    as={Link}
                    to="/TourGuide"
                    className={`${Style.megaMenuItem} ${activeLink === '/TourGuide' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/TourGuide')}
                  >
                    <FaHandshake className={Style.icon} /> Tour Guides
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Feedback"
                    className={`${Style.megaMenuItem} ${activeLink === '/Feedback' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/Feedback')}
                  >
                    <FaCommentDots className={Style.icon} /> Feedback
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/Booking"
                    className={`${Style.megaMenuItem} ${activeLink === '/Booking' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/Booking')}
                  >
                    <FaIdCard className={Style.icon} /> Booking
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/FAQs"
                    className={`${Style.megaMenuItem} ${activeLink === '/FAQs' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/FAQs')}
                  >
                    <FaQuestionCircle className={Style.icon} /> FAQs
                  </NavDropdown.Item>
                </div>

                <div className={Style.column}>
                  <NavDropdown.Item
                    as={Link}
                    to="/Terms"
                    className={`${Style.megaMenuItem} ${activeLink === '/Terms' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/Terms')}
                  >
                    <FaFileAlt className={Style.icon} /> Terms
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/PrivacyPolicy"
                    className={`${Style.megaMenuItem} ${activeLink === '/PrivacyPolicy' ? Style.active : ''}`}
                    onClick={() => handleLinkClick('/PrivacyPolicy')}
                  >
                    <FaShieldAlt className={Style.icon} /> Policy
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default NavBar;