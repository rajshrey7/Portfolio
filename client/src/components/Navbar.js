import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { smoothScrollTo } from '../utils/scrollUtils';
import '../styles/components/Navbar.css';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      smoothScrollTo(offsetPosition);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button 
          onClick={() => handleScrollToSection('home')} 
          className="nav-logo"
        >
          <span className="logo-text">Shreyansh Raj</span>
        </button>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollToSection(item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <motion.div
                  className="nav-link-indicator"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
