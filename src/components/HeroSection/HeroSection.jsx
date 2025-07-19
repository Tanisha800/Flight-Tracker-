import React, { useState } from "react";
import "./HeroSection.css";
import { FiSend } from "react-icons/fi";

const HeroSection = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    e.target.reset();

    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-left">
          <h1>Track Flight in Real-Time</h1>
          <p>
            Get accurate flight information, live tracking, and instant alerts for any flight worldwide.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Track a Flight</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="contact-card">
            <h2>Stay Updated Instantly!</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Tell us about your needs" rows="3"></textarea>
              <button type="submit" className="submit-btn">
                <FiSend className="send-icon" />Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Toast Message */}
      {showToast && (
        <div className="toast">
          <strong>Message Sent!</strong>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
