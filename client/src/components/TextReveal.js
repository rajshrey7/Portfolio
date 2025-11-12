import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ 
  text, 
  delay = 0, 
  className = '',
  splitBy = 'characters' // 'characters' or 'words'
}) => {
  const words = splitBy === 'words' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={{ display: 'inline-block', color: 'inherit' }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={item}
          style={{ 
            display: 'inline-block', 
            marginRight: splitBy === 'words' ? '0.3em' : '0.05em',
            color: 'inherit',
            WebkitTextFillColor: 'inherit'
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;

