"use client";

import { AnimatePresence } from "framer-motion";

import { useExperience } from "../context/ExperienceContext";

import InvitationOverlay from "../overlay/InvitationOverlay";

export default function OverlayManager(){

const{

chapter

}=useExperience();

return(

<AnimatePresence mode="wait">

{

chapter==="invitation" &&

<InvitationOverlay/>

}

</AnimatePresence>

);

}
