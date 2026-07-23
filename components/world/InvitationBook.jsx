"use client";

import { Clone, Text, useCursor, useGLTF } from "@react-three/drei";
import { useState } from "react";
import { useExperience } from "../context/ExperienceContext";

export default function InvitationBook() {

    const { scene } = useGLTF("/models/open_book.glb");

    const {

        setSelectedObject

    } = useExperience();

    const [hovered,setHovered]=useState(false);

    useCursor(hovered);

    return(

        <group

            position={[0,0.82,-18]}

            rotation={[0,Math.PI,0]}

            onPointerOver={()=>setHovered(true)}

            onPointerOut={()=>setHovered(false)}

            onClick={()=>{

                setSelectedObject("book");

            }}

        >

            <Clone

                object={scene}

                scale={1.15}

            />

            <Text

                position={[-0.55,0.18,0.015]}

                rotation={[-Math.PI/2,0,0]}

                fontSize={0.07}

                color="#4d3927"

                anchorX="center"

            >

                Capitolul I

            </Text>

            <Text

                position={[-0.55,-0.02,0.015]}

                rotation={[-Math.PI/2,0,0]}

                fontSize={0.11}

                color="#5c4430"

                anchorX="center"

            >

                Adela in

                {"\n"}

                ONEderland

            </Text>

        </group>

    );

}

useGLTF.preload("/models/open_book.glb");
