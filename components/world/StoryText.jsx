"use client";

import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function StoryText(){

    return(

        <motion.group

            initial={{

                opacity:0,

                y:-0.5

            }}

            animate={{

                opacity:1,

                y:0

            }}

            transition={{

                duration:2

            }}

        >

            <Text

                position={[0,2,-10]}

                fontSize={0.35}

                color="#5e4730"

                anchorX="center"

                maxWidth={8}

            >

                A fost odată o fetiță pe nume Adela...

            </Text>

        </motion.group>

    );

}
