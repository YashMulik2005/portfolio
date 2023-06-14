import { useState, useContext, createContext } from "react";
import react from 'react'

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, settheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "garden");

    const changetheme = () => {
        if (theme == "dark") {
            settheme("garden")
        }
        else {
            settheme("dark")
        }
    }

    const value = {
        theme,
        changetheme
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