"use client";

import Atmosphere from "../world/Atmosphere";
import Desk from "../world/Desk";
import Book from "../world/Book";

export default function IntroScene({ started }) {

    return (
        <>
            <Atmosphere />
            <Desk />
            <Book started={started} />
        </>
    );

}
