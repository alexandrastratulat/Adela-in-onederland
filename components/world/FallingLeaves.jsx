"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallingLeaves(){

    const group = useRef();

    const leaves = useMemo(() => {

        return Array.from({length:40},()=>({

            x:(Math.random()-0.5)*20,
            y:Math.random()*8+2,
            z:(Math.random()-0.5)*25,
            speed:0.003+Math.random()*0.006

        }));

    },[]);

    useFrame(()=>{

        group.current.children.forEach((leaf,index)=>{

            leaf.position.y-=leaves[index].speed;
            leaf.rotation.z+=0.01;

            if(leaf.position.y<-0.2){

                leaf.position.y=8;

            }

        });

    });

    return(

        <group ref={group}>

            {leaves.map((leaf,index)=>(

                <mesh

                    key={index}

                    position={[leaf.x,leaf.y,leaf.z]}

                >

                    <planeGeometry args={[0.09,0.14]} />

                    <meshStandardMaterial

                        color="#d5a25d"

                        side={2}

                    />

                </mesh>

            ))}

        </group>

    );

}
