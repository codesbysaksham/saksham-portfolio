import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function MiniAICore() {
  const core = useRef();
  const shell = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    if (core.current) {
      core.current.rotation.x += 0.01;
      core.current.rotation.y += 0.015;

      const scale = 0.8 + Math.sin(t * 2) * 0.03;
      core.current.scale.set(scale, scale, scale);
    }

    if (shell.current) {
      shell.current.rotation.x -= 0.003;
      shell.current.rotation.y -= 0.005;
    }
  });

  return (
    <group>

      {/* Outer Shell */}

      <mesh ref={shell}>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* Core */}

      <mesh ref={core}>
        <icosahedronGeometry args={[0.7, 4]} />

        <meshPhysicalMaterial
          color="#dffcff"
          emissive="#22d3ee"
          emissiveIntensity={3}
          metalness={0.8}
          roughness={0.1}
          transmission={0.35}
        />
      </mesh>

    </group>
  );
}