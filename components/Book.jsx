import { Float } from "@react-three/drei";

export default function Book(){

return(

<Float

speed={2}

rotationIntensity={0.2}

floatIntensity={0.5}

>

<mesh>

<boxGeometry

args={[3.5,4.8,0.35]}

/>

<meshStandardMaterial

color="#f6e8dc"

/>

</mesh>

</Float>

);

}
