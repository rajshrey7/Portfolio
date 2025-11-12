import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../styles/components/CustomCursor.css';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Separate spring for the dot above cursor (slightly slower)
  const dotSpringConfig = { damping: 20, stiffness: 500 };
  const dotXSpring = useSpring(cursorX, dotSpringConfig);
  const dotYSpring = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hover on interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.btn') ||
        target.closest('.card') ||
        target.closest('.project-card') ||
        target.closest('.skill-card') ||
        target.closest('.glass-card') ||
        target.closest('.nav-link') ||
        target.closest('.footer-link') ||
        target.closest('.contact-link') ||
        target.closest('.social-link')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot above cursor */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />
      
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? (isClicking ? 0.8 : isHovering ? 1.5 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? (isHovering ? 2 : 1.5) : 0,
          opacity: isVisible ? (isHovering ? 0.3 : 0.1) : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
      
      {/* Trailing dot */}
      <motion.div
        className="custom-cursor-trail"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? 0.5 : 0,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
          delay: 0.05,
        }}
      />
    </>
  );
};

export default CustomCursor;

