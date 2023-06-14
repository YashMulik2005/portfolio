import React from 'react'
import themehook from './ThemeContext'

function Footer() {
    const { theme } = themehook()
    return (
        <div className={`${theme == "dark" ? "bg-[#0E0B0B]" : "bg-slate-300"} p-3`}>
            <h1 className={` text-center text-lg ${theme == "dark" ? "text-green-500" : "text-green-800"}`}>@Yash Mulik 2023</h1>
        </div>
    )
}

export default Footer