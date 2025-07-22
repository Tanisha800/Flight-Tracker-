import React, { useState } from "react";
import "./Route.css";
import FlightCard from "../FlightCard/FlightCard";

function Route() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [directOnly, setDirectOnly] = useState(false);
  const [results, setResults] = useState(null);

  const staticRoutes = [
    {
      id: "AI101",
      departure_airport: "Indira Gandhi Intl (DEL)",
      arrival_airport: "Chhatrapati Shivaji Intl (BOM)",
      airline_name: "Air India",
      direct: true,
    },
    {
      id: "6E202",
      departure_airport: "Indira Gandhi Intl (DEL)",
      arrival_airport: "Chhatrapati Shivaji Intl (BOM)",
      airline_name: "IndiGo",
      direct: false,
    },
    {
      id: "SG303",
      departure_airport: "Kempegowda Intl (BLR)",
      arrival_airport: "Chhatrapati Shivaji Intl (BOM)",
      airline_name: "SpiceJet",
      direct: true,
    },
  ];

  const handleSearch = () => {
    if (!from || !to) {
      alert("Please enter both 'From' and 'To' locations");
      return;
    }

    const filteredRoutes = staticRoutes.filter(
      (route) =>
        route.departure_airport.toLowerCase().includes(from.toLowerCase()) &&
        route.arrival_airport.toLowerCase().includes(to.toLowerCase()) &&
        (!directOnly || route.direct)
    );

    setResults(filteredRoutes);
  };

  return (
    <div className="route-container">
      <h2 className="route-title">Plan Route</h2>

      <div className="route-inputs">
        <div>
          <label>From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="e.g., DEL"
          />
        </div>
        <div>
          <label>To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="e.g., BOM"
          />
        </div>
      </div>

      <div className="direct-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={directOnly}
            onChange={() => setDirectOnly(!directOnly)}
          />
          <span className="slider round"></span>
        </label>
        <span>Direct Flights Only</span>
      </div>

      <button className="search-btn" onClick={handleSearch}>
        Search Routes
      </button>

      {results && (
        <div className="results">
          <h3>Routes Found:</h3>
          {results.length > 0 ? (
            <div className="flight-results">
              {results.map((route) => (
                <FlightCard
                  key={route.id}
                  flight={{
                    id: route.id,
                    route: `${route.departure_airport} → ${route.arrival_airport}`,
                    time: "12:00",
                    airline: route.airline_name,
                    gate: "A1",
                    aircraft: "Boeing 737",
                  }}
                />
              ))}
            </div>
          ) : (
            <p>No routes found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Route;
