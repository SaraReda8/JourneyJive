import React from 'react';
import Style from './TermOfService.module.css';
import { FaUser, FaMapMarkedAlt, FaMoneyCheck, FaBan, FaPassport, FaShieldAlt, FaGlobe, FaEnvelope, FaGavel } from 'react-icons/fa';

export default function TermOfServices() {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={`${Style['card-header']} bg-white text-dark text-center title`}>
          <h3 className="title mb-0"><FaGlobe /> Terms of Service</h3>
        </div>
        <div className="card-body">
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaMapMarkedAlt /> 1. Introduction</h2>
            <p className="text-muted">
              Founded in 2020, JourneyJive is dedicated to creating unforgettable travel experiences. By using our website, you agree to these terms.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaUser /> 2. Use of Website</h2>
            <p className="text-muted">
              You must be at least 18 years old to use JourneyJive. Ensure all information you provide is accurate and complete.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaMoneyCheck /> 3. Booking Policies</h2>
            <p className="text-muted">
              Reservations require full payment. All bookings are subject to availability, and we reserve the right to adjust pricing.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaBan /> 4. Cancellations and Refunds</h2>
            <p className="text-muted">
              Cancellations must be submitted in writing. JourneyJive is not liable for cancellations caused by factors beyond our control.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaPassport /> 5. Responsibilities of Travelers</h2>
            <p className="text-muted">
              Travelers are responsible for obtaining all necessary travel documentation. JourneyJive cannot be held responsible for disruptions due to lack of documentation.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaShieldAlt /> 6. Third-Party Services</h2>
            <p className="text-muted">
              JourneyJive collaborates with third-party providers. Their services are governed by their own terms, and JourneyJive is not liable for issues arising from third-party actions.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaGavel /> 7. Limitation of Liability</h2>
            <p className="text-muted">
              JourneyJive is not responsible for any indirect or incidental damages resulting from your use of our services. Our liability is limited to the amount paid for the specific service.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaGlobe /> 8. Governing Law</h2>
            <p className="text-muted">
              These terms are governed by the laws of [Your Jurisdiction]. Any disputes arising under these terms shall be handled within this jurisdiction.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaEnvelope /> 9. Contact Us</h2>
            <p className="text-muted">
              If you have questions, contact us at <a href="mailto:support@journeyjive.com" className={Style['text-main']}><strong>support@journeyjive.com</strong></a>.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
}
