"use client";

import { Clone, useGLTF } from "@react-three/drei";

export default function TeaTable(){

    const table = useGLTF("/models/table.glb");
    const teapot = useGLTF("/models/teapot.glb");

    return(

        <group position={[0,0,-18]}>

            <Clone

                object={table.scene}

                scale={1.4}

                castShadow

                receiveShadow

            />

            <Clone

                object={teapot.scene}

                position={[0,0.82,0]}

                scale={0.45}

            />

        </group>

    );

}

useGLTF.preload("/models/table.glb");
useGLTF.preload("/models/teapot.glb");
