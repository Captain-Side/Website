import React from "react";
import { Navbar } from "../components/Navbar.jsx";
import { Latest } from "../components/Latest";
import { LiveEvents } from "../components/LiveEvents.jsx";
import { GamePass } from "../components/GamePass.tsx";
import GameTesting from "../components/GameTesting.tsx";
import GameTest from "../components/GameTest.jsx";
import { AboutUs } from "../components/AboutUs.tsx";
import { Footer } from "../components/Footer.tsx";
import { Roster } from "../components/Roster.tsx";
import { Service } from "../components/Service.tsx";
import { Contact } from "../components/Contact.tsx";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Latest id="latest" />
      <LiveEvents id="live-events" />
      <GameTest id="game-test" />
      <GamePass id="game-pass" />
      <GameTesting id="game-testing" />
      <AboutUs id="about-us" />
      <Footer />
      <Roster id="roster" />
      <Service id="service" />
      <Contact id="contact" />
    </div>
  );
};

export default HomePage;
