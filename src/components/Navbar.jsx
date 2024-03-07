import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useAuth } from "../utils/AuthContext";

export const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/">
          <div className="logo">
            <img src="/assets/CS_logo-1.png" alt="CS Logo" />
            <p className="logo-text">CaptainSide</p>
          </div>
        </Link>
        <FaSearch className="search-icon" />
      </div>
      <div className="right-side">
        <ul className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#live-events">Events</a></li>
          <li><a href="#game-testing">Testing</a></li>
          <li><a href="#game-pass">Game Pass</a></li>
          <li><a href="#contact">Contact Us</a></li>

          <li>
            { user ? (
              <div className='navbar-login'>
                {/* Button with onClick event handler */}
                <button onClick={logoutUser} className="navbar-login-button">Logout</button>
              </div>
              ): 
              <div className='navbar-login'>
                {/* Button with onClick event handler */}
                <Link to="/login" className="navbar-login-button"> 
                  <button>Login</button> 
                </Link>
              </div>
            }
        </li>

        </ul>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};
