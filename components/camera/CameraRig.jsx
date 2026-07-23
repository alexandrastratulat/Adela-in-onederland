"use client";

import { PerspectiveCamera } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

import * as THREE from "three";

import { useExperience } from "../context/ExperienceContext";

export default function CameraRig(){

const camera=useRef();

const target=new THREE.Vector3();

const look=new THREE.Vector3();

const {

chapter

}=useExperience();

useFrame((state,delta)=>{

if(chapter==="intro"){

target.set(

0,

1.65,

8

);

look.set(

0,

1.2,

0

);

}

if(chapter==="book"){

target.set(

0,

1.25,

2.8

);

look.set(

0,

0.8,

0

);

}

camera.current.position.lerp(

target,

delta

);

camera.current.lookAt(look);

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
