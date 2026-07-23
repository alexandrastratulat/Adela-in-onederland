"use client";

import styles from "./InvitationCard.module.css";

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

<p className={styles.story}>

Fiecare poveste începe cu o pagină.

Vă invităm să faceți parte din primul capitol al Adelei.

</p>

<div className={styles.info}>

<div>

<span>📅</span>

28 noiembrie 2026

</div>

<div>

<span>🕐</span>

13:00

</div>

<div>

<span>📍</span>

Vila Hepa • Brașov

</div>

</div>

</div>

);

}
