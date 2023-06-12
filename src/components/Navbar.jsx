import React, { useEffect, useState } from 'react'
import themehook from './ThemeContext'

function Navbar() {
    const { theme, changetheme } = themehook()
    const [height, setheight] = useState(false)

    const handletoggle = () => {
        setheight(!height)
    }

    const handletheme = () => {
        changetheme()
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localtheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute("data-theme", localtheme)
    }, [theme])


    return (
        <div>
            <nav className=' flex h-10 border-b-[1px] justify-between items-center p-2'>
                <h1 className=' text-xl text-green-500 font-bold'>Portfolio</h1>
                <button onClick={handletoggle} className='sm:hidden'>click</button>
                <button onClick={handletheme} className=''>theme</button>
            </nav>
            <div >
                <ul className={`sm:flex justify-center items-center shadow-md m-1 ${height ? "h-24" : "h-0 overflow-hidden"} sm:h-auto`}>
                    <li className='m-1 font-semibold'>About</li>
                    <li className='m-1 font-semibold'>Contact</li>
                    <li className='m-1 font-semibold'>Project</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar