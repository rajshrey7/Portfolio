import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import ProfessionalHeroScene from './ProfessionalHeroScene';
import ProfessionalParticleNetwork from './ProfessionalParticleNetwork';
import ProfessionalTechStack from './ProfessionalTechStack';
import ProfessionalWireframe from './ProfessionalWireframe';
import {
  CAMERA_CONFIG,
  CANVAS_CONFIG,
  SCENE_TYPES,
  PARTICLE_CONFIG,
  WIREFRAME_CONFIG,
} from './constants';
import '../../styles/components/Scene3D.css';

/**
 * Scene3D Component
 * 
 * A professional Three.js scene wrapper that renders different 3D scenes
 * based on the provided type. Handles camera configuration, canvas setup,
 * and scene rendering with proper error boundaries.
 * 
 * @param {string} type - Scene type: 'hero', 'particles', 'tech', or 'wireframe'
 * @param {Array<number>} cameraPosition - Custom camera position [x, y, z]
 * @param {number} fov - Camera field of view
 * @param {Object} particleConfig - Particle network configuration
 * @param {Object} wireframeConfig - Wireframe configuration
 * @returns {JSX.Element} Rendered Three.js scene
 */
const Scene3D = ({
  type = SCENE_TYPES.HERO,
  cameraPosition,
  fov,
  particleConfig = {},
  wireframeConfig = {},
}) => {
  // Get camera configuration based on scene type
  const cameraConfig = useMemo(() => {
    const configMap = {
      [SCENE_TYPES.HERO]: CAMERA_CONFIG.HERO,
      [SCENE_TYPES.PARTICLES]: CAMERA_CONFIG.PARTICLES,
      [SCENE_TYPES.TECH]: CAMERA_CONFIG.TECH,
      [SCENE_TYPES.WIREFRAME]: CAMERA_CONFIG.WIREFRAME,
    };

    const defaultConfig = configMap[type] || CAMERA_CONFIG.HERO;
    return {
      position: cameraPosition || defaultConfig.position,
      fov: fov || defaultConfig.fov,
    };
  }, [type, cameraPosition, fov]);

  // Render appropriate scene based on type
  const renderScene = () => {
    switch (type) {
      case SCENE_TYPES.HERO:
        return <ProfessionalHeroScene />;
      
      case SCENE_TYPES.PARTICLES:
        return (
          <ProfessionalParticleNetwork
            count={particleConfig.count || PARTICLE_CONFIG.DEFAULT_COUNT}
            radius={particleConfig.radius || PARTICLE_CONFIG.DEFAULT_RADIUS}
          />
        );
      
      case SCENE_TYPES.TECH:
        return <ProfessionalTechStack />;
      
      case SCENE_TYPES.WIREFRAME:
        return (
          <ProfessionalWireframe
            size={wireframeConfig.size || WIREFRAME_CONFIG.DEFAULT_SIZE}
            segments={wireframeConfig.segments || WIREFRAME_CONFIG.DEFAULT_SEGMENTS}
          />
        );
      
      default:
        return <ProfessionalHeroScene />;
    }
  };

  return (
    <div className="three-scene-container">
      <Canvas
        gl={{ antialias: CANVAS_CONFIG.antialias, alpha: CANVAS_CONFIG.alpha }}
        dpr={CANVAS_CONFIG.dpr}
        performance={CANVAS_CONFIG.performance}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            position={cameraConfig.position}
            fov={cameraConfig.fov}
          />
          {renderScene()}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;

