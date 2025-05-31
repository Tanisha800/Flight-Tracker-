import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-subtitle">We’d love to hear from you!</p>

      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <a href="tel:+911234567890">+91 1234567890</a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:contact@aerotracker.com">contact@aerotracker.com</a>
        </div>

        <div className="contact-item">
          <span className="contact-label">Address:</span>
          <p>Rishihood University, Sonipat</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;