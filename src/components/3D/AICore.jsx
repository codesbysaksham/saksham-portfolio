import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function AICore() {
  const core = useRef();
  const shell = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (core.current) {
      core.current.rotation.x += 0.003;
      core.current.rotation.y += 0.005;

      core.current.position.y = Math.sin(t * 1.5) * 0.08;

      const scale = 0.55 + Math.sin(t * 2.2) * 0.04;
      core.current.scale.set(scale, scale, scale);
    }

    if (shell.current) {
      shell.current.rotation.x -= 0.002;
      shell.current.rotation.y -= 0.003;

      const shellScale = 1.2 + Math.sin(t * 1.8) * 0.03;
      shell.current.scale.set(shellScale, shellScale, shellScale);
    }
  });

  return (
    <group>

      {/* Outer Energy Shell */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Main AI Core */}
      <mesh ref={core}>
        <icosahedronGeometry args={[1, 8]} />

        <meshPhysicalMaterial
          color="#c8f7ff"
          emissive="#22d3ee"
          emissiveIntensity={4}
          metalness={0.9}
          roughness={0.05}
          clearcoat={1}
          clearcoatRoughness={0}
          transmission={0.4}
          thickness={1.2}
          reflectivity={1}
        />
      </mesh>

    </group>
  );
}