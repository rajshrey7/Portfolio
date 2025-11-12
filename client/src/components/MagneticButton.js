import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const button = ref.current;
    if (button) {
      button.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <motion.button
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;

