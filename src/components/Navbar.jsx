// Navbar.js

import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FaSearch, FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  console.log('isMenuOpen:', isMenuOpen); // Log the state to check if it toggles correctly

  return (
    <div className="navbar">
      <div className="left-side">
        <div className="logo">
          <img src="/assets/CS_logo-1.png" alt="CS Logo" />
          <p className="logo-text">Captian site</p>
        </div>
        <FaSearch className="search-icon" />
      </div>
      <div className="right-side">
        <ul className="menu-items" ref={menuRef}>
          <li>About Us</li>
          <li>Events</li>
          <li>Testing</li>
          <li>NFT</li>
          <li>Contact Us</li>
          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
        <FaBars className="menu-icon" onClick={toggleMenu} />
        <ul className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
          <li>About Us</li>
          <li>Events</li>
          <li>Testing</li>
          <li>NFT</li>
          <li>Contact Us</li>
          <li>
            <button className="login-button">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
