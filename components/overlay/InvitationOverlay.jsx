"use client";

import { motion } from "framer-motion";

import InvitationCard from "../ui/InvitationCard";

export default function InvitationOverlay(){

    return(

        <motion.div

            initial={{

                opacity:0

            }}

            animate={{

                opacity:1

            }}

            exit={{

                opacity:0

            }}

            transition={{

                duration:1

            }}

            style={{

                position:"absolute",
                inset:0,
                pointerEvents:"none"

            }}

        >

            <InvitationCard/>

        </motion.div>

    );

}
