
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
        <div className="logo">
          <img src="/assets/CS_logo-1.png" alt="CS Logo" />
          <p className="logo-text">Captain side</p>
        </div>
        <FaSearch className="search-icon" />
      </div>
      <div className="right-side">
        <ul className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
          <li>About Us</li>
          <li>Events</li>
          <li>Testing</li>
          <li>Game Pass</li>
          <li>Contact Us</li>
          <div className='login'>
          <button className="login-button">Login</button>
          </div>
            
        </ul>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};
