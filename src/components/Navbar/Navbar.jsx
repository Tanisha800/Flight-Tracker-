import React, { useState } from "react";
import "./Navbar.css";
// import logo from "./logo.svg"; // Replace with actual logo
import { FiSearch, FiPhone, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand-name">AeroTracker</span>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Flight Details</li>
        <li>Contact</li>
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <input type="text" placeholder="Search for flight number… " />
          <FiSearch className="search-icon" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;