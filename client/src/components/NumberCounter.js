import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const NumberCounter = ({ 
  value, 
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) {
        const num = Math.floor(latest);
        ref.current.textContent = `${prefix}${num}${suffix}`;
      }
    });
    
    return () => unsubscribe();
  }, [spring, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
};

export default NumberCounter;

