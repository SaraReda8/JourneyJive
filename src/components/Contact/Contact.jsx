import React from "react";
import styles from "./Contact.module.css";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import Form from '../Form/Form';
import Breadcrumbs from './../Breadcrumbs/Breadcrumbs';
import bgContact from '../../../src/Assets/Images/bg.jpg';
import Map from './../Map/Map';
export default function ContactUs() {
  

  return (
    <>
      {/* Header Section */}
      <Breadcrumbs title="Contact Us" pagename="Contact Us" bgImage={bgContact} />

      {/* Main Container */}
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>JourneyJive Travel Agency Inc.</h2>
        <p className={styles.text}>
          But I must explain to you how all this mistaken idea of denouncing <br/>
          pleasure and praising pain was born and I will give you a complete<br/>
          account of the system, and expound the actual teachings of the great<br/>
          explorer of the truth, the master-builder of human happiness.
        </p>

        {/* Cards Section */}
        <div className="row">
          {/* Address Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`card text-center ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <MdLocationOn />
                </div>
              </div>
              <h3 className={styles.cardTitle}>Address</h3>
              <p className={styles.cardBody}>
                168/170, Ave 01, Old York Drive Rich, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          {/* Call Us Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`card text-center ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <HiOutlinePhone />
                </div>
              </div>
              <h3 className={styles.cardTitle}>Call Us!</h3>
              <p className={styles.cardBody}>
                +88 0156 986 2560 <br />
                +880 176 1111 456
              </p>
            </div>
          </div>

          {/* Email Info Card */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={`card text-center ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <div className={styles.iconCircle}>
                  <HiOutlineMail />
                </div>
              </div>
              <h3 className={styles.cardTitle}>Email Info</h3>
              <p className={styles.cardBody}>
                info@companyname123.com <br />
                info@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Form/>
      <Map/>


    </>
  );
}
