"use client";

import { motion } from "framer-motion";

import InvitationCard from "./InvitationCard";
import Countdown from "./Countdown";

export default function InvitationOverlay() {

    return (

        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            transition={{

                duration: 1.5

            }}

            style={{

                position: "absolute",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "none"

            }}

        >

            <div
                style={{

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "35px"

                }}
            >

                <InvitationCard />

                <Countdown />

            </div>

        </motion.div>

    );

}
