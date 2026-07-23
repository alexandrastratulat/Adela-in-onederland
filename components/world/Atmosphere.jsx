"use client";

import { Sky } from "@react-three/drei";

export default function Atmosphere() {

    return(

        <>

            <fog

                attach="fog"

                args={["#fff8ef",12,40]}

            />

            <Sky

                distance={450000}

                inclination={0.48}

                azimuth={0.28}

                sunPosition={[2,1,4]}

            />

        </>

    )

}
