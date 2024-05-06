import React from 'react';
import longLogo from "../assets/img/CSLongLogo.webp";
import footerLink from "../assets/img/FooterLink.svg";
import './Footer.css';
export const Footer = () => {
  return (
   
    <div className='container'>
      <div className='about'>
        <img src={longLogo} alt="CaptainSide" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
        nibh euismod tincidunt ut laoreet dolore magna amet, consectetue .</p>
        <div className="copyright-2024">
          Copyright © 2024 Captain Side | All Rights Reserved
        </div>
      </div>
    
      <div className='links'>
        <img src={footerLink} alt="" />
        <div className="about-us-parent">
        <div className="about-us">
          <div className="eventss">Events</div>
          <div className="game-pass">Game Pass</div>
          <div className="testing">Testing</div>
          <div className="about-us1">About us</div>
          <div className="log-in">Log in</div>
          <div className="help-support-container">
            Help & Support
          </div>
        </div>
        <div className="frame-parent1">
          <div className="line-wrapper">
            <div className="frame-inner" />
          </div>
          <div className="frame-parent2">
            <div className="icon-wrapper">
              <a href='https://discord.gg/Kd7xsvhN' className="icon"><div className='bx bxl-discord-alt'></div> Discord</a>
            </div>
            <div className="icon-wrapper">
              <a href='https://www.instagram.com/captainside_esports/' className="icon"><div className='bx bxl-instagram'></div> Instagram</a>
            </div>
            <div className="icon-wrapper">
              <a href='https://www.youtube.com/channel/UC7Zi4XcknCFsMZ9zrJs-M_g' className="icon"><div className='bx bxl-youtube'></div> Youtube</a>
            </div>
            <div className="icon-wrapper">
              <a href='mailto:hello@captainside.com' className="icon"><div className='bx bx-envelope'></div> Email</a>
            </div>
            <div className="privacy-popolicy">Privacy Policy</div>
            <div className="terms-condconditions-wrapper">
              <div className="terms-condconditions">Terms & Conditions</div>
            </div>
          </div>
        </div>
    </div>
      </div>
    </div>
    
  )
}