"use client";

import { createContext,useContext,useState } from "react";

const ExperienceContext=createContext();

export function ExperienceProvider({children}){

const [chapter,setChapter]=useState("intro");

const [bookOpened,setBookOpened]=useState(false);

return(

<ExperienceContext.Provider

value={{

chapter,

setChapter,

bookOpened,

setBookOpened

}}

>

{children}

</ExperienceContext.Provider>

);

}

export function useExperience(){

return useContext(ExperienceContext);

}
