"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import styles from "./StoryText.module.css";

gsap.registerPlugin(TextPlugin);

export default function StoryText() {

    const text = useRef();

    useEffect(() => {

        gsap.fromTo(

            text.current,

            {

                text: ""

            },

            {

                duration: 5,

                text:
                    "Fiecare poveste începe cu o pagină.\nVă invităm să faceți parte din primul capitol al Adelei.",

                ease: "none"

            }

        );

    }, []);

    return (

        <p

            ref={text}

            className={styles.story}

        />

    );

}
