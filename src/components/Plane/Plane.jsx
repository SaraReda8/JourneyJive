import React from "react";
import styles from "./Plane.module.css";

// Importing assets
import headerBg from "../../Assets/Images/header-bg.jpg";
import planeImg from "../../Assets/Images/header.png";

export default function Plane() {
  return (
    <div className={styles.container}>
      {/* Background */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${headerBg})` }}
      ></div>

      {/* Content */}
      <div className={styles.content}>
        {/* Text Section */}
        <div className={styles.text}>
          <p>Elevate Your Travel Journey</p>
          <h1>Experience The Magic Of Flight!</h1>
          <div className={styles.header__btns}>
            <button className={styles.btn2}>Book A Trip Now</button>
        
          </div>
        </div>

        {/* Plane Image */}
        <img
          src={planeImg}
          alt="Plane flying"
          className={styles.plane}
        />
      </div>
    </div>
  );
}
