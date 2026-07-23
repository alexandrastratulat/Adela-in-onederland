"use client";

import {

useEffect

} from "react";

import {

useGLTF

} from "@react-three/drei";

import {

useExperience

} from "../context/ExperienceContext";

import gsap from "gsap";

export default function Book({

started

}){

const {

scene

}=useGLTF("/models/book.glb");

const {

setChapter

}=useExperience();

useEffect(()=>{

if(!started)return;

const tl=gsap.timeline();

tl.to(

scene.rotation,

{

y:-Math.PI*0.82,

duration:2.2,

ease:"power3.inOut"

}

);

tl.call(()=>{

setChapter("book");

});

},[started]);

return(

<primitive

object={scene}

position={[0,0.12,0]}

/>

);

}

useGLTF.preload("/models/book.glb");
