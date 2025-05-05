import React from "react";
import "./HeroSection.css";
import { FiSend } from "react-icons/fi";

const HeroSection = () => {
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
            <h2>Stay Updated Instantly</h2>
            <p>Subscribe to live notifications or track a specific flight</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Select Airline or Airport </option>
                <optgroup label="Airlines">
                  <option value="delta">Delta Air Lines</option>
                  <option value="american">American Airlines</option>
                  <option value="united">United Airlines</option>
                  <option value="emirates">Emirates</option>
                  <option value="qatar">Qatar Airways</option>
                  <option value="lufthansa">Lufthansa</option>
                  <option value="indigo">IndiGo</option>
                </optgroup>
                <optgroup label="Airports">
                  <option value="jfk">JFK - New York (John F. Kennedy Intl.)</option>
                  <option value="lax">LAX - Los Angeles Intl.</option>
                  <option value="lhr">LHR - London Heathrow</option>
                  <option value="dub">DXB - Dubai Intl.</option>
                  <option value="del">DEL - Indira Gandhi Intl.</option>
                  <option value="sin">SIN - Singapore Changi</option>
                </optgroup>
              </select>
              <textarea placeholder="Tell us about your needs" rows="3"></textarea>
              <button type="submit" className="submit-btn">
                <FiSend className="send-icon" /> Track Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;