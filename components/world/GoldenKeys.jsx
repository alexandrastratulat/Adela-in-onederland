"use client";

import { Clone,useGLTF } from "@react-three/drei";

const positions=[

[-1.4,0.95,-18.2],

[1.6,0.92,-17.8],

[-0.3,1.1,-18.7]

];

export default function GoldenKeys(){

const {scene}=useGLTF("/models/key.glb");

return(

<>

{

positions.map((position,index)=>(

<Clone

key={index}

object={scene}

scale={0.2}

rotation={[

0,

index,

0

]}

position={position}

/>

))

}

</>

);

}

useGLTF.preload("/models/key.glb");
