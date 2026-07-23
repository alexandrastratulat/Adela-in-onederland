"use client";

import styles from "./OpenButton.module.css";

export default function OpenButton({onClick}){

    return(

        <button

            className={styles.button}

            onClick={onClick}

        >

            Deschide povestea

        </button>

    );

}
