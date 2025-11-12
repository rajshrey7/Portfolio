import React, { useEffect, useRef } from 'react';
import '../styles/components/SparkleEffect.css';

const SparkleEffect = ({ children, intensity = 'medium' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sparkleCount = intensity === 'high' ? 15 : intensity === 'medium' ? 10 : 5;
    const sparkles = [];

    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      const size = Math.random() * 4 + 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      sparkle.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
      container.appendChild(sparkle);
      sparkles.push(sparkle);

      setTimeout(() => {
        sparkle.remove();
        sparkles.splice(sparkles.indexOf(sparkle), 1);
      }, 4000);
    };

    const interval = setInterval(() => {
      if (sparkles.length < sparkleCount) {
        createSparkle();
      }
    }, 300);

    return () => {
      clearInterval(interval);
      sparkles.forEach(sparkle => sparkle.remove());
    };
  }, [intensity]);

  return (
    <div ref={containerRef} className="sparkle-container">
      {children}
    </div>
  );
};

export default SparkleEffect;

