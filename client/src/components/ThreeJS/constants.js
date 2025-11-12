/**
 * Three.js Scene Configuration Constants
 * Centralized configuration for all Three.js components
 */

// Camera Settings
export const CAMERA_CONFIG = {
  HERO: {
    position: [0, 0, 10],
    fov: 75,
  },
  PARTICLES: {
    position: [0, 0, 12],
    fov: 75,
  },
  TECH: {
    position: [0, 0, 6],
    fov: 60,
  },
  WIREFRAME: {
    position: [0, 0, 15],
    fov: 75,
  },
};

// Canvas Settings
export const CANVAS_CONFIG = {
  antialias: true,
  alpha: true,
  dpr: [1, 2],
  performance: { min: 0.5 },
};

// Lighting Configuration
export const LIGHTING_CONFIG = {
  AMBIENT: {
    intensity: 0.5,
  },
  DIRECTIONAL: {
    position: [5, 5, 5],
    intensity: 0.4,
  },
  TECH_AMBIENT: {
    intensity: 0.6,
  },
};

// Material Properties
export const MATERIAL_CONFIG = {
  STANDARD: {
    metalness: 0.3,
    roughness: 0.7,
    transparent: true,
    opacity: 0.4,
    emissiveIntensity: 0.2,
  },
  TECH_ICON: {
    metalness: 0.2,
    roughness: 0.8,
    transparent: true,
    opacity: 0.35,
    emissiveIntensity: 0.1,
  },
  POINTS: {
    size: 0.1,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  },
  WIREFRAME: {
    color: '#6a6a6a',
    transparent: true,
    opacity: 0.35,
    linewidth: 1,
  },
};

// Animation Speeds
export const ANIMATION_SPEEDS = {
  SLOW: 0.25,
  MEDIUM: 0.3,
  NORMAL: 0.4,
  FAST: 0.5,
  ROTATION_SLOW: 0.0002,
  ROTATION_MEDIUM: 0.0003,
  ROTATION_FAST: 0.005,
  GROUP_ROTATION: 0.05,
};

// Geometry Sizes
export const GEOMETRY_SIZES = {
  SMALL: 0.4,
  MEDIUM: 0.5,
  LARGE: 0.7,
  BOX: 0.8,
  SPHERE: 0.6,
  OCTAHEDRON: 0.7,
  TETRAHEDRON: 0.6,
  ICOSAHEDRON: 0.5,
};

// Color Palette
export const COLORS = {
  PRIMARY: '#8b5cf6',
  SECONDARY: '#3b82f6',
  ACCENT: '#ffffff',
  NEUTRAL: '#6b7280',
  DARK: '#4b5563',
  GRID_PRIMARY: '#2a2a2a',
  GRID_SECONDARY: '#1a1a1a',
  REACT: '#61dafb',
  NODE: '#68a063',
  MONGO: '#47a248',
  PYTHON: '#3776ab',
  JS: '#f7df1e',
};

// Particle Network Configuration
export const PARTICLE_CONFIG = {
  DEFAULT_COUNT: 800,
  DEFAULT_RADIUS: 12,
  ANIMATION_SPEED: 0.2,
  MOVEMENT_AMPLITUDE: 0.001,
  ROTATION_SPEED: 0.0003,
};

// Wireframe Configuration
export const WIREFRAME_CONFIG = {
  DEFAULT_SIZE: 15,
  DEFAULT_SEGMENTS: 15,
  ROTATION_SPEED: 0.0002,
};

// Grid Configuration
export const GRID_CONFIG = {
  SIZE: 20,
  DIVISIONS: 20,
  COLOR_PRIMARY: '#2a2a2a',
  COLOR_SECONDARY: '#1a1a1a',
  POSITION: [0, 0, -5],
  ROTATION: Math.PI / 2,
};

// Scene Types
export const SCENE_TYPES = {
  HERO: 'hero',
  PARTICLES: 'particles',
  TECH: 'tech',
  WIREFRAME: 'wireframe',
};

