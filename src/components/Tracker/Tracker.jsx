import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Tracker.css";

function Tracker() {
  const [showDetails, setShowDetails] = useState(false);

  const handleTrack = () => {
    // You can add validation or API call here
    setShowDetails(true);
  };

  return (
    <div className="tracker-section">
      <div className="tracker-subtitle">
        <h2 className="tracker-name">Flight Tracker</h2>
        <p className="tracker-title">
          Track flights in real-time and plan your journey
        </p>
      </div>

      <div className="input_section">
        <h3 className="inputname">Track Flight</h3>
        <div className="input">
          <input
            className="inputbox"
            placeholder="Enter Flight Number (e.g.AI202)"
          />
          <button className="inputbutton" onClick={handleTrack}>
            <SearchIcon />
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="flight-details">
          <div className="card-header">
            <h2>TEST</h2>
            <div className="status-tag">On Time</div>
          </div>
          <div className="card-body">
            <div className="row">
              <div>
                <p className="label">Airline</p>
                <p className="value">Air India</p>
              </div>
              <div>
                <p className="label">Route</p>
                <p className="value">Delhi (DEL) → Mumbai (BOM)</p>
              </div>
              <div>
                <p className="label">ETA</p>
                <p className="value">14:30</p>
              </div>
              <div>
                <p className="label">Gate</p>
                <p className="value">A12</p>
              </div>
            </div>
            <div className="aircraft-box">
              <p className="label">Aircraft Type</p>
              <p className="value">Boeing 737-800</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tracker;

