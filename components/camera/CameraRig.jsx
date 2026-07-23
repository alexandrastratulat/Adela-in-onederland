"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {

    const camera = useRef();

    useFrame((state, delta)=>{

        camera.current.position.lerp(

            new THREE.Vector3(

                0,
                1.7,
                8

            ),

            delta*1.4

        );

        camera.current.lookAt(0,1.3,0);

    });

    return(

        <PerspectiveCamera

            makeDefault

            ref={camera}

            position={[0,1.7,8]}

            fov={38}

        />

    )

}
