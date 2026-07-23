"use client";

import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useExperience } from "../context/ExperienceContext";
import useCameraAnimation from "./useCameraAnimation";

export default function CameraRig() {

    const camera = useRef();

    const {

    zoomBook,

resetCamera

}=useCameraAnimation(

camera.current

);


    const{

selectedObject

}=useExperience();

    const target = useRef(new THREE.Vector3(0,1.6,8));
    const lookAt = useRef(new THREE.Vector3(0,1.2,0));

    const { chapter } = useExperience();

    useFrame((state,delta)=>{

        switch(chapter){

            case "intro":

                target.current.set(
                    0,
                    1.6,
                    8
                );

                lookAt.current.set(
                    0,
                    1.2,
                    0
                );

            break;

            case "book":

                target.current.set(
                    0,
                    1.3,
                    3
                );

                lookAt.current.set(
                    0,
                    0.8,
                    0
                );

            break;

            case "portal":

                target.current.set(
                    0,
                    0.9,
                    0.8
                );

                lookAt.current.set(
                    0,
                    0.8,
                    -4
                );

            break;

        }

        if(selectedObject==="book"){

target.current.set(

0,

1.45,

-16.8

);

lookAt.current.set(

0,

0.8,

-18

);

}

        camera.current.position.lerp(
            target.current,
            delta * 1.4
        );

        camera.current.lookAt(lookAt.current);

    });

    return(

        <PerspectiveCamera

            ref={camera}

            makeDefault

            position={[0,1.6,8]}

            fov={38}

        />

    );

}
