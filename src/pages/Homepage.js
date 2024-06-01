import React from "react";
import Latest from "../components/Latest.jsx";
import { LiveEvents } from "../components/LiveEvents.jsx";
import { GamePass } from "../components/GamePass.tsx";
import GameTesting from "../components/GameTesting.tsx";
import GameTest from "../components/GameTest.jsx";
import { AboutUs } from "../components/AboutUs.tsx";
import { Footer } from "../components/Footer.tsx";
import { Roster } from "../components/Roster.tsx";
import { Service } from "../components/Service.tsx";
import Navbar from "../components/Navbar.jsx";
import Last from "../components/Last.jsx";
import Maintenance from "../components/Maintenance.jsx";

const HomePage = () => {
  return (
    <div>
      <Maintenance />
      <Navbar />
      <Latest id="latest" />
      <GameTest id="game-test" />
      <GamePass id="game-pass" />
      <GameTesting id="game-testing" />
      <Last />
      <Footer />
    </div>
  );
};

export default HomePage;
