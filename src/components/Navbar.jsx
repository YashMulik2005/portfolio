import React, { useEffect, useState } from 'react'
import themehook from './ThemeContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'

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
            <nav className={`flex h-10 border-b-[1px] ${theme == 'dark' ? 'border-white' : ' border-black'} justify-between items-center p-2`}>
                <h1 className={`text-xl ${theme == 'dark' ? ' text-green-500' : ' text-green-700'} font-bold`}>Portfolio</h1>
                {/* <button onClick={handletoggle} className='sm:hidden'>click</button> */}
                <section onClick={handletoggle} className='sm:hidden'>
                    {height ? <ImCancelCircle size={23} /> : <GiHamburgerMenu size={23} />}
                </section>

                {/* <button onClick={handletheme} className=''>theme</button> */}
            </nav>
            <div >
                <ul className={`sm:flex justify-center items-center shadow-md m-1 ${height ? "h-28" : "h-0 overflow-hidden"} sm:h-auto transition-all ease-linear duration-300 `}>
                    <li className='m-1 font-semibold '><a href='#about'>About</a></li>
                    <li className='m-1 font-semibold '><a href='#contact'>Contact</a></li>
                    <li className='m-1 font-semibold '><a href='#project'>Projects</a></li>
                    <li className='m-1 font-semibold '><a href='#skills'>Skills</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar