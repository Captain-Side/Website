import React, { useState } from 'react';
import './Navbar.css';
import { FaSearch, FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar">
      <div className="left-side">
        <a href='/'>
        <div className="logo">
          <img src="/assets/CS_logo-1.png" alt="CS Logo" />
          <p className="logo-text">Captain side</p>
        </div>
        </a>
        <FaSearch className="search-icon" />
      </div>
      <div className="right-side">
        <ul className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#live-events">Events</a></li>
          <li><a href="#game-testing">Testing</a></li>
          <li><a href="#game-pass">Game Pass</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <div className='login'>
            {/* Button with onClick event handler */}
            <button className="login-button">Login</button>
          </div>
        </ul>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};
