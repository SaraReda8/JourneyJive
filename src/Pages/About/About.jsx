import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faClock, faLeaf, faCheckCircle, faUsers, faStar } from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../Assets/Images/aboutus.webp";
import Awards from "../../components/Awards/Awards";
import styles from "./About.module.css";
import Team from './../../components/Team/Team';

const About = () => {
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
      {/* Hero Section */}
      <section className={`py-4 ${styles.heroSection}`}>
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <img
                src={aboutImg}
                alt="About Us"
                className="img-fluid rounded-5"
                width="600"  // Add actual width
                height="400" // Add actual height
              />
            </Col>
            <Col md="4">
              <h1 className="fw-bold">Welcome to JourneyJive</h1>
              <p>Experience the best of travel with our custom plans, eco-friendly practices, and exceptional support.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission and Vision */}
      <section className="py-4">
        <Container>
          <Row>
            <Col md="6">
              <h2 className="fw-bold">Our Mission</h2>
              <p>To connect people with unforgettable travel experiences, fostering cultural exchange and sustainability.</p>
            </Col>
            <Col md="6">
              <h2 className="fw-bold">Our Vision</h2>
              <p>To become a global leader in creating personalized, enriching journeys that celebrate the diversity of the world.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-4 bg-white">
        <Container>
          <h2 className="fw-bold text-center">Our Journey</h2>
          <ul className={`timeline ${styles.timeline}`}>
            <li>
              <h5>2020</h5>
              <p>Founded with a passion for travel and exploration, JourneyJive was born to provide personalized and meaningful travel experiences.</p>
            </li>
            <li>
              <h5>2021</h5>
              <p>Launched our eco-friendly travel initiatives, focusing on sustainable tourism to protect the environment.</p>
            </li>
            <li>
              <h5>2023</h5>
              <p>Partnered with 400+ travel providers worldwide to offer an even broader selection of destinations and services.</p>
            </li>
          </ul>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-4">
        <Container>
          <h2 className="fw-bold text-center">Why Choose JourneyJive?</h2>
          <Row>
            {cardData.map((card, index) => (
              <Col md="6" key={index} className="mb-3">
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
      </section>
      
      <Team />

      <Awards />
    </>
  );
};

export default About;