import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

/**
 * Custom hook for handling rotation animations
 * @param {number} speedX - Rotation speed for X axis
 * @param {number} speedY - Rotation speed for Y axis (or single speed if axis is specified)
 * @param {string} axis - Rotation axis ('x', 'y', 'z', or 'all') - optional override
 * @returns {React.RefObject} Reference to the mesh/group
 */
export const useRotation = (speedX = 0.002, speedY = 0.003, axis = null) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      if (axis === 'x') {
        ref.current.rotation.x += speedX;
      } else if (axis === 'y') {
        ref.current.rotation.y += speedY;
      } else if (axis === 'z') {
        ref.current.rotation.z += speedX;
      } else if (axis === 'all') {
        ref.current.rotation.x += speedX;
        ref.current.rotation.y += speedY;
      } else {
        // Default: use speedX and speedY as provided
        ref.current.rotation.x += speedX;
        ref.current.rotation.y += speedY;
      }
    }
  });

  return ref;
};

/**
 * Custom hook for time-based rotation
 * @param {number} speed - Rotation speed multiplier
 * @param {string} axis - Rotation axis ('x', 'y', 'z')
 * @returns {React.RefObject} Reference to the mesh/group
 */
export const useTimeBasedRotation = (speed = 0.05, axis = 'y') => {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime;
      if (axis === 'x') {
        ref.current.rotation.x = time * speed;
      } else if (axis === 'y') {
        ref.current.rotation.y = time * speed;
      } else if (axis === 'z') {
        ref.current.rotation.z = time * speed;
      }
    }
  });

  return ref;
};

