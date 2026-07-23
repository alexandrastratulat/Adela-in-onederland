"use client";

import { useState } from "react";

import Experience from "@/components/Experience";
import OpenButton from "@/components/ui/OpenButton";

import {

ExperienceProvider

} from "@/components/context/ExperienceContext";

export default function Home(){

const [started,setStarted]=useState(false);

return(

<ExperienceProvider>

<Experience

started={started}

/>

{

!started &&

<OpenButton

onClick={()=>setStarted(true)}

/>

}

</ExperienceProvider>

);

}
