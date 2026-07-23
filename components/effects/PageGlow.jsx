"use client";

import { Sparkles } from "@react-three/drei";

import { useExperience } from "../context/ExperienceContext";

export default function PageGlow(){

const{

bookOpened

}=useExperience();

if(!bookOpened)return null;

return(

<Sparkles

count={150}

speed={0.4}

size={2}

scale={[1,1,1]}

position={[0,0.4,0]}

/>

);

}
