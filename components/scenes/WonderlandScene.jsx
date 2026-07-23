"use client";

import ForestGround from "../world/ForestGround";
import ForestLights from "../world/ForestLights";
import WonderlandGate from "../world/WonderlandGate";
import Fireflies from "../world/Fireflies";

import Trees from "../world/Trees";
import Flowers from "../world/Flowers";
import FallingLeaves from "../world/FallingLeaves";
import StoryText from "../world/StoryText";

import TeaTable from "../world/TeaTable";
import PlayingCards from "../world/PlayingCards";
import GoldenKeys from "../world/GoldenKeys";

import InvitationBook from "../world/InvitationBook";
import InvitationSpotLight from "../world/InvitationSpotLight";
import WaxSeal3D from "../world/WaxSeal3D";
import InkParticles from "../world/InkParticles";

export default function WonderlandScene(){

    return(

        <group>

            <ForestGround/>

            <ForestLights/>

            <Trees/>

            <Flowers/>

            <Fireflies/>

            <FallingLeaves/>

            <WonderlandGate/>

            <StoryText/>

            <TeaTable/>

            <PlayingCards/>

            <GoldenKeys/>

            <InvitationSpotLight/>

            <InvitationBook/>

            <WaxSeal3D/>

            <InkParticles/>

        </group>

    );

}
