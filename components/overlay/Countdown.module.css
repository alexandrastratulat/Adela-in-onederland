"use client";

import { useEffect,useState } from "react";

import styles from "./Countdown.module.css";

export default function Countdown(){

const target=

new Date("2026-11-28T13:00:00");

const[getTime,setTime]=useState(getDifference());

function getDifference(){

const difference=

target-new Date();

return{

days:Math.floor(difference/1000/60/60/24),

hours:Math.floor(

difference/1000/60/60)%24,

minutes:Math.floor(

difference/1000/60)%60,

seconds:Math.floor(

difference/1000)%60

};

}

useEffect(()=>{

const interval=

setInterval(()=>{

setTime(

getDifference()

);

},1000);

return()=>clearInterval(interval);

},[]);

return(

<div className={styles.wrapper}>

<div>

<strong>{time.days}</strong>

<span>Zile</span>

</div>

<div>

<strong>{time.hours}</strong>

<span>Ore</span>

</div>

<div>

<strong>{time.minutes}</strong>

<span>Minute</span>

</div>

<div>

<strong>{time.seconds}</strong>

<span>Secunde</span>

</div>

</div>

);

}
