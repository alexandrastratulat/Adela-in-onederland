"use client";

import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

export default function Fireflies(){

    const positions=useMemo(()=>{

        const arr=[];

        for(let i=0;i<250;i++){

            arr.push(

                (Math.random()-0.5)*25,
                Math.random()*4,
                (Math.random()-0.5)*25

            );

        }

        return new Float32Array(arr);

    },[]);

    return(

        <Points

            positions={positions}

        >

            <PointMaterial

                size={0.06}

                color="#fff4b2"

                transparent

                opacity={0.9}

                depthWrite={false}

            />

        </Points>

    );

}
