import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';
import '../styles/components/ScrollIndicator.css';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ['home', 'about', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide indicator when near bottom
      if (window.innerHeight + window.scrollY >= documentHeight - 100) {
        setIsVisible(false);
        return;
      }
      
      setIsVisible(true);

      // Determine current section
      let activeIndex = 0;
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          activeIndex = index;
        }
      });
      setCurrentSection(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDotClick = (sectionId) => {
    scrollToSection(sectionId, 100);
  };

  if (!isVisible) return null;

  return (
    <motion.div 
      className="scroll-indicator"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {sections.map((sectionId, index) => (
        <motion.button
          key={sectionId}
          className={`scroll-dot ${currentSection === index ? 'active' : ''}`}
          onClick={() => handleDotClick(sectionId)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: currentSection === index ? 1.2 : 1,
            opacity: currentSection === index ? 1 : 0.5
          }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </motion.div>
  );
};

export default ScrollIndicator;

