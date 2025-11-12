import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ProfessionalParticleNetwork = ({ count = 800, radius = 12 }) => {
  const meshRef = useRef();
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const c1 = new THREE.Color('#4b5563');
    const c2 = new THREE.Color('#6b7280');
    const c3 = new THREE.Color('#3b82f6');
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.random() * radius;
      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);
      const color = Math.random() < 0.5 ? c1 : Math.random() < 0.85 ? c2 : c3;
      cols[i3] = color.r;
      cols[i3 + 1] = color.g;
      cols[i3 + 2] = color.b;
    }
    return { positions: pos, colors: cols };
  }, [count, radius]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const pos = meshRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += Math.sin(time * 0.2 + i * 0.01) * 0.001;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      meshRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} sizeAttenuation vertexColors transparent opacity={0.3} depthWrite={false} />
    </points>
  );
};

export default ProfessionalParticleNetwork;

