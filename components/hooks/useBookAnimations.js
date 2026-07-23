"use client";

import gsap from "gsap";

export default function useBookAnimation(
    cover,
    pages,
    onFinished
){

    const open = ()=>{

        const tl = gsap.timeline();

        tl.to(
            cover.rotation,
            {
                y:-Math.PI*0.82,
                duration:2.4,
                ease:"power3.inOut"
            }
        );

        tl.to(
            pages.rotation,
            {
                y:-0.08,
                duration:1,
                ease:"power2.out"
            },
            "-=1.4"
        );

        tl.call(()=>{

            if(onFinished){

                onFinished();

            }

        });

    };

    return{

        open

    };

}
