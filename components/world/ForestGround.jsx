"use client";

export default function ForestGround(){

    return(

        <mesh

            rotation={[-Math.PI/2,0,0]}

            receiveShadow

            position={[0,-0.02,0]}

        >

            <circleGeometry

                args={[40,128]}

            />

            <meshStandardMaterial

                color="#dce8cf"

                roughness={1}

                metalness={0}

            />

        </mesh>

    );

}
