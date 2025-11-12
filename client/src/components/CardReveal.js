import React from 'react';
import { motion } from 'framer-motion';

const CardReveal = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

export default CardReveal;

