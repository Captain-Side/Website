import { SignedIn, SignedOut, UserButton, useSession } from "@clerk/clerk-react";
import { checkUserRole } from "../utils/clerkUser";
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menu = document.querySelector('#menu-icon');
  
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };

    menu.addEventListener('click', toggleMenu);

    return () => {
      menu.removeEventListener('click', toggleMenu);
    };
  }, []);

  const renderAdminDashboardLink = () => {
    return userRole === 'org:admin' && (
      <li><a href="/admin/dashboard">Dashboard</a></li>
    );
  };

  return (
    <header>
      <a href="/" className="logo"><img src="/assets/CS_logo-1.png" alt="CS Logo" /></a>
      
      <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#live-events">Events</a></li>
        <li><a href="#game-testing">Testing</a></li>
        <li><a href="#game-pass">Game Pass</a></li>
        <li><a href="/contact">Contact Us</a></li>
        {renderAdminDashboardLink()}
      </ul>
      <div className="main">
      <ul className="login">
        <li>
          <SignedOut>
            <a href="/login">Login</a>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl='/'/>
          </SignedIn>
        </li>
      </ul>
      <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon"></div>
      </div>
    </header>
  );
};

export default Navbar;