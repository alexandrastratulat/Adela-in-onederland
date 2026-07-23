"use client";

import { useRef } from "react";

import { useFrame } from "@react-three/fiber";

export default function FloatingDust(){

const group=useRef();

useFrame((state)=>{

group.current.rotation.y=

state.clock.elapsedTime*0.02;

});

return(

<group ref={group}>

{

Array.from({

length:120

}).map((_,i)=>(

<mesh

key={i}

position={[

(Math.random()-0.5)*10,

Math.random()*5,

(Math.random()-0.5)*10

]}

>

<sphereGeometry

args={[0.01]}

/>

<meshBasicMaterial

color="#fff6db"

/>

</mesh>

))

}

</group>

);

}
