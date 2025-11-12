import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/components/MultilingualGreeting.css';

const greetings = [
  { text: 'Hello', lang: 'English' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: '안녕하세요', lang: 'Korean' },
  { text: 'Guten Tag', lang: 'German' },
];

const MultilingualGreeting = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`multilingual-greeting ${className}`}>
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="greeting-text"
        >
          {greetings[currentIndex].text}
        </motion.h2>
      </AnimatePresence>
      <motion.p
        className="greeting-lang"
        key={`lang-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {greetings[currentIndex].lang}
      </motion.p>
    </div>
  );
};

export default MultilingualGreeting;

