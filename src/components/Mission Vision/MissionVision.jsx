import React from 'react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="mv-container">
        <div className="mv-card">
          <h3>Our Mission</h3>
          <p>
          To provide advanced tracking and automation solutions that drive precision, efficiency, and operational excellence. We are committed to empowering businesses through dependable technology, innovative thinking, and transparent collaboration that builds long-term trust and value.
          </p>
        </div>
        <div className="mv-card">
          <h3>Our Vision</h3>
          <p>
          To be the global benchmark for tracking and automation excellence — trusted for our technological leadership, uncompromising quality, and dedication to transforming how the world moves, monitors, and manages data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;