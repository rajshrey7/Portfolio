import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const SubtleGeometry = ({ position, geometry, color, speed = 0.5 }) => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002 * speed;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });
  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.7}
        transparent
        opacity={0.25}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const ProfessionalHeroScene = () => {
  const gridRef = useRef();
  useFrame(() => {
    if (gridRef.current) gridRef.current.rotation.x = Math.PI / 2;
  });
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.2} />
      <gridHelper ref={gridRef} args={[20, 20, '#2a2a2a', '#1a1a1a']} position={[0, 0, -5]} />
      <SubtleGeometry position={[-4, 2, -3]} geometry={<boxGeometry args={[0.8, 0.8, 0.8]} />} color="#8b5cf6" speed={0.3} />
      <SubtleGeometry position={[4, -2, -3]} geometry={<sphereGeometry args={[0.6, 16, 16]} />} color="#3b82f6" speed={0.4} />
      <SubtleGeometry position={[0, 3, -4]} geometry={<octahedronGeometry args={[0.7]} />} color="#ffffff" speed={0.25} />
      <SubtleGeometry position={[-3, -3, -2]} geometry={<tetrahedronGeometry args={[0.6]} />} color="#6b7280" speed={0.35} />
      <SubtleGeometry position={[3, 1, -3]} geometry={<icosahedronGeometry args={[0.5, 0]} />} color="#4b5563" speed={0.3} />
    </>
  );
};

export default ProfessionalHeroScene;

