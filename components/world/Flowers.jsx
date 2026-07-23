"use client";

import { Clone, useGLTF } from "@react-three/drei";

export default function Flowers() {

    const { scene } = useGLTF("/models/flowers.glb");

    return (

        <>
            {Array.from({ length: 80 }).map((_, index) => (

                <Clone

                    key={index}

                    object={scene}

                    scale={0.45}

                    position={[

                        (Math.random()-0.5)*26,

                        0,

                        (Math.random()-0.5)*32

                    ]}

                />

            ))}
        </>

    );

}

useGLTF.preload("/models/flowers.glb");
