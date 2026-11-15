"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";
import { profile } from "@/data/content";

function GoldParticles({ count = 120 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#f5a524"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function MandalaRings() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.z = state.clock.elapsedTime * 0.12;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });

  return (
    <group ref={group} position={[0, 0.1, -0.8]}>
      {[2.1, 2.45, 2.85].map((radius, i) => (
        <mesh key={radius} rotation={[Math.PI / 2.4, 0, (i * Math.PI) / 5]}>
          <torusGeometry args={[radius, 0.008 + i * 0.002, 12, 120]} />
          <meshStandardMaterial
            color={i === 1 ? "#ff2d55" : "#f5a524"}
            metalness={0.92}
            roughness={0.18}
            emissive={i === 1 ? "#c4123f" : "#f5a524"}
            emissiveIntensity={0.22}
          />
        </mesh>
      ))}
      <mesh rotation={[Math.PI / 2.2, 0.2, 0]}>
        <torusKnotGeometry args={[1.55, 0.01, 160, 12, 2, 5]} />
        <meshStandardMaterial
          color="#ff7a96"
          metalness={0.85}
          roughness={0.25}
          emissive="#ff2d55"
          emissiveIntensity={0.15}
        />
      </mesh>
    </group>
  );
}

function PortraitCard() {
  const texture = useLoader(THREE.TextureLoader, profile.photo);
  const mesh = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
  }, [texture]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = Math.sin(t * 0.4) * 0.12;
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.04;
    mesh.current.position.y = Math.sin(t * 0.55) * 0.06;
  });

  const isMobile = size.width < 640;
  const w = isMobile ? 2.2 : 2.85;
  const h = w * 1.35;

  return (
    <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
      <group position={[0, 0.05, 0]}>
        <mesh ref={mesh} position={[0, 0, 0.02]}>
          <planeGeometry args={[w, h]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[w + 0.12, h + 0.12]} />
          <meshStandardMaterial
            color="#120c0e"
            metalness={0.4}
            roughness={0.55}
          />
        </mesh>
        <mesh position={[0, 0, -0.01]}>
          <planeGeometry args={[w + 0.18, h + 0.18]} />
          <meshStandardMaterial
            color="#0a0708"
            metalness={0.7}
            roughness={0.35}
            emissive="#ff2d55"
            emissiveIntensity={0.08}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.15} color="#fff5f0" />
      <pointLight position={[-4, 2, 3]} intensity={0.7} color="#ff2d55" />
      <pointLight position={[3, -2, 2]} intensity={0.45} color="#f5a524" />
      <Suspense fallback={null}>
        <PortraitCard />
        <Environment preset="studio" environmentIntensity={0.45} />
      </Suspense>
      <MandalaRings />
      <GoldParticles />
    </>
  );
}

export default function WelcomeScene() {
  return (
    <div className="absolute inset-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        className="!absolute inset-0"
      >
        <Scene />
      </Canvas>
    </div>
  );
}
