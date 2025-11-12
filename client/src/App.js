import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroPage from './pages/IntroPage';
import ScrollProgress from './components/ScrollProgress';
import ScrollIndicator from './components/ScrollIndicator';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const activeSection = useActiveSection();

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      <ScrollProgress />
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroPage key="intro" onComplete={handleIntroComplete} />
        ) : (
          <div key="portfolio" className="portfolio-content">
            <ScrollIndicator />
            <ParticleBackground />
            <Navbar activeSection={activeSection} />
            <main className="main-content">
              <section id="home" className="page-section">
                <HeroSection />
              </section>
              <section id="about" className="page-section">
                <AboutSection />
              </section>
              <section id="projects" className="page-section">
                <ProjectsSection />
              </section>
              <section id="contact" className="page-section">
                <ContactSection />
              </section>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
