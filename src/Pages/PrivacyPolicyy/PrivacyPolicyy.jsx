import React from 'react';
import Style from './PrivacyPolicyy.module.css';
import { FaUserShield, FaUser, FaEnvelopeOpen, FaCookieBite, FaLock, FaExclamationCircle, FaFileContract, FaEnvelope } from 'react-icons/fa';

export default function PrivacyPolicyy() {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={`${Style['card-header']} bg-white text-dark text-center title`}>
          <h3 className="title mb-0"><FaUserShield /> Privacy Policy</h3>
        </div>
        <div className="card-body">
          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaFileContract /> 1. Introduction</h2>
            <p className="text-muted">
              This Privacy Policy outlines how JourneyJive collects, uses, and protects your personal data.
              By using our site, you consent to the terms outlined here.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start "><FaUser /> 2. Information Collection</h2>
            <p className="text-muted">
              We collect information to provide a better experience. This includes account details,
              transaction history, and other personal data necessary for our services.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaEnvelopeOpen /> 3. Email Communication</h2>
            <p className="text-muted">
              By providing your email, you agree to receive updates and promotional content.
              You may opt out anytime via the unsubscribe link.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaCookieBite /> 4. Cookies and Tracking</h2>
            <p className="text-muted">
              We use cookies to enhance user experience. You can disable cookies via your browser settings,
              but some features may be impacted.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaLock /> 5. Data Security</h2>
            <p className="text-muted">
              We prioritize the security of your data with industry-standard encryption and secure storage.
              However, no system is entirely foolproof.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaExclamationCircle /> 6. Third-Party Sharing</h2>
            <p className="text-muted">
              Your information will not be shared with third parties without your consent, except as required by law.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaFileContract /> 7. Policy Changes</h2>
            <p className="text-muted">
              We may update our Privacy Policy periodically. Changes will be posted on this page
              and take effect immediately upon posting.
            </p>
          </section>

          <section className="mb-4">
            <h2 className="fs-4 fw-bold text-start"><FaEnvelope /> 8. Contact Us</h2>
            <p className="text-muted">
              If you have questions about this Privacy Policy, please reach out to us at 
              <a href="mailto:support@JourneyJive.com" className={Style['text-main']}><strong> support@JourneyJive.com</strong></a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
