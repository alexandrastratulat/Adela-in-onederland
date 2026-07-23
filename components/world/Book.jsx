"use client";

import { Float } from "@react-three/drei";

export default function Book(){

return(

<Float

speed={1.4}

rotationIntensity={0.15}

floatIntensity={0.25}

>

<mesh

castShadow

position={[0,0.18,0]}

>

<boxGeometry

args={[2.8,3.8,0.35]}

/>

<meshStandardMaterial

color="#efe0cf"

roughness={0.85}

/>

</mesh>

</Float>

)

}
