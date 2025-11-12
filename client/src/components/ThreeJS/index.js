/**
 * Three.js Components Index
 * 
 * Centralized exports for all Three.js related components and utilities
 */

export { default as Scene3D } from './Scene3D';
export { default as ProfessionalHeroScene } from './ProfessionalHeroScene';
export { default as ProfessionalParticleNetwork } from './ProfessionalParticleNetwork';
export { default as ProfessionalTechStack } from './ProfessionalTechStack';
export { default as ProfessionalWireframe } from './ProfessionalWireframe';

// Export constants for external use
export {
  CAMERA_CONFIG,
  CANVAS_CONFIG,
  SCENE_TYPES,
  PARTICLE_CONFIG,
  WIREFRAME_CONFIG,
  LIGHTING_CONFIG,
  MATERIAL_CONFIG,
  ANIMATION_SPEEDS,
  GEOMETRY_SIZES,
  COLORS,
  GRID_CONFIG,
} from './constants';

// Export hooks
export { useRotation, useTimeBasedRotation } from './hooks/useRotation';
export { useAnimationFrame } from './hooks/useAnimationFrame';

