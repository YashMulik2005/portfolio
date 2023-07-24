import React, { useEffect, useState } from 'react'
import themehook from './ThemeContext'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'

function Navbar() {
    const { theme, changetheme, setheight, height } = themehook()

    const handletoggle = () => {
        setheight(!height)
    }

    const scrollToSkills = () => {
        const aboutSection = document.getElementById('skills');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContact = () => {
        const aboutSection = document.getElementById('contact');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProjects = () => {
        const aboutSection = document.getElementById('project');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

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
            <nav className={`flex h-12 border-b-[1px] ${theme == 'dark' ? 'border-white' : ' border-black'} justify-between items-center p-2`}>
                <h1 className={`text-2xl ${theme == 'dark' ? ' text-green-500' : ' text-green-700'} font-bold`}>Portfolio</h1>
                {/* <button onClick={handletoggle} className='sm:hidden'>click</button> */}
                <section onClick={handletoggle} className='sm:hidden'>
                    {height ? <ImCancelCircle size={30} /> : <GiHamburgerMenu size={30} />}
                </section>

                {/* <button onClick={handletheme} className=''>theme</button> */}
            </nav>
            <div >
                <ul className={`sm:flex justify-center items-center shadow-md m-1 ${height ? "h-32" : "h-0 overflow-hidden"} sm:h-auto transition-all ease-linear duration-300 `}>
                    <li className='m-[5px] font-semibold ' onClick={scrollToAbout}>About</li>
                    <li className='m-[5px] font-semibold ' onClick={scrollToContact}>Contact</li>
                    <li className='m-[5px] font-semibold ' onClick={scrollToProjects}>Projects</li>
                    <li className='m-[5px] font-semibold ' onClick={scrollToSkills}>Skills</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar