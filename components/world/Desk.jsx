"use client";

export default function Desk(){

return(

<mesh

rotation={[-Math.PI/2,0,0]}

receiveShadow

>

<planeGeometry

args={[40,40]}

/>

<meshStandardMaterial

color="#d8c6a5"

/>

</mesh>

)

}
