"use client";

import { useEffect } from "react";
import gsap from "gsap";

import { useExperience } from "../context/ExperienceContext";

export default function PageAnimation({ page }){

const{

bookOpened

}=useExperience();

useEffect(()=>{

if(!bookOpened)return;

gsap.to(

page.current.rotation,

{

y:-Math.PI,

duration:2.8,

ease:"power3.inOut"

}

);

},[bookOpened]);

return null;

}
