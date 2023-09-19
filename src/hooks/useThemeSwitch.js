"use client"

import {useEffect, useState} from "react";

export function useSwitchTheme() {
    const [mode, setMode] = useState("dark");
    const preferDarkQuery = "(prefers-color-schema:dark)"
    const storageKey = "theme"

    const toggleTheme = (theme) => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem(storageKey, theme)
    }

    const getUserPreference = () => {
        const userPref = localStorage.getItem(storageKey)
        if (userPref) return userPref

        return matchMedia(preferDarkQuery).matches ? "dark" : "light"
    }

    useEffect(() => {
      const mediaQuery = matchMedia(preferDarkQuery)

        const handleChange = () => {
            const newMode = getUserPreference()
            setMode(newMode)
            toggleTheme(newMode)
        }
        handleChange()

        mediaQuery.addEventListener("change", handleChange)

        return () => {
          mediaQuery.removeEventListener("change", handleChange)
        }
    }, []);

    useEffect(() => {
        toggleTheme(mode)
    }, [mode]);

    return [mode, setMode]
}