import React, { useRef, useState } from 'react'
import photo from '../assets/react.svg'
import { AiFillHtml5, AiFillDownSquare, AiFillUpSquare } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import themehook from './ThemeContext'
import { motion, useInView } from 'framer-motion'
// import './Skill.css'

function Skills() {

    const { fade, slideleft, setheight } = themehook()

    const div1 = useRef(null)
    const div2 = useRef(null)
    const div3 = useRef(null)
    const div4 = useRef(null)

    const Inview1 = useInView(div1, { once: false })
    const Inview2 = useInView(div2, { once: false })
    const Inview3 = useInView(div3, { once: false })
    const Inview4 = useInView(div4, { once: false })
    const { theme } = themehook()

    const handlenav = () => {
        setheight(false)
    }

    return (
        <div div className=' flex flex-col justify-center items-center p-7 sm:h-[65vh]' id='skills' onClick={handlenav} >
            <h1 className=' text-center text-3xl font-bold'>My Skills</h1>
            <div className=' flex p-5 flex-col sm:flex-row w-[100%]'>
                <div className='sm:w-1/4 w-full flex justify-center '>
                    <div className={` group rounded  flex flex-col w-full sm:w-56 h-36 hover:sm:h-60 hover:h-48 hover:bg-green-500 my-5 sm:my-0
                     p-5  overflow-hidden items-center ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div1}
                            variants={fade}
                            initial="hidden"
                            animate={Inview1 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <AiFillHtml5 size={50} className={`${theme == "garden" ? "text-black" : " text-white"}`} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500 group-hover:text-white'>HTML</h1>
                        {/* <button onClick={() => {
                            setfirst(!first)
                        }} className=' my-1'>{first ? <AiFillUpSquare size={25} /> : <AiFillDownSquare size={25} />}</button> */}
                        <p className=' hidden group-hover:block group-hover:text-white'>HTML is the standard markup language for Web pages. With HTML you can create your own Website.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={` rounded group flex flex-col w-full sm:w-56 h-36 hover:sm:h-60 hover:h-48 hover:bg-green-500 p-5 overflow-hidden items-center ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} my-5 sm:my-0 m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div2}
                            variants={fade}
                            initial="hidden"
                            animate={Inview2 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <FaReact size={50} className={`${theme == "garden" ? "text-black" : " text-white"}`} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500 group-hover:text-white'>React js</h1>

                        <p className=' hidden group-hover:block group-hover:text-white'>React is a JavaScript library for building user interfaces.React is used to build single-page applications.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`rounded group flex flex-col w-full sm:w-56  h-36 hover:sm:h-60 hover:h-48 hover:bg-green-500 p-5 overflow-hidden items-center ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} my-5 sm:my-0 m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div3}
                            variants={fade}
                            initial="hidden"
                            animate={Inview3 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <FaNodeJs size={50} className={`${theme == "garden" ? "text-black" : " text-white"}`} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500 group-hover:text-white'>Node js</h1>

                        <p className=' hidden group-hover:block group-hover:text-white'>Node.js is an open source server environment.Node.js allows you to run JavaScript on the server.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex group rounded flex-col w-full sm:w-56 h-36 hover:sm:h-60 hover:h-48 hover:bg-green-500 p-5 overflow-hidden items-center ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} my-5 sm:my-0 m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div4}
                            variants={fade}
                            initial="hidden"
                            animate={Inview4 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <DiCss3 size={50} className={`${theme == "garden" ? "text-black" : " text-white"}`} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500 group-hover:text-white'>CSS</h1>
                        <p className=' hidden group-hover:block group-hover:text-white' >CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills