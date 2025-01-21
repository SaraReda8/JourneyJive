import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import styles from "./Plane.module.css";

import headerBg from "../../Assets/Images/header-bg.webp";
import planeImg from "../../Assets/Images/header.webp";

export default function Plane() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/HolidayDetails'); 
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${headerBg})` }}
      ></div>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>Elevate Your Travel Journey</p>
          <h1>Experience The Magic Of Flight!</h1>
          <button className='btn2' onClick={handleBookClick}>
          Explore New Deals          </button>
        </div>
        <img
          src={planeImg}
          alt="Plane flying"
          className={styles.plane}
          fetchpriority="high" 
        />
      </div>
    </div>
  );
}