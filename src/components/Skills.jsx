import React, { useRef, useState } from 'react'
import photo from '../assets/react.svg'
import { AiFillHtml5, AiFillDownSquare, AiFillUpSquare } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import themehook from './ThemeContext'
import { motion, useInView } from 'framer-motion'

function Skills() {
    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false)
    const [third, setthird] = useState(false)
    const [fourth, setfourth] = useState(false)

    const { fade, slideleft } = themehook()

    const div1 = useRef(null)
    const div2 = useRef(null)
    const div3 = useRef(null)
    const div4 = useRef(null)

    const Inview1 = useInView(div1, { once: false })
    const Inview2 = useInView(div2, { once: false })
    const Inview3 = useInView(div3, { once: false })
    const Inview4 = useInView(div4, { once: false })
    const { theme } = themehook()

    return (
        <div div className=' flex flex-col justify-center items-center p-7 sm:h-[65vh]' id='skills' >
            <h1 className=' text-center text-3xl font-bold'>My Skills</h1>
            <div className=' flex p-5 flex-col sm:flex-row'>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${first ? " h-60 sm:h-72" : "h-36"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div1}
                            variants={fade}
                            initial="hidden"
                            animate={Inview1 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <AiFillHtml5 size={50} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500'>HTML</h1>
                        <button onClick={() => {
                            setfirst(!first)
                        }} className=' my-1'>{first ? <AiFillUpSquare size={25} /> : <AiFillDownSquare size={25} />}</button>
                        <p>HTML is the standard markup language for Web pages. With HTML you can create your own Website.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${second ? " h-60 sm:h-72" : "h-36"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div2}
                            variants={fade}
                            initial="hidden"
                            animate={Inview2 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <FaReact size={50} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500'>React js</h1>
                        <button onClick={() => {
                            setsecond(!second)
                        }} className=' my-1'>{second ? <AiFillUpSquare size={25} /> : <AiFillDownSquare size={25} />}</button>
                        <p>React is a JavaScript library for building user interfaces.React is used to build single-page applications.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${third ? " h-60 sm:h-72" : "h-36"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div3}
                            variants={fade}
                            initial="hidden"
                            animate={Inview3 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <FaNodeJs size={50} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500'>Node js</h1>
                        <button onClick={() => {
                            setthird(!third)
                        }} className=' my-1'>{second ? <AiFillUpSquare size={25} /> : <AiFillDownSquare size={25} />}</button>
                        <p>Node.js is an open source server environment.Node.js allows you to run JavaScript on the server.</p>
                    </div>
                </div>
                <div className=' sm:w-1/4 w-full flex justify-center'>
                    <div className={`flex flex-col sm:w-56 p-5 overflow-hidden items-center ${fourth ? " h-60 sm:h-72" : "h-36"} ${theme == "dark" ? " shadow-2xl" : "shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]"} m-2 transition-all ease-linear duration-300`}>
                        <motion.section ref={div4}
                            variants={fade}
                            initial="hidden"
                            animate={Inview4 ? "visible" : "hidden"}
                            transition={{
                                duration: 1
                            }}>
                            <DiCss3 size={50} />
                        </motion.section>
                        <h1 className=' text-3xl font-bold text-green-500'>CSS</h1>
                        <button onClick={() => {
                            setfourth(!fourth)
                        }} className=' my-1'>{second ? <AiFillUpSquare size={25} /> : <AiFillDownSquare size={25} />}</button>
                        <p>CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills