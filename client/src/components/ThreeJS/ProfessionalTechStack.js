import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const MinimalTechIcon = ({ position, geometry, color }) => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={meshRef} position={position}>
      {geometry}
      <meshStandardMaterial color={color} metalness={0.2} roughness={0.8} transparent opacity={0.2} emissive={color} emissiveIntensity={0.05} />
    </mesh>
  );
};

const ProfessionalTechStack = () => {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });
  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <MinimalTechIcon position={[-1.5, 1.5, 0]} geometry={<boxGeometry args={[0.5, 0.5, 0.5]} />} color="#61dafb" />
      <MinimalTechIcon position={[1.5, 1.5, 0]} geometry={<sphereGeometry args={[0.4, 16, 16]} />} color="#68a063" />
      <MinimalTechIcon position={[-1.5, -1.5, 0]} geometry={<torusGeometry args={[0.35, 0.15, 8, 16]} />} color="#47a248" />
      <MinimalTechIcon position={[1.5, -1.5, 0]} geometry={<octahedronGeometry args={[0.4]} />} color="#ffffff" />
      <MinimalTechIcon position={[0, 2, 0]} geometry={<tetrahedronGeometry args={[0.45]} />} color="#3776ab" />
      <MinimalTechIcon position={[0, -2, 0]} geometry={<dodecahedronGeometry args={[0.35]} />} color="#f7df1e" />
    </group>
  );
};

export default ProfessionalTechStack;

