import { useState, useContext, createContext } from "react";
import react from 'react'

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "garden");
    const [height, setheight] = useState(false)

    const changetheme = () => {
        if (theme == "dark") {
            settheme("garden")
        }
        else {
            settheme("dark")
        }
    }

    const fade = {
        "hidden": { opacity: 0 },
        "visible": { opacity: 1 }
    }

    const slideleft = {
        "hidden": { opacity: 0, x: -40 },
        "visible": { opacity: 1, x: 10 }
    }

    const value = {
        theme,
        changetheme,
        fade,
        slideleft,
        height,
        setheight
    }
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}

const themehook = () => {
    const context = useContext(ThemeContext)
    return context
}

export default themehook