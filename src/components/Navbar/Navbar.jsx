import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Icons/airplane.svg';
import {
    FaUmbrellaBeach,
    FaInfoCircle,
    FaBlog,
    FaEnvelope,
    FaBook,
    FaNewspaper,
    FaLifeRing,
    FaFileAlt,
    FaShieldAlt,
    FaQuestionCircle,
    FaIdCard,
    FaHandshake,
    FaCommentDots
} from 'react-icons/fa';
import Style from './Navbar.module.css';

const NavBar = React.memo(() => {
    return (
        <Navbar expand="lg" className={Style.navbar}>
            <Container>
                {/* Logo and Brand */}
                <Navbar.Brand as={Link} to="/Home" className={`d-flex align-items-center ${Style.brand}`}>
                    <img src={AirplaneLogo} alt="logo" className={Style.logo} />
                    <span className={Style.brandName}>JourneyJive</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Centered Links */}
                    <Nav className={`mx-auto ${Style.navLinks}`}>
                        <Nav.Link as={Link} to="/Home" className={Style.navlink}>Home</Nav.Link>

                        <NavDropdown title="Holidays" id="holidays-dropdown" className={Style.navDropdown}>
                            <NavDropdown.Item as={Link} to="/Holidays">
                                <FaUmbrellaBeach className={Style.icon} /> Holiday
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/HolidayDetails">
                                <FaInfoCircle className={Style.icon} /> Holiday Details
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={Link} to="/CityBreaks" className={Style.navlink}>Hotels</Nav.Link>
                        <Nav.Link as={Link} to="/Destinations" className={Style.navlink}>Destinations</Nav.Link>
                        <Nav.Link as={Link} to="/About" className={Style.navlink}>About</Nav.Link>

                        <NavDropdown title="Pages" id="pages-dropdown" className={`${Style.navDropdown} mega-menu`}>
                        <div className="container-fluid p-3 "> {/* Increased width */}

<div className="row widthc">

{/* Column 1 */}

<div className="col-lg-4 col-md-6 mb-4">

<NavDropdown.Item as={Link} to="/About" className={Style.megaMenuItem}>

<FaInfoCircle className={Style.icon} /> About Us

</NavDropdown.Item>

<NavDropdown.Item as={Link} to="/Blog" className={Style.megaMenuItem}>

<FaBlog className={Style.icon} /> Blog

</NavDropdown.Item>

<NavDropdown.Item as={Link} to="/ContactUs" className={Style.megaMenuItem}>

<FaEnvelope className={Style.icon} /> Contact Us

</NavDropdown.Item>

<NavDropdown.Item as={Link} to="/Gallery" className={Style.megaMenuItem}>

<FaBook className={Style.icon} /> Gallery

</NavDropdown.Item>

</div>

                                    {/* Column 2 */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <NavDropdown.Item as={Link} to="/Newsletter" className={Style.megaMenuItem}>
                                            <FaNewspaper className={Style.icon} /> Newsletter
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/ContactUs" className={Style.megaMenuItem}>
                                            <FaLifeRing className={Style.icon} /> Support Center
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/TourGuide" className={Style.megaMenuItem}>
                                            <FaHandshake className={Style.icon} /> Tour Guides
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/Feedback" className={Style.megaMenuItem}>
                                            <FaCommentDots className={Style.icon} /> Feedback
                                        </NavDropdown.Item>
                                    </div>

                                    {/* Column 3 */}
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <NavDropdown.Item as={Link} to="/Terms" className={Style.megaMenuItem}>
                                            <FaFileAlt className={Style.icon} /> Terms
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/PrivacyPolicy" className={Style.megaMenuItem}>
                                            <FaShieldAlt className={Style.icon} /> Policy
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/faqs" className={Style.megaMenuItem}>
                                            <FaQuestionCircle className={Style.icon} /> FAQs
                                        </NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/New" className={Style.megaMenuItem}>
                                            <FaIdCard className={Style.icon} /> New
                                        </NavDropdown.Item>
                                    </div>
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