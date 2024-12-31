import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";


import Logo from "../../Assets/Images/header.png";

import Visa from "../../Assets/Images/Visa.jpg";
import MasterCard from "../../Assets/Images/MasterCard.jpg";
import PayPal from "../../Assets/Images/PayPal.jpg";
import InstaPay from "../../Assets/Images/instapay.jpg";

export default function Footer() {
  return (
    <>


      <footer className={`${styles.footer} pt-5 pb-4 mt-3`}>
  <div className="container">
    <div className={`row ${styles.footerRow}`}>
      {/* Rotating Logo Section */}
      <div className="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
        <div className={styles.circleContainer}>
          <svg className={styles.circularText} viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
            ></path>
            <text>
              <textPath href="#circlePath" startOffset="0%">
                JourneyJive Travel Agency • Your Gateway to Endless Adventures •
              </textPath>
            </text>
            
          </svg>
          <div className={styles.logo}>
            <img src={Logo} alt="Logo" className={styles.logoImage} loading="lazy"  />
            <div className={styles.centerText}>
              <h3>JourneyJive</h3>
              <p>Since: 2020</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links and Sections */}
      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className={`${styles.title} text mb-4`}>Information</h5>
        <ul className="list-unstyled">
          <li>
          <Link to="/Newsletter" className={styles.animatedLink}>
              New
            </Link>     
          </li>
          <li>   
                <Link to="/About" className={styles.animatedLink}>
              About Company
            </Link></li>
 
          <li>
            <Link to="/FAQs" className={styles.animatedLink}>
            FAQs
            </Link>
          </li>
          <li>
            <Link to="/Blog" className={styles.animatedLink}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className={styles.animatedLink}>
              Contact Channels
            </Link>
          </li>
        </ul>
      </div>



      {/* Reach Us */}
      <div className="col-lg-3 col-md-6 mb-4">
        <h5 className={`${styles.title} text mb-4`}>Reach Us</h5>
        <ul className={`${styles.reachUs} list-unstyled`}>
          <li>
            <div className={`${styles.iconWrapper}`}>
              <div className={styles.iconCircle}>
                <HiOutlinePhone />
              </div>
              <span>+880 176 1111 456</span>
            </div>
          </li>
          <li>
            <div className={`${styles.iconWrapper}`}>
              <div className={styles.iconCircle}>
                <HiOutlineMail />
              </div>
              <span>info@example.com</span>
            </div>
          </li>
          <li>
            <div className={`${styles.iconWrapper}`}>
              <div className={styles.iconCircle}>
                <MdLocationOn />
              </div>
              <span>168/170, Avenue 01, Mirpur DOHS, Bangladesh</span>
            </div>
          </li>
        </ul>
      </div>
        {/* Quote and Search Engine */}
        <div className="col-lg-3 col-md-6 mb-4">
            <h5 className={`${styles.title} text mb-4`}>              "The journey of a thousand miles begins with one step."
</h5>
     
            <input
              type="text"
              placeholder="Search..."
              className={styles.searchInput}
            />
            <div className={styles.icons}>
              <img src={Visa} alt="Visa" className={styles.icon} loading="lazy" />
              <img src={MasterCard} alt="MasterCard" className={styles.icon}loading="lazy"  />
              <img src={PayPal} alt="PayPal" className={styles.icon}loading="lazy"  />
              <img src={InstaPay} alt="InstaPay" className={styles.icon}loading="lazy"  />
            </div>
          </div>

        </div>



    {/* Footer Bottom Row */}
    <div className="row mt-5">
      <div className="col-md-6 text-light">
        <p className="text-light">&copy; {new Date().getFullYear()} Journey Jive. All rights reserved.</p>
      </div>
      <div className="col-md-6 text-end">
        <Link to="/PrivacyPolicy" className={styles.animatedLink}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link to="/Terms" className={styles.animatedLink}>
          Terms of Use
        </Link>
      </div>
    </div>
  </div>
</footer>

    </>
  );
}
