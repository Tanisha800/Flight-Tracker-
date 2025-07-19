// src/pages/WishlistPage.jsx
import React from "react";
import { useWishlist } from "../components/wishlist/WishlistContext";
import "./WishlistPage.css"; // you'll create this file for styling

const WishlistPage = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No flights saved.</p>
      ) : (
        <ul>
          {wishlist.map((flight) => (
            <li key={flight.id}>
              ✈️ <strong>{flight.route}</strong> – {flight.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
