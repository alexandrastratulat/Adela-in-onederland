"use client";

import { useRef } from "react";

import { useFrame } from "@react-three/fiber";

import { useExperience } from "../context/ExperienceContext";

export default function GoldenLight(){

const light=useRef();

const{

bookOpened

}=useExperience();

useFrame((state)=>{

if(!bookOpened)return;

light.current.intensity=

2+

Math.sin(

state.clock.elapsedTime*3

)*0.6;

});

return(

<pointLight

ref={light}

position={[0,0.4,-0.2]}

color="#ffd88f"

distance={8}

intensity={0}

/>

);

}
