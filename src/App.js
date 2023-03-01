import React from 'react'
import Activities from './components/Activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
