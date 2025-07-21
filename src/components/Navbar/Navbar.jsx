import React, { useState } from "react";
import "./Navbar.css";

import { FiMenu, FiX } from "react-icons/fi";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand-name">
          <Link className="brand-name" to="/">
            AeroTracker
          </Link>
        </span>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <div className="navl">
          <li className="list">
            <Link to="/" className="navbarl">
              Home
            </Link>
          </li>

          <li className="list">
            <Link to="/about" className="navbarl">
              About Us
            </Link>
          </li>
          <li className="list">
            <Link to="/blog" className="navbarl">
              Blogs
            </Link>
          </li>
          <li className="list">
            <Link to="/services" className="navbarl">
              Services
            </Link>
          </li>
          <li>
            <Link to="/routes" className="navbarl">
              Plan Route
            </Link>
          </li>
          <li className="list">
            <Link to="/contact" className="navbarl">
              Contact Us
            </Link>
          </li>
        </div>
        <div className="navbarr">
          <Link to="/wishlist" className="wishlist-icon" title="My Wishlist">
            <FaHeart />
          </Link>

          <SignedOut>
            <SignInButton className="btn primary" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      <div className="navbar-right">
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
