"use client";

import gsap from "gsap";

export default function useCameraAnimation(camera){

    const zoomBook=()=>{

        gsap.to(

            camera.position,

            {

                x:0,

                y:1.45,

                z:-16.8,

                duration:2.8,

                ease:"power3.inOut"

            }

        );

    };

    const resetCamera=()=>{

        gsap.to(

            camera.position,

            {

                x:0,

                y:1.6,

                z:8,

                duration:2,

                ease:"power3.inOut"

            }

        );

    };

    return{

        zoomBook,

        resetCamera

    };

}
