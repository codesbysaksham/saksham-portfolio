import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FloatingParticles() {
  const group = useRef();

  const particles = useMemo(() => {
    return Array.from({ length: 150 }, () => ({
      radius: 1.8 + Math.random() * 1.5,
      angle: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.4,
      y: (Math.random() - 0.5) * 2,
      size: 0.015 + Math.random() * 0.02,
    }));
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    group.current.children.forEach((mesh, i) => {
      const p = particles[i];

      mesh.position.x = Math.cos(t * p.speed + p.angle) * p.radius;
      mesh.position.z = Math.sin(t * p.speed + p.angle) * p.radius;

      mesh.position.y =
        p.y + Math.sin(t * 2 + p.angle) * 0.12;
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh key={i}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
      ))}
    </group>
  );
}