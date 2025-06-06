import React, { useState } from "react";
import "./Navbar.css";
// import logo from "./logo.svg"; // Replace with actual logo
import { FiSearch, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom';

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
      <li><Link to="/" className="navbarl">Home</Link></li>
        
        <li><Link to="/about" className="navbarl">About Us</Link></li>
        <li><Link to="/blog" className="navbarl">Blogs</Link></li>
        <li><Link to="/services" className="navbarl">Services</Link></li>
        <li><Link to="/contact" className="navbarl">Contact</Link></li>
      </div>

      <div className="navbar-right">
      <SignedOut>
         <SignInButton className="btn primary"/>
       </SignedOut>
       <SignedIn>
         <UserButton />
       </SignedIn>
       
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



