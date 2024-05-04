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

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Latest id="latest" />
      <GameTest id="game-test" />
      <Footer />
    </div>
  );
};

export default HomePage;
