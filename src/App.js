
import './App.css';
import { Navbar } from './components/Navbar.tsx';
import { Latest } from './components/Latest.tsx';
import { LiveEvents } from './components/LiveEvents.tsx';
import { GamePass } from './components/GamePass.tsx';
import { GameTesting } from './components/GameTesting.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { Roster } from './components/Roster.tsx';
import { Footer } from './components/Footer.tsx';
import { Service } from './components/Service.tsx';
import { Contact } from './components/Contact.tsx';

function App() {
  return (
    <>
      <Navbar />
      <Latest />
      <LiveEvents />
      <GamePass />
      <GameTesting />
      <AboutUs />
      <Roster />
      <Service />
      <Contact />
      <Footer />
    </>
    

  );
}

export default App;
