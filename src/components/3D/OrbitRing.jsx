import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function OrbitRing({
  radius = 1.6,
  color = "#8b5cf6",
  speed = 0.3,
  rotation = [0, 0, 0],
}) {
  const ring = useRef();

  useFrame((state) => {
    if (ring.current) {
      ring.current.rotation.z += speed * 0.003;
    }
  });

  return (
    <mesh ref={ring} rotation={rotation}>
      <torusGeometry args={[radius, 0.006, 12, 180]} />

<meshStandardMaterial
  color={color}
  emissive={color}
  emissiveIntensity={2}
  metalness={0.4}
  roughness={0.2}
  transparent
  opacity={0.8}
/>
    </mesh>
  );
}