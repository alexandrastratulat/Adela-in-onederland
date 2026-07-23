"use client";

import styles from "./RSVPButton.module.css";

export default function RSVPButton(){

const phone="407XXXXXXXX";

const message=encodeURIComponent(

"Bună! Confirmăm cu drag prezența la petrecerea Adelei! ❤️"

);

return(

<a

href={`https://wa.me/${phone}?text=${message}`}

target="_blank"

className={styles.button}

>

Confirmă prezența

</a>

);

}
