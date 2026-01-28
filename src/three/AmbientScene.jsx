import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import FloatingGeometry from "./FloatingGeometry";
import useReducedMotion from "../hooks/useReducedMotion";
import { isLowEndDevice } from "../utils/device";
export default function AmbientScene() {
  if (useReducedMotion() || isLowEndDevice()) return null;
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={0.4} />
      <Float speed={0.6} rotationIntensity={0.3} floatIntensity={0.4}>
        <FloatingGeometry />
      </Float>
    </Canvas>
  );
}
