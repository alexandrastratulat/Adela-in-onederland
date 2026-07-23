"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

import { useExperience } from "../context/ExperienceContext";

export default function Book({started}){

const {scene}=useGLTF("/models/book.glb");

const{

setChapter,

setBookOpened

}=useExperience();

useEffect(()=>{

if(!started)return;

const tl=gsap.timeline();

tl.to(

scene.rotation,

{

y:-Math.PI*0.82,

duration:2.4,

ease:"power3.inOut"

}

);

tl.to(

scene.position,

{

z:-0.35,

duration:1

},

"-=1.8"

);

tl.call(()=>{

setBookOpened(true);

setChapter("portal");

});

},[started]);

return(

<primitive

object={scene}

position={[0,0.15,0]}

/>

);

}

useGLTF.preload("/models/book.glb");
