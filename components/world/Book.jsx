"use client";

import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Book() {

    const group = useRef();
    const cover = useRef();

    const { scene } = useGLTF("/models/book.glb");

    const openBook = () => {

        if (!cover.current) return;

        gsap.to(cover.current.rotation, {
            y: -Math.PI * 0.82,
            duration: 2.2,
            ease: "power3.inOut"
        });

    };

    return (

        <group
            ref={group}
            position={[0,0.05,0]}
            scale={1}
        >

            <primitive object={scene} />

        </group>

    );

}

useGLTF.preload("/models/book.glb");
