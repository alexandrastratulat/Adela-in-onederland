"use client";

import { useEffect } from "react";

import { useExperience } from "../context/ExperienceContext";

export default function useAutoStory(started){

const{

nextChapter

}=useExperience();

useEffect(()=>{

if(!started)return;

const timers=[

setTimeout(()=>nextChapter(),5000),

setTimeout(()=>nextChapter(),12000),

setTimeout(()=>nextChapter(),20000),

setTimeout(()=>nextChapter(),32000),

setTimeout(()=>nextChapter(),43000),

setTimeout(()=>nextChapter(),55000)

];

return()=>{

timers.forEach(

clearTimeout

);

};

},[started]);

}
