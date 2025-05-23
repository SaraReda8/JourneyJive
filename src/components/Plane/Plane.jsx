import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import styles from "./Plane.module.css";

import headerBg from "../../assets/Images/header-bg.webp";
import planeImg from "../../assets/Images/header.webp";

export default function Plane() {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/HolidayDetails"); 
  };

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${headerBg})` }}
        role="img"
        aria-label="Travel background"
      ></div>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Text Section */}
        <div className={styles.text}>
          <p>Elevate Your Travel Journey</p>
          <h1>Experience The Magic Of Flight!</h1>
          <button
            className="btn2"
            onClick={handleBookClick}
            aria-label="Explore New Deals"
          >
            Explore New Deals
          </button>
        </div>

        {/* Plane Image */}
        <img
          src={planeImg}
          alt="Plane flying"
          className={styles.plane}
          fetchPriority="high"
          width="1200"  
          height="400"  
        />
      </div>
    </div>
  );
}