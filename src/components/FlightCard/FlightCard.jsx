// src/components/FlightCard.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../wishlist/WishlistContext";

import "./FlightCard.css"; // ✅ styling

const FlightCard = ({ flight }) => {
  const { wishlist, toggleWishlist } = useWishlist();
  const isWished = wishlist.find((f) => f.id === flight.id);

  return (
    <div className="flight-card">
      <div>
        <h3>{flight.route}</h3>
        <p>{flight.time}</p>
      </div>

      <button
        className={`heart-btn ${isWished ? "active" : ""}`}
        onClick={() => toggleWishlist(flight)}
      >
        <FaHeart />
      </button>
    </div>
  );
};

export default FlightCard;

