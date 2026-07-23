"use client";

import { useExperience } from "../context/ExperienceContext";

import Atmosphere from "../world/Atmosphere";
import Desk from "../world/Desk";
import Book from "../world/Book";

import FloatingDust from "../effects/FloatingDust";
import GoldenLight from "../effects/GoldenLight";
import PageGlow from "../effects/PageGlow";

import WonderlandScene from "./WonderlandScene";

export default function IntroScene({started}){

    const { chapter } = useExperience();

    return(

        <>

            <Atmosphere/>

            {chapter==="intro" && <Desk/>}

            {chapter==="intro" &&

                <Book

                    started={started}

                />

            }

            {chapter==="intro" && <FloatingDust/>}

            {chapter==="intro" && <GoldenLight/>}

            {chapter==="intro" && <PageGlow/>}

            {(chapter==="portal" || chapter==="wonderland") &&

                <WonderlandScene/>

            }

        </>

    );

}
