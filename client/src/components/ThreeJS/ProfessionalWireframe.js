import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ProfessionalWireframe = ({ size = 15, segments = 15 }) => {
  const meshRef = useRef();
  const edges = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const pos = [];
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments - 0.5) * size;
      const y = (i / segments - 0.5) * size;
      pos.push(x, -size / 2, 0, x, size / 2, 0);
      pos.push(-size / 2, y, 0, size / 2, y, 0);
    }
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    return geom;
  }, [size, segments]);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.z += 0.0002;
  });

  return (
    <lineSegments ref={meshRef} geometry={edges}>
      <lineBasicMaterial color="#4a4a4a" transparent opacity={0.2} linewidth={1} />
    </lineSegments>
  );
};

export default ProfessionalWireframe;

