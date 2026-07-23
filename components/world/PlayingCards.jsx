"use client";

import { Clone, useGLTF } from "@react-three/drei";

const cards = [

[-0.8,0.82,-17.7,15],
[-0.4,0.82,-18.3,-20],
[0.6,0.82,-17.9,8],
[1.0,0.82,-18.4,-10]

];

export default function PlayingCards(){

const {scene}=useGLTF("/models/cards.glb");

return(

<>

{

cards.map((card,index)=>(

<Clone

key={index}

object={scene}

scale={0.12}

rotation={[0,

card[3]*Math.PI/180,

0]}

position={[

card[0],

card[1],

card[2]

]}

/>

))

}

</>

);

}

useGLTF.preload("/models/cards.glb");
