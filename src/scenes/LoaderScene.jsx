import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import MiniAICore from "../models/MiniAICore";

export default function LoaderScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>

      <ambientLight intensity={1.8} />

      <directionalLight
        position={[2, 2, 2]}
        intensity={2}
      />

      <pointLight
        position={[0, 0, 2]}
        intensity={3}
        color="#22d3ee"
      />

      <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.4}
      >
        <MiniAICore />
      </Float>

    </Canvas>
  );
}