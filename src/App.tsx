import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Vision from './components/sections/Vision';
import Philosophy from './components/sections/Philosophy';
import TechStack from './components/sections/TechStack';
import Metrics from './components/sections/Metrics';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import FutureProducts from './components/sections/FutureProducts';
import Contact from './components/sections/Contact';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Philosophy />
        <TechStack />
        <Metrics />
        <Experience />
        <Projects />
        <Testimonials />
        <FutureProducts />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
