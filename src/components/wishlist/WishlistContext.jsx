import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (flight) => {
    const exists = wishlist.find((f) => f.id === flight.id);
    if (exists) {
      setWishlist((prev) => prev.filter((f) => f.id !== flight.id));
    } else {
      setWishlist((prev) => [...prev, flight]);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => useContext(WishlistContext);
