"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CameraRig from "./camera/CameraRig";
import IntroScene from "./scenes/IntroScene";

export default function Experience() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 1.6, 8],
        fov: 38
      }}
    >
      <color attach="background" args={["#f8f4ed"]} />

      <ambientLight intensity={0.5} />

      <directionalLight
        castShadow
        position={[4, 8, 5]}
        intensity={2}
      />

      <Environment preset="sunset" />

      <CameraRig />

      <IntroScene />
    </Canvas>
  );
}
