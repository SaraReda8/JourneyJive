import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faClock, faLeaf, faCheckCircle, faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../Assets/Images/destinations-hero-bg.jpg";
import icons1 from "../../Assets/Images/destination.png";
import icons2 from "../../Assets/Images/best-price.png";
import icons3 from "../../Assets/Images/quick.png";
import Awards from "../../components/Awards/Awards";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import styles from "./About.module.css";
import about from '../../Assets/Images/aboutus.jpg';

const About = () => {
  useEffect(() => {
    document.title = "About Us";
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    {
      title: "Customized Travel Plans",
      description: "Each itinerary is crafted with your preferences, interests, and needs in mind.",
      icon: faMapMarkedAlt,
    },
    {
      title: "Experienced Team",
      description: "Our travel experts bring years of industry experience, along with an insider's perspective on every destination.",
      icon: faUsers,
    },
    {
      title: "Commitment to Quality",
      description: "We partner with top-tier accommodations, guides, and services to ensure a smooth, memorable journey.",
      icon: faCheckCircle,
    },
    {
      title: "24/7 Support",
      description: "We’re with you at every step, from planning to traveling and beyond.",
      icon: faClock,
    },
    {
      title: "Eco-Friendly Practices",
      description: "We strive to promote sustainable travel, giving back to communities and protecting the environment wherever we go.",
      icon: faLeaf,
    },
    {
      title: "Customer Reviews",
      description: "Honest reviews from verified travelers help future customers make informed decisions.",
      icon: faStar,
    },
  ];

  return (
    <>
      <Breadcrumbs title="About Us" pagename="About Us" />
      <section className="py-5">
        <Container>
        <Row>
  <Col md="8">
    <div className={styles.aboutContent}>
      <div className={`position-relative ${styles.aboutImage}`}>
        <img
          src={aboutImg}
          alt="About"
          className="img-fluid rounded-5"
        />
        <div
          className={`position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm ${styles.aboutImageContent}`}
        >
          <h3 className="h2 fw-bold text-white ">
            HOW WE ARE BEST FOR TRAVEL!
          </h3>
        </div>
      </div>
    </div>
    <h2 className="h2 fw-bold pt-4 pb-2">HOW WE ARE BEST FOR TRAVEL!</h2>
    <p>
      Founded in 2020, JourneyJive was built on a passion for exploration and the desire to create unforgettable travel experiences.
    </p>
  </Col>
  <Col md="4">
    {/* First Section */}
    <Card className="border-0 shadow-sm rounded-3 mb-4">
      <Card.Body className="text-center">
        <div className="d-flex justify-content-center align-items-center my-2">
          <div className="rounded-circle bg-light shadow-sm p-2">
            <img src={icons1} alt="icon" className="img-fluid" />
          </div>
        </div>
        <Card.Title className="fw-bold h5">50+ Destinations</Card.Title>
        <p>Explore breathtaking locations across the globe, from iconic landmarks to hidden gems.</p>
      </Card.Body>
    </Card>

    {/* Second Section */}
    <Card className="border-0 shadow-sm rounded-3 mb-4">
      <Card.Body className="text-center">
        <div className="d-flex justify-content-center align-items-center my-2">
          <div className="rounded-circle bg-light shadow-sm p-2">
            <img src={icons2} alt="icon" className="img-fluid" />
          </div>
        </div>
        <Card.Title className="fw-bold h5">Affordable Packages</Card.Title>
        <p>Enjoy exclusive travel deals that fit your budget without compromising quality.</p>
      </Card.Body>
    </Card>

    {/* Third Section */}
    <Card className="border-0 shadow-sm rounded-3 mb-4">
      <Card.Body className="text-center">
        <div className="d-flex justify-content-center align-items-center my-2">
          <div className="rounded-circle bg-light shadow-sm p-2">
            <img src={icons3} alt="icon" className="img-fluid" />
          </div>
        </div>
        <Card.Title className="fw-bold h5">Hassle-Free Planning</Card.Title>
        <p>Save time with seamless bookings, curated itineraries, and expert support.</p>
      </Card.Body>
    </Card>
  </Col>
</Row>

        </Container>
      </section>

      <Container className={styles.container}>
  {/* About Section */}
  <div className={`row ${styles.borderSection}`}>
    <div className="col-md-6 d-flex justify-content-center">
      <img src={about} alt="About" loading="lazy" className={styles.aboutImg} />
    </div>
    <div className="col-md-6">
      <h3 className={styles.title}> JourneyJive: Your Gateway to Extraordinary Journeys</h3>
      <p className={styles.text}>
        Founded in 2020, JourneyJive was built on a passion for exploration and the desire to create unforgettable travel experiences.
        Every destination has a unique story, and we’re dedicated to connecting travelers with the wonders of the world in ways that
        are personalized, enriching, and memorable. At JourneyJive, we offer more than just itineraries; we design journeys that celebrate culture,
        nature, and adventure.
        Our expert-curated travel experiences ensure that every moment you spend on your journey is filled with meaning and wonder, creating memories that will stay with you for a lifetime. Join us at JourneyJive, where every adventure is a story waiting to be told.
      </p>
    </div>
  </div>

  {/* Why Choose Section */}
  <h3 className={styles.why}>Why Choose JourneyJive?</h3>
  <Row>
    {cardData.map((card, index) => (
      <Col md="6" key={index} className="mb-4">
        <Card className={`h-100 ${styles.card}`}>
          <Card.Body className="text-center">
            <FontAwesomeIcon icon={card.icon} className={styles.icon} />
            <h5 className="mt-3">{card.title}</h5>
            <p>{card.description}</p>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

      <Awards />
    </>
  );
};

export default About;
