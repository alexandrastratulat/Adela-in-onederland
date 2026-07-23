"use client";

import { Sparkles } from "@react-three/drei";

import { useExperience } from "../context/ExperienceContext";

export default function InkParticles(){

const{

bookOpened

}=useExperience();

if(!bookOpened)return null;

return(

<Sparkles

count={250}

size={3}

speed={0.5}

scale={4}

position={[0,1,-19]}

/>

);

}
