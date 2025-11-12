import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import ProfessionalHeroScene from './ProfessionalHeroScene';
import ProfessionalParticleNetwork from './ProfessionalParticleNetwork';
import ProfessionalTechStack from './ProfessionalTechStack';
import ProfessionalWireframe from './ProfessionalWireframe';
import '../../styles/components/Scene3D.css';

const Scene3D = ({ 
  type = 'hero', 
  cameraPosition = [0, 0, 8],
  fov = 75 
}) => {
  return (
    <div className="three-scene-container">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} fov={fov} />
          {type === 'hero' && <ProfessionalHeroScene />}
          {type === 'particles' && <ProfessionalParticleNetwork count={800} radius={12} />}
          {type === 'tech' && <ProfessionalTechStack />}
          {type === 'wireframe' && <ProfessionalWireframe size={15} segments={15} />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;

