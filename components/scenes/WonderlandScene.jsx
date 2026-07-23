"use client";

import ForestGround from "../world/ForestGround";
import ForestLights from "../world/ForestLights";
import Fireflies from "../world/Fireflies";
import WonderlandGate from "../world/WonderlandGate";

export default function WonderlandScene(){

    return(

        <group>

            <ForestGround/>

            <ForestLights/>

            <WonderlandGate/>

            <Fireflies/>

        </group>

    );

}
