"use client";

export default function InvitationSpotLight(){

    return(

        <spotLight

            position={[0,4,-16]}

            angle={0.35}

            penumbra={1}

            intensity={8}

            color="#ffe6b5"

            target-position={[0,0,-18]}

            castShadow

        />

    );

}
