"use client";

import { Clone, Text, useGLTF } from "@react-three/drei";

export default function InvitationBook() {

    const { scene } = useGLTF("/models/open_book.glb");

    return (

        <group
            position={[0,0.82,-18]}
            rotation={[0,Math.PI,0]}
        >

            <Clone
                object={scene}
                scale={1.15}
                castShadow
                receiveShadow
            />

            {/* PAGINA STÂNGĂ */}

            <Text

                position={[-0.55,0.18,0.015]}

                rotation={[-Math.PI/2,0,0]}

                fontSize={0.075}

                color="#4b3929"

                anchorX="center"

                maxWidth={1}

            >

                Capitolul I

            </Text>

            <Text

                position={[-0.55,-0.02,0.015]}

                rotation={[-Math.PI/2,0,0]}

                fontSize={0.11}

                maxWidth={1}

                color="#6b5037"

                anchorX="center"

            >

                Adela in
                {"\n"}
                ONEderland

            </Text>

            {/* PAGINA DREAPTĂ */}

            <Text

                position={[0.55,0.22,0.015]}

                rotation={[-Math.PI/2,0,0]}

                fontSize={0.055}

                color="#4b3929"

                maxWidth={1}

                anchorX="center"

            >

                28 noiembrie 2026

            </Text>

            <Text

                position={[0.55,0.06,0.015]}

                rotation={[-Math.PI/2,0,0]}

                fontSize={0.055}

                color="#4b3929"

                anchorX="center"

            >

                Ora 13:00

            </Text>

            <Text

                position={[0.55,-0.12,0.015]}

                rotation={[-Math.PI/2,0,0]}

                fontSize={0.05}

                maxWidth={1}

                color="#4b3929"

                anchorX="center"

            >

                Vila Hepa
                {"\n"}
                Brașov

            </Text>

        </group>

    );

}

useGLTF.preload("/models/open_book.glb");
