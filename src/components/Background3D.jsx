import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function NodeStars(props) {
  const ref = useRef();
  
  // Generate random positions inside a sphere using pure math
  const sphere = useMemo(() => {
    const points = new Float32Array(450); // 150 points
    for (let i = 0; i < 450; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.6;
      
      points[i] = r * Math.sin(phi) * Math.cos(theta);
      points[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i + 2] = r * Math.cos(phi);
    }
    return points;
  }, []);
  
  useFrame((state, delta) => {
    // Slow rotational float
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 18;
    
    // Smooth mouse parallax
    const targetX = state.mouse.x * 0.15;
    const targetY = state.mouse.y * 0.15;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00d4ff"
          size={0.012}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <NodeStars />
      </Canvas>
    </div>
  );
}
