"use client";

import { useRef } from "react";

import gsap from "gsap";

import { useExperience } from "../context/ExperienceContext";

export default function WaxSeal3D(){

const ref=useRef();

const{

setSelectedObject

}=useExperience();

return(

<mesh

ref={ref}

position={[0.92,0.30,-17.96]}

rotation={[-Math.PI/2,0,0]}

onClick={()=>{

gsap.to(

ref.current.scale,

{

x:0,

y:0,

z:0,

duration:.8,

ease:"back.in"

}

);

setSelectedObject(

"seal"

);

}}

>

<cylinderGeometry

args={[

0.09,

0.09,

0.02,

64

]}

/>

<meshStandardMaterial

color="#982d34"

/>

</mesh>

);

}
