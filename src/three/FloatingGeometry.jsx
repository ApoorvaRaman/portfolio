export default function FloatingGeometry() {
  return (
    <mesh>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshStandardMaterial
        color="#6e7cff"
        transparent
        opacity={0.15}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
}
