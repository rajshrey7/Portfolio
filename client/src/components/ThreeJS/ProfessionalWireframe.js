import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useRotation } from './hooks/useRotation';
import {
  WIREFRAME_CONFIG,
  MATERIAL_CONFIG,
} from './constants';

/**
 * ProfessionalWireframe Component
 * 
 * A rotating wireframe grid pattern created using line segments.
 * Provides a subtle background effect with smooth rotation animation.
 * 
 * @param {number} size - Size of the wireframe grid
 * @param {number} segments - Number of segments per axis
 * @returns {JSX.Element} Wireframe grid scene
 */
const ProfessionalWireframe = ({
  size = WIREFRAME_CONFIG.DEFAULT_SIZE,
  segments = WIREFRAME_CONFIG.DEFAULT_SEGMENTS,
}) => {
  const meshRef = useRotation(
    WIREFRAME_CONFIG.ROTATION_SPEED,
    0,
    'z'
  );

  // Generate wireframe geometry
  const edges = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    
    // Generate grid lines
    for (let i = 0; i <= segments; i++) {
      const normalized = i / segments;
      const coordinate = (normalized - 0.5) * size;
      
      // Vertical lines
      positions.push(
        coordinate, -size / 2, 0,
        coordinate, size / 2, 0
      );
      
      // Horizontal lines
      positions.push(
        -size / 2, coordinate, 0,
        size / 2, coordinate, 0
      );
    }
    
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(positions), 3)
    );
    
    return geometry;
  }, [size, segments]);

  return (
    <lineSegments ref={meshRef} geometry={edges}>
      <lineBasicMaterial
        color={MATERIAL_CONFIG.WIREFRAME.color}
        transparent={MATERIAL_CONFIG.WIREFRAME.transparent}
        opacity={MATERIAL_CONFIG.WIREFRAME.opacity}
        linewidth={MATERIAL_CONFIG.WIREFRAME.linewidth}
      />
    </lineSegments>
  );
};

export default ProfessionalWireframe;

