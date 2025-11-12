import React, { useState, useEffect } from 'react';
import '../styles/components/Typewriter.css';

const Typewriter = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`typewriter ${className}`}>
      {displayedText}
      {!isComplete && <span className="cursor">|</span>}
    </span>
  );
};

export default Typewriter;

