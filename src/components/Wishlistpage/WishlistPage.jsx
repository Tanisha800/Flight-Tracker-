import React from "react";
import { useWishlist } from "../wishlist/WishlistContext";
import "./WishlistPage.css";

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="empty">No flights saved.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((flight) => (
            <div key={flight.id} className="wishlist-card">
              <div className="card-header">
                <div className="flight-icon">✈️</div>
                <button
                  className="delete-btn"
                  onClick={() => toggleWishlist(flight)}
                  title="Remove from Wishlist"
                >
                  Delete
                </button>
              </div>
              <div className="flight-details">
                <h3>{flight.route}</h3>
                <p>{flight.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
