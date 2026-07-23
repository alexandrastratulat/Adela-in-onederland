"use client";

import { useState } from "react";

import Experience from "@/components/Experience";
import OpenButton from "@/components/ui/OpenButton";

export default function Home(){

const [started,setStarted]=useState(false);

return(

<>

<Experience started={started}/>

{!started && (

<OpenButton

onClick={()=>setStarted(true)}

/>

)}

</>

);

}
