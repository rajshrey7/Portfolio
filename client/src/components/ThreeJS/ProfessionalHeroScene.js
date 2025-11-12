import React, { useMemo, useEffect } from 'react';
import { useRotation } from './hooks/useRotation';
import {
  LIGHTING_CONFIG,
  MATERIAL_CONFIG,
  ANIMATION_SPEEDS,
  GEOMETRY_SIZES,
  COLORS,
  GRID_CONFIG,
} from './constants';

/**
 * SubtleGeometry Component
 * 
 * A reusable geometry component with subtle rotation animation
 * and professional material properties.
 * 
 * @param {Array<number>} position - Position [x, y, z]
 * @param {JSX.Element} geometry - Geometry element
 * @param {string} color - Material color
 * @param {number} speed - Animation speed multiplier
 * @returns {JSX.Element} Animated mesh
 */
const SubtleGeometry = ({ position, geometry, color, speed = 1 }) => {
  const meshRef = useRotation(
    0.002 * speed,
    0.003 * speed,
    'all'
  );

  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={MATERIAL_CONFIG.STANDARD.metalness}
        roughness={MATERIAL_CONFIG.STANDARD.roughness}
        transparent={MATERIAL_CONFIG.STANDARD.transparent}
        opacity={MATERIAL_CONFIG.STANDARD.opacity}
        emissive={color}
        emissiveIntensity={MATERIAL_CONFIG.STANDARD.emissiveIntensity}
      />
    </mesh>
  );
};

/**
 * ProfessionalHeroScene Component
 * 
 * A sophisticated 3D hero scene featuring a grid background
 * and multiple floating geometric shapes with subtle animations.
 * 
 * @returns {JSX.Element} Complete hero scene
 */
const ProfessionalHeroScene = () => {
  const gridRef = useRotation(0, 'x');
  
  // Initialize grid rotation once
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.rotation.x = GRID_CONFIG.ROTATION;
    }
  }, []);

  // Geometry configurations
  const geometries = useMemo(
    () => [
      {
        position: [-4, 2, -3],
        geometry: <boxGeometry args={[GEOMETRY_SIZES.BOX, GEOMETRY_SIZES.BOX, GEOMETRY_SIZES.BOX]} />,
        color: COLORS.PRIMARY,
        speed: ANIMATION_SPEEDS.SLOW,
      },
      {
        position: [4, -2, -3],
        geometry: <sphereGeometry args={[GEOMETRY_SIZES.SPHERE, 16, 16]} />,
        color: COLORS.SECONDARY,
        speed: ANIMATION_SPEEDS.NORMAL,
      },
      {
        position: [0, 3, -4],
        geometry: <octahedronGeometry args={[GEOMETRY_SIZES.OCTAHEDRON]} />,
        color: COLORS.ACCENT,
        speed: ANIMATION_SPEEDS.SLOW,
      },
      {
        position: [-3, -3, -2],
        geometry: <tetrahedronGeometry args={[GEOMETRY_SIZES.TETRAHEDRON]} />,
        color: COLORS.NEUTRAL,
        speed: ANIMATION_SPEEDS.MEDIUM,
      },
      {
        position: [3, 1, -3],
        geometry: <icosahedronGeometry args={[GEOMETRY_SIZES.ICOSAHEDRON, 0]} />,
        color: COLORS.DARK,
        speed: ANIMATION_SPEEDS.SLOW,
      },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={LIGHTING_CONFIG.AMBIENT.intensity} />
      <directionalLight
        position={LIGHTING_CONFIG.DIRECTIONAL.position}
        intensity={LIGHTING_CONFIG.DIRECTIONAL.intensity}
      />
      <gridHelper
        ref={gridRef}
        args={[
          GRID_CONFIG.SIZE,
          GRID_CONFIG.DIVISIONS,
          GRID_CONFIG.COLOR_PRIMARY,
          GRID_CONFIG.COLOR_SECONDARY,
        ]}
        position={GRID_CONFIG.POSITION}
      />
      {geometries.map((geom, index) => (
        <SubtleGeometry
          key={index}
          position={geom.position}
          geometry={geom.geometry}
          color={geom.color}
          speed={geom.speed}
        />
      ))}
    </>
  );
};

export default ProfessionalHeroScene;

