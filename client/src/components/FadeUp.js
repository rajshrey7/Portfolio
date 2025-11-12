import React from 'react';
import { motion } from 'framer-motion';

const FadeUp = ({ children, delay = 0, duration = 0.6, className = '', distance = 50 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;

