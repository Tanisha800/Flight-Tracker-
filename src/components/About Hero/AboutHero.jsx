import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <>
    <section className="about-hero">
      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <h1>Building Precision Through 
          <br/>Innovation</h1>
          <p>Your trusted partner in advanced tracking and automation solutions since 2010</p>
        </div>
      </div>
      
    </section>
    <section className="our-history">
      <div className="container">
        <h2>Our History</h2>
        <p>
        Founded in 2010, Aerotracker was born out of a commitment to bring precision, reliability, and innovation to the world of tracking and automation. What began as a small group of passionate engineers has evolved into a trusted name in advanced technological solutions, supporting clients across industries with cutting-edge systems.
        </p>
        <p>
        Over the years, we have broadened our capabilities, expanded our service portfolio, and invested in top-tier talent. With every milestone, we've upheld our dedication to performance, security, and customer satisfaction. From real-time tracking to smart automation, our journey reflects a relentless drive toward innovation and exceeding expectations.
        </p>
      </div>
    </section>
    </>

  );
};

export default AboutHero;
  
  