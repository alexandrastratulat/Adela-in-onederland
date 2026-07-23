import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";

import { Environment } from "@react-three/drei";

import IntroScene from "./scenes/IntroScene";

function App() {

return (

<Canvas

camera={{

position:[0,1,8],

fov:45

}}

>

<color attach="background" args={["#fdf7f3"]} />

<ambientLight intensity={1.2}/>

<directionalLight

position={[3,6,5]}

intensity={2}

/>

<Suspense fallback={null}>

<Environment preset="sunset"/>

<IntroScene/>

</Suspense>

</Canvas>

);

}

export default App;
