import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Tools from './sections/Tools';
import Pricing from './sections/Pricing';
import SuccessStories from './sections/SuccessStories';
import Features from './sections/Features';
import Contact from './sections/Contact';
import './styles/globals.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Tools />
      <Pricing />
      <SuccessStories />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;