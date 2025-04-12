import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Benefits from './components/Benefits';
import Location from './components/Location';
import FloorPlans from './components/FloorPlans';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      
      <Footer />
      <FloorPlans />
      {/* <Contact /> */}
      {/* <Introduction /> */}
      {/* <Benefits /> */}
      <Location />
    </div>
  );
}

export default App;
