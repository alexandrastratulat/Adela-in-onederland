"use client";

import { Clone, useGLTF } from "@react-three/drei";

const TREES = [
  [-8, 0, -6],
  [-6, 0, -12],
  [-3, 0, -18],
  [2, 0, -10],
  [5, 0, -15],
  [9, 0, -8],
  [-10, 0, -22],
  [10, 0, -22],
  [-5, 0, -28],
  [4, 0, -30],
  [0, 0, -36]
];

export default function Trees() {

  const { scene } = useGLTF("/models/tree.glb");

  return (
    <>
      {TREES.map((position, index) => (
        <Clone
          key={index}
          object={scene}
          position={position}
          scale={2.1}
          castShadow
          receiveShadow
        />
      ))}
    </>
  );
}

useGLTF.preload("/models/tree.glb");
