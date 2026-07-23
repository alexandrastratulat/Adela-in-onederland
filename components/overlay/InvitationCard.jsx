"use client";

import styles from "./InvitationCard.module.css";

import StoryText from "./StoryText";
import WaxSeal from "./WaxSeal";
import RSVPButton from "./RSVPButton";

export default function InvitationCard(){

return(

<div className={styles.card}>

<p className={styles.chapter}>

Capitolul I

</p>

<h1>

Adela in ONEderland

</h1>

<div className={styles.separator}/>

<StoryText/>

<div className={styles.info}>

<div>📅 28 noiembrie 2026</div>

<div>🕐 Ora 13:00</div>

<div>📍 Vila Hepa • Brașov</div>

</div>

<WaxSeal/>

<RSVPButton/>

</div>

);

}
