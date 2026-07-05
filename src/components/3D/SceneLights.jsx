export default function SceneLights() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={1.4} />

      {/* Main Cyan Light */}
      <pointLight
        position={[4, 4, 4]}
        intensity={20}
        color="#38bdf8"
      />

      {/* Purple Fill Light */}
      <pointLight
        position={[-4, -4, -4]}
        intensity={12}
        color="#8b5cf6"
      />

      {/* Top White Light */}
      <directionalLight
        position={[0, 6, 2]}
        intensity={2}
        color="white"
      />
    </>
  );
}