import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import {
  PARTICLE_CONFIG,
  MATERIAL_CONFIG,
  COLORS,
} from './constants';

/**
 * ProfessionalParticleNetwork Component
 * 
 * A high-performance particle network system that creates a 3D sphere
 * of particles with smooth animations and color variations.
 * 
 * @param {number} count - Number of particles to render
 * @param {number} radius - Radius of the particle sphere
 * @returns {JSX.Element} Particle network scene
 */
const ProfessionalParticleNetwork = ({
  count = PARTICLE_CONFIG.DEFAULT_COUNT,
  radius = PARTICLE_CONFIG.DEFAULT_RADIUS,
}) => {
  const meshRef = useRef();
  const originalPositionsRef = useRef();
  
  // Store original positions separately to avoid modifying the base array
  const { positions, colors, originalPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const origPos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    // Color palette
    const colorPalette = [
      new THREE.Color(COLORS.DARK),
      new THREE.Color(COLORS.NEUTRAL),
      new THREE.Color(COLORS.SECONDARY),
    ];
    
    // Probability distribution for colors
    const colorWeights = [0.5, 0.35, 0.15];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Spherical coordinate system for even distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.random() * radius;
      
      // Convert to Cartesian coordinates
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      // Store in both arrays
      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;
      
      origPos[i3] = x;
      origPos[i3 + 1] = y;
      origPos[i3 + 2] = z;
      
      // Assign color based on weighted probability
      const rand = Math.random();
      let colorIndex = 0;
      let cumulative = 0;
      for (let j = 0; j < colorWeights.length; j++) {
        cumulative += colorWeights[j];
        if (rand <= cumulative) {
          colorIndex = j;
          break;
        }
      }
      
      const selectedColor = colorPalette[colorIndex];
      cols[i3] = selectedColor.r;
      cols[i3 + 1] = selectedColor.g;
      cols[i3 + 2] = selectedColor.b;
    }
    
    return { positions: pos, colors: cols, originalPositions: origPos };
  }, [count, radius]);

  // Store original positions in ref for useFrame access
  useEffect(() => {
    originalPositionsRef.current = originalPositions;
  }, [originalPositions]);

  // Animate particles with smooth wave motion and rotation
  useFrame((state) => {
    if (meshRef.current && meshRef.current.geometry && originalPositionsRef.current) {
      const time = state.clock.elapsedTime;
      const pos = meshRef.current.geometry.attributes.position.array;
      const origPos = originalPositionsRef.current;
      
      // Update positions with wave animation based on original positions
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const phase = time * PARTICLE_CONFIG.ANIMATION_SPEED + i * 0.01;
        const offset = Math.sin(phase) * PARTICLE_CONFIG.MOVEMENT_AMPLITUDE * 10;
        
        pos[i3] = origPos[i3];
        pos[i3 + 1] = origPos[i3 + 1] + offset;
        pos[i3 + 2] = origPos[i3 + 2];
      }
      
      // Rotate the entire mesh
      meshRef.current.rotation.y += PARTICLE_CONFIG.ROTATION_SPEED;
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={MATERIAL_CONFIG.POINTS.size}
        sizeAttenuation={MATERIAL_CONFIG.POINTS.sizeAttenuation}
        vertexColors={MATERIAL_CONFIG.POINTS.vertexColors}
        transparent={MATERIAL_CONFIG.POINTS.transparent}
        opacity={MATERIAL_CONFIG.POINTS.opacity}
        depthWrite={MATERIAL_CONFIG.POINTS.depthWrite}
      />
    </points>
  );
};

export default ProfessionalParticleNetwork;

