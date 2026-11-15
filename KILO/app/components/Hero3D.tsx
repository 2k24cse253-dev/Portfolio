"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import type { Group } from "three";

function SpinGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });
  return <group ref={ref}>{children}</group>;
}

export default function Hero3D() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setShowText(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: "100%", height: "100vh", background: "#0a0708" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={10}
      />

      <SpinGroup>
        <mesh position={[0, 0, 0]} scale={1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#f4efec"
            metalness={0.3}
            roughness={0.8}
          />
        </mesh>

        <mesh position={[0, 0.5, 0]} scale={0.5}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial
            color="#0a0708"
            metalness={0.3}
            roughness={0.8}
          />
        </mesh>

        <mesh position={[0, 0.7, 0]} scale={0.3}>
          <sphereGeometry args={[0.2, 8, 8]} />
          <meshStandardMaterial
            color="#f4efec"
            metalness={0.3}
            roughness={0.8}
          />
        </mesh>

        {isLoaded && (
          <Text position={[0, 0.8, 0]} fontSize={0.4} color="white">
            {showText ? "Varshinie" : "A.R."}
          </Text>
        )}

        <OrbitControls
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          zoomSpeed={1.5}
        />
      </SpinGroup>
    </Canvas>
  );
}
