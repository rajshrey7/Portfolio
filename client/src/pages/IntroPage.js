import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/pages/IntroPage.css';

const greetings = [
  { text: 'Hello', lang: 'English', delay: 0 },
  { text: 'Bonjour', lang: 'French', delay: 0.8 },
  { text: 'Hola', lang: 'Spanish', delay: 1.6 },
  { text: 'नमस्ते', lang: 'Hindi', delay: 2.4 },
  { text: 'Ciao', lang: 'Italian', delay: 3.2 },
  { text: 'こんにちは', lang: 'Japanese', delay: 4.0 },
  { text: '안녕하세요', lang: 'Korean', delay: 4.8 },
  { text: 'Guten Tag', lang: 'German', delay: 5.6 },
];

const IntroPage = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < greetings.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // After last greeting, fade out and complete
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 300); // Very fast transition - 0.3 seconds per greeting

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="intro-page">
      <div className="intro-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="greeting-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              duration: 0.15, 
              ease: "easeInOut"
            }}
          >
            <motion.h1
              className="greeting-text-intro"
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.15,
                ease: "easeOut"
              }}
            >
              {greetings[currentIndex].text}
            </motion.h1>
            <motion.p
              className="greeting-lang-intro"
              key={`lang-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.05, duration: 0.15 }}
            >
              {greetings[currentIndex].lang}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IntroPage;

