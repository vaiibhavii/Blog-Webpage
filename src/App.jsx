import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ServicesBanner from './components/ServicesBanner';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import OurTeam from './components/OurTeam';
import Blog from './components/Blog';
import Footer from './components/Footer';

import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <ServicesBanner />
        <VisionMission />
        <CoreValues />
        <OurTeam />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;