"use client";

import { createContext, useContext, useState } from "react";

const ExperienceContext = createContext();

export function ExperienceProvider({ children }) {

    const [chapter, setChapter] = useState("intro");

    return (

        <ExperienceContext.Provider

            value={{

                chapter,

                setChapter

            }}

        >

            {children}

        </ExperienceContext.Provider>

    );

}

export function useExperience(){

    return useContext(ExperienceContext);

}
