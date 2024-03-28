import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';
import { FaSearch, FaBars } from 'react-icons/fa';
import {SignedIn, SignedOut, UserButton, useSession } from '@clerk/clerk-react';
import { checkUserRole } from '../utils/clerkUser';

export const Navbar = () => {

  const { session } = useSession();
  const userRole = checkUserRole(session);
  console.log("UserRol: ", userRole);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { title: 'Dashboard', url: '/admin/dashboard', role: 'admin'},
    // Add more placeholder links as needed
  ];

  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);

  };

  return (
    <div className="navbar">
      <div className="left-side">
        <Link to="/">
          <div className="logo">
            <img src="/assets/CS_logo-1.png" alt="CS Logo" />
            <p className="logo-text">Captain side</p>
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
          <li><a href="/contact">Contact Us</a></li>
          <SignedIn>
    {(userRole === 'org:admin')  ? (
      <li><a href="/admin/dashboard">Dashboard</a>
      </li>
    ) : null}</SignedIn>
          <li>
          <SignedOut>
            <a href="/login"> Login</a>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
          </SignedIn>
          </li>
        </ul>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </div>
  );
};
