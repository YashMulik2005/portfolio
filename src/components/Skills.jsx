import React, { useState } from 'react'
import photo from '../assets/react.svg'
import { AiFillHtml5, AiFillDownSquare, AiFillUpSquare } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import themehook from './ThemeContext'

function Skills() {
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [fourth, setfourth] = useState(false)
    const { theme } = themehook()

    return (
        <div div className=' p-7' id='skills' >
            <h1 className=' text-center text-3xl font-bold'>My Skills</h1>
            <div className=' flex p-5 flex-col sm:flex-row'>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${first ? " h-64" : "h-32"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        {/* <img src={photo} alt="" className=' w-1/2 h-1/2' /> */}
                        <section>
                            <AiFillHtml5 size={50} />
                        </section>
                        <h1 className=' text-3xl font-bold text-green-500'>HTML</h1>
                        <button onClick={() => {
                            setfirst(!first)
                        }}>{first ? <AiFillUpSquare size={19} /> : <AiFillDownSquare size={19} />}</button>
                        <p>HTML is the standard markup language for Web pages. With HTML you can create your own Website.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${second ? " h-64" : "h-32"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        {/* <img src={photo} alt="" className=' w-1/2 h-1/2' /> */}
                        <section>
                            <FaReact size={50} />
                        </section>
                        <h1 className=' text-3xl font-bold text-green-500'>React js</h1>
                        <button onClick={() => {
                            setsecond(!second)
                        }}>{first ? <AiFillUpSquare size={19} /> : <AiFillDownSquare size={19} />}</button>
                        <p>React is a JavaScript library for building user interfaces.React is used to build single-page applications.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${third ? "h-64" : "h-32"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        {/* <img src={photo} alt="" className=' w-1/2 h-1/2' /> */}
                        <section>
                            <FaNodeJs size={50} />
                        </section>
                        <h1 className=' text-3xl font-bold text-green-500'>Node js</h1>
                        <button onClick={() => {
                            setthird(!third)
                        }}>{first ? <AiFillUpSquare size={19} /> : <AiFillDownSquare size={19} />}</button>
                        <p>Node.js is an open source server environment.Node.js allows you to run JavaScript on the server.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${fourth ? "h-64" : "h-32"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        {/* <img src={photo} alt="" className=' w-1/2 h-1/2' /> */}
                        <section>
                            <DiCss3 size={50} />
                        </section>
                        <h1 className=' text-3xl font-bold text-green-500'>CSS</h1>
                        <button onClick={() => {
                            setfourth(!fourth)
                        }}>{first ? <AiFillUpSquare size={19} /> : <AiFillDownSquare size={19} />}</button>
                        <p>CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills