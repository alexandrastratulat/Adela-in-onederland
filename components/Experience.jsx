"use client";

import { Canvas } from "@react-three/fiber";

import { Environment } from "@react-three/drei";

import CameraRig from "./camera/CameraRig";

import SceneManager from "./managers/SceneManager";

import OverlayManager from "./managers/OverlayManager";

export default function Experience({started}){

return(

<>

<Canvas

shadows

camera={{

position:[0,1.6,8],

fov:38

}}

>

<color

attach="background"

args={["#f7f4ef"]}

/>

<ambientLight intensity={0.45}/>

<directionalLight

position={[4,8,4]}

castShadow

intensity={2}

/>

<Environment preset="sunset"/>

<CameraRig/>

<SceneManager

started={started}

/>

</Canvas>

<OverlayManager/>

</>

);

}
