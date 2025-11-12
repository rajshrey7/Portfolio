import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * Custom hook for running animation callbacks on each frame
 * @param {Function} callback - Function to call on each frame
 * @param {Array} dependencies - Dependencies array for the callback
 * @returns {React.RefObject} Reference object
 */
export const useAnimationFrame = (callback, dependencies = []) => {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current && callback) {
      callback(state, delta, ref.current);
    }
  });

  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, dependencies);

  return ref;
};

