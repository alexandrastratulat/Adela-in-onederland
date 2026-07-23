"use client";

export default function WaxSeal3D(){

    return(

        <mesh

            position={[0.92,0.30,-17.96]}

            rotation={[-Math.PI/2,0,0]}

            castShadow

        >

            <cylinderGeometry

                args={[0.09,0.09,0.02,64]}

            />

            <meshStandardMaterial

                color="#8d232e"

                roughness={0.8}

            />

        </mesh>

    );

}
