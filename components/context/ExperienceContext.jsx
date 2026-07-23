"use client";

import {

createContext,
useContext,
useState

} from "react";

const ExperienceContext=createContext();

export function ExperienceProvider({

children

}){

const [chapter,setChapter]=useState("intro");

const nextChapter=()=>{

const chapters=[

"intro",
"portal",
"wonderland",
"invitation",
"gallery",
"countdown",
"rsvp",
"ending"

];

const index=

chapters.indexOf(chapter);

if(index<chapters.length-1){

setChapter(

chapters[index+1]

);

}

};

return(

<ExperienceContext.Provider

value={{

chapter,

setChapter,

nextChapter

}}

>

{children}

</ExperienceContext.Provider>

);

}

export function useExperience(){

return useContext(

ExperienceContext

);

}
