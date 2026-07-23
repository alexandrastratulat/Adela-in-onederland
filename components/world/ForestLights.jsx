"use client";

export default function ForestLights(){

    return(

        <>

            <hemisphereLight

                intensity={1}

                skyColor="#fff9ea"

                groundColor="#9aa97b"

            />

            <directionalLight

                castShadow

                intensity={3}

                color="#ffe2a8"

                position={[5,8,3]}

                shadow-mapSize-width={4096}

                shadow-mapSize-height={4096}

            />

            <pointLight

                position={[0,2,0]}

                intensity={0.5}

                color="#fff1cf"

            />

        </>

    );

}
