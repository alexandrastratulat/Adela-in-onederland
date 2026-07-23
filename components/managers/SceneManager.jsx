"use client";

import { useExperience } from "../context/ExperienceContext";

import IntroScene from "../scenes/IntroScene";
import WonderlandScene from "../scenes/WonderlandScene";

export default function SceneManager({ started }) {

    const { chapter } = useExperience();

    return (
        <>
            {chapter === "intro" && (
                <IntroScene started={started} />
            )}

            {(chapter === "portal" ||
              chapter === "wonderland" ||
              chapter === "invitation" ||
              chapter === "gallery" ||
              chapter === "ending") && (
                <WonderlandScene />
            )}
        </>
    );

}
