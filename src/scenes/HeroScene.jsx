import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import AICore from "../components/3D/AICore";
import OrbitRing from "../components/3D/OrbitRing";
import SceneLights from "../components/3D/SceneLights";
import Stars from "../components/3D/Stars";
import FloatingParticles from "../components/3D/FloatingParticles";

export default function HeroScene() {
  return (
    <Canvas
  gl={{
    alpha: true,
    antialias: true,
  }}
  camera={{
    position: [0, 0, 5.5],
    fov: 35,
  }}
>
  
      {/* <Stars /> */}
      <SceneLights />

      <AICore />
      <FloatingParticles />
        <EffectComposer>
  {/* <Bloom */}
    {/* intensity={0.35} */}
    {/* luminanceThreshold={0.75} */}
    {/* luminanceSmoothing={0.2} */}
    {/* mipmapBlur */}
  {/* /> */}
</EffectComposer>
      <OrbitRing
        radius={1.10}
        color="#38bdf8"
        speed={0.6}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <OrbitRing
        radius={1.30}
        color="#8b5cf6"
        speed={0.4}
        rotation={[0.8, 0.4, 0]}
      />

      <OrbitRing
        radius={1.50}
        color="#22d3ee"
        speed={0.2}
        rotation={[0.3, 1.2, 0.5]}
      />

      <OrbitControls
        autoRotate
  autoRotateSpeed={0.25}
  enableZoom={false}
  enablePan={false}
  enableRotate={false}
      />
    </Canvas>
  );
}