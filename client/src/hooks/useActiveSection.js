import { useState, useEffect } from 'react';
import { getActiveSection } from '../utils/scrollUtils';
import { SECTIONS } from '../utils/constants';

/**
 * Custom hook to track active section on scroll
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS.HOME);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SECTIONS);
      const active = getActiveSection(sections);
      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

