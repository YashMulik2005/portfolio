import React from 'react'
import photo from '../assets/react.svg'
import themehook from './ThemeContext'

function About() {
    const { theme } = themehook()
    return (
        <div className={`flex flex-col-reverse sm:mt-[-10px] sm:flex-row py-7 sm:py-0 ${theme == "dark" ? "bg-[#0E0B0B]" : " bg-slate-300"} `} id='about'>
            <div className=' sm:w-1/2 sm:h-[70vh] w-full'>
                <img src={photo} alt="" className=' w-full h-full p-5 sm:p-10' />
            </div>
            <div className=' sm:w-1/2 h-[70vh] flex flex-col justify-center sm:items-start px-7 w-full items-center'>
                <h1 className=' text-4xl font-bold'>About Me</h1>
                <h1 className={` text-xl ${theme == 'dark' ? ' text-green-500' : ' text-green-700'} font-bold`}>Web Developer</h1>
                <p>I am currently pursing Diploma second year in information Technology.
                    skill in React, HTML,Javascript,C++,java
                    Have hungry to learn new technologies and
                    frameworks. Learn technologies quickly, helping to shorten turnaround times.
                    Through my coursework and personal projects, I have gained hands-on experience in developing web applications and software solutions.
                    What sets me apart is my insatiable hunger for learning. I thrive on the opportunity to acquire new knowledge and skills, and I actively seek out the latest technologies and frameworks to stay ahead of the curve.</p>
                <button className={`${theme == 'dark' ? ' bg-green-500' : ' bg-green-700'} text-white rounded-sm py-1 px-2 font-semibold w-40 my-4`}>More Information</button>
            </div>
        </div>
    )
}

export default About