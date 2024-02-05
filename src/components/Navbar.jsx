import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div class = 'navbar'>
      <div class = 'left-side'>
      <div class = 'logo'>
      <img src='/assets/CS_logo-1.png' alt="CS Logo" />
      <p class = 'logo-text'>Captian site</p>

     
      </div>
      <FaSearch style={{ fontSize: '34px', margin: '30px', fontWeight:100, cursor:'pointer' }} />
      </div>
      <div class = 'right-side'>
        <ul>
          <li>ABOUT US</li>
          <li>EVENTS</li>
          <li>TESTING</li>
          <li>NFT</li>
          <li>CONTACT US</li>
          <li>
            <button>
              LOGIN
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
