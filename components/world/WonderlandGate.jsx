"use client";

import { Text } from "@react-three/drei";

export default function WonderlandGate(){

    return(

        <group position={[0,0,-8]}>

            <mesh>

                <torusGeometry

                    args={[2.4,0.12,32,120]}

                />

                <meshStandardMaterial

                    color="#d8b46d"

                    metalness={0.6}

                    roughness={0.25}

                />

            </mesh>

            <Text

                position={[0,-3,0]}

                fontSize={0.25}

                color="#6c5538"

                anchorX="center"

            >

                Bun venit în lumea Adelei

            </Text>

        </group>

    );

}
