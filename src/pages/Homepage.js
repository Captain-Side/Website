import React from "react";
import Latest from "../components/Latest";
import { LiveEvents } from "../components/LiveEvents.jsx";
import { GamePass } from "../components/GamePass.tsx";
import GameTesting from "../components/GameTesting.tsx";
import GameTest from "../components/GameTest.jsx";
import { AboutUs } from "../components/AboutUs.tsx";
import { Footer } from "../components/Footer.tsx";
import { Roster } from "../components/Roster.tsx";
import { Service } from "../components/Service.tsx";
import Buttons from "../components/Buttons.jsx";
import {Navbar} from "../components/Navbar.jsx";

const HomePage = () => {
  return (
    <div>
      <Buttons />
      <Latest id="latest" />
      <GameTest id="game-test" />
      <GamePass id="game-pass" />
      <GameTesting id="game-testing" />
      <AboutUs id="about-us" />
      <Footer />
      <Roster id="roster" />
      <Service id="service" />
    </div>
  );
};

export default HomePage;
