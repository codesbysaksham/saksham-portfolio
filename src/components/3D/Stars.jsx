import { useMemo } from "react";

export default function Stars() {
  const stars = useMemo(() => {
    const points = [];

    for (let i = 0; i < 400; i++) {
      points.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 25,
        ],
        scale: Math.random() * 0.05 + 0.01,
      });
    }

    return points;
  }, []);

  return (
    <>
      {stars.map((star, index) => (
        <mesh
          key={index}
          position={star.position}
        >
          <sphereGeometry args={[star.scale, 8, 8]} />

          <meshBasicMaterial color="#67e8f9" />
        </mesh>
      ))}
    </>
  );
}