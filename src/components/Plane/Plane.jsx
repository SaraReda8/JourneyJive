import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import styles from "./Plane.module.css";

// Import assets
import headerBg from "../../Assets/Images/header-bg.jpg";
import planeImg from "../../Assets/Images/header.png";

export default function Plane() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/book'); // Navigate to the '/book' route
  };

  return (
    <div className={styles.container}>
      {/* Background */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${headerBg})` }}
      ></div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Elevate Your Travel Journey</p>
          <h1>Experience The Magic Of Flight!</h1>
          <button className='btn2' onClick={handleBookClick}>
            Book A Trip Now
          </button>
        </div>
        <img
          src={planeImg}
          alt="Plane flying"
          className={styles.plane}
          loading="lazy"
        />
      </div>
    </div>
  );
}
