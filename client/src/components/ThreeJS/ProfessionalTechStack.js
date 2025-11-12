import React, { useMemo } from 'react';
import { useTimeBasedRotation } from './hooks/useRotation';
import {
  LIGHTING_CONFIG,
  MATERIAL_CONFIG,
  ANIMATION_SPEEDS,
  GEOMETRY_SIZES,
  COLORS,
} from './constants';

/**
 * MinimalTechIcon Component
 * 
 * A tech stack icon representation using 3D geometry
 * with subtle rotation animation.
 * 
 * @param {Array<number>} position - Position [x, y, z]
 * @param {JSX.Element} geometry - Geometry element
 * @param {string} color - Material color
 * @returns {JSX.Element} Animated tech icon mesh
 */
const MinimalTechIcon = ({ position, geometry, color }) => {
  const meshRef = useTimeBasedRotation(
    ANIMATION_SPEEDS.ROTATION_FAST,
    'y'
  );

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={MATERIAL_CONFIG.TECH_ICON.metalness}
        roughness={MATERIAL_CONFIG.TECH_ICON.roughness}
        transparent={MATERIAL_CONFIG.TECH_ICON.transparent}
        opacity={MATERIAL_CONFIG.TECH_ICON.opacity}
        emissive={color}
        emissiveIntensity={MATERIAL_CONFIG.TECH_ICON.emissiveIntensity}
      />
    </mesh>
  );
};

/**
 * ProfessionalTechStack Component
 * 
 * A rotating group of tech stack icons represented as 3D geometries.
 * Each icon rotates individually while the entire group rotates together.
 * 
 * @returns {JSX.Element} Complete tech stack scene
 */
const ProfessionalTechStack = () => {
  const groupRef = useTimeBasedRotation(
    ANIMATION_SPEEDS.GROUP_ROTATION,
    'y'
  );

  // Tech stack icon configurations
  const techIcons = useMemo(
    () => [
      {
        position: [-1.5, 1.5, 0],
        geometry: <boxGeometry args={[GEOMETRY_SIZES.MEDIUM, GEOMETRY_SIZES.MEDIUM, GEOMETRY_SIZES.MEDIUM]} />,
        color: COLORS.REACT,
      },
      {
        position: [1.5, 1.5, 0],
        geometry: <sphereGeometry args={[GEOMETRY_SIZES.SMALL, 16, 16]} />,
        color: COLORS.NODE,
      },
      {
        position: [-1.5, -1.5, 0],
        geometry: <torusGeometry args={[0.35, 0.15, 8, 16]} />,
        color: COLORS.MONGO,
      },
      {
        position: [1.5, -1.5, 0],
        geometry: <octahedronGeometry args={[GEOMETRY_SIZES.SMALL]} />,
        color: COLORS.ACCENT,
      },
      {
        position: [0, 2, 0],
        geometry: <tetrahedronGeometry args={[0.45]} />,
        color: COLORS.PYTHON,
      },
      {
        position: [0, -2, 0],
        geometry: <dodecahedronGeometry args={[0.35]} />,
        color: COLORS.JS,
      },
    ],
    []
  );

  return (
    <group ref={groupRef}>
      <ambientLight intensity={LIGHTING_CONFIG.TECH_AMBIENT.intensity} />
      {techIcons.map((icon, index) => (
        <MinimalTechIcon
          key={index}
          position={icon.position}
          geometry={icon.geometry}
          color={icon.color}
        />
      ))}
    </group>
  );
};

export default ProfessionalTechStack;

