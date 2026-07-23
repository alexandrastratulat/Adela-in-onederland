"use client";

import { AnimatePresence } from "framer-motion";

import InvitationOverlay from "../overlay/InvitationOverlay";

import { useExperience } from "../context/ExperienceContext";

export default function OverlayManager(){

    const { chapter } = useExperience();

    return(

        <AnimatePresence mode="wait">

            {chapter==="invitation" && (

                <InvitationOverlay/>

            )}

        </AnimatePresence>

    );

}
