"use client";

import gsap from "gsap";

export default function usePortalTransition(camera,setChapter){

    const enter=()=>{

        const tl=gsap.timeline();

        tl.to(

            camera.position,

            {

                z:-8,

                duration:4,

                ease:"power2.inOut"

            }

        );

        tl.call(()=>{

            setChapter("wonderland");

        });

    };

    return{

        enter

    };

}
