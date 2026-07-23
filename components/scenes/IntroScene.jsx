"use client";

import Atmosphere from "../world/Atmosphere";
import Desk from "../world/Desk";
import Book from "../world/Book";

import FloatingDust from "../effects/FloatingDust";
import GoldenLight from "../effects/GoldenLight";

export default function IntroScene({started}){

return(

<>

<Atmosphere/>

<Desk/>

<Book

started={started}

/>

<FloatingDust/>

<GoldenLight/>

</>

);

}
