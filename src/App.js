import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx'; // Use .jsx extension for components with JSX syntax
import { Latest } from './components/Latest.jsx'; // Use .jsx extension for components with JSX syntax
import { LiveEvents } from './components/LiveEvents.jsx'; // Use .jsx extension for components with JSX syntax
import { GamePass } from './components/GamePass.tsx'; // Use .tsx extension for components with TypeScript syntax
import { AboutUs } from './components/AboutUs.tsx'; // Use .tsx extension for components with TypeScript syntax
import { Roster } from './components/Roster.tsx'; // Use .tsx extension for components with TypeScript syntax
import { Footer } from './components/Footer.tsx'; // Use .tsx extension for components with TypeScript syntax
import { Service } from './components/Service.tsx'; // Use .tsx extension for components with TypeScript syntax
import { Contact } from './components/Contact.tsx'; // Use .tsx extension for components with TypeScript syntax
import GameTest from './components/GameTest.jsx'; // Use .jsx extension for components with JSX syntax
import GameTesting from './components/GameTesting.tsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Latest id="latest" />
        <LiveEvents id="live-events" />
        <GamePass id="game-pass" />
        <GameTest id="game-test" />
        <GameTesting id="game-testing" />
        <AboutUs id="about-us" />
        <Footer />
        <Roster id="roster" />
        <Service id="service" />
        <Contact id="contact" />
      </div>
    </Router>
  );
}

export default App;
