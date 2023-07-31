import React, { useRef } from 'react'
import photo from '../assets/p.png'
import themehook from './ThemeContext'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { delay, motion, useInView } from 'framer-motion'

function About() {
    const { theme, setheight } = themehook()
    const divtext = useRef(null)

    const Inview = useInView(divtext, { once: false })

    const fadeup = {
        "hidden": { opacity: 0, y: 40 },
        "visible": { opacity: 1, y: 0 }
    }

    const handlenav = () => {
        setheight(false)
    }

    return (
        <div className={`flex flex-col-reverse sm:mt-[-10px] min-[700px]:flex-row py-7 justify-center items-center sm:px-20 sm:py-0 ${theme == "dark" ? "bg-[#0E0B0B]" : " bg-slate-300"}  min-[700px]:h-auto `} id='about' onClick={handlenav}>
            <div className=' min-[700px]:w-1/2 sm:h-[100%] w-full '>
                <LazyLoadImage src={photo} alt="" className=' w-[100vh] h-[75vh] p-8 sm:p-10 bg-contain' effect='blur' />
            </div>
            <motion.div className=' min-[700px]:w-1/2 sm:h-[70%] flex flex-col justify-center sm:items-start px-7 w-full items-center p-4' ref={divtext}
                variants={fadeup}
                initial="hidden"
                animate={Inview ? "visible" : "hidden"}
                transition={{
                    duration: 0.5,

                }}
            >
                <h1 className=' text-4xl font-bold'>About Me</h1>
                <h1 className={` text-xl ${theme == 'dark' ? ' text-green-500' : ' text-green-700'} font-bold`}>Web Developer</h1>
                <p>I am currently pursing Diploma second year in information Technology.
                    skill in React, HTML,Javascript,C++,java
                    Have hungry to learn new technologies and
                    frameworks. Learn technologies quickly, helping to shorten turnaround times.
                    Through my coursework and personal projects, I have gained hands-on experience in developing web applications and software solutions.
                    What sets me apart is my insatiable hunger for learning. I thrive on the opportunity to acquire new knowledge and skills, and I actively seek out the latest technologies and frameworks to stay ahead of the curve.</p>
                {/* <button className={`${theme == 'dark' ? ' bg-green-700' : ' bg-green-800'} text-white rounded-sm py-1 px-2 font-semibold w-40 my-4`}>More Information</button> */}
                <h1 className=' text-green-600 text-3xl font-bold m-2'>Education</h1>
                <section className=' w-[100%] lg:\:w-[50%] p-1'>
                    <h1 className=' font-bold'>Diploma in Information Technology</h1>
                    <h1 className=' font-bold'>Goverment Polytechnic Mummbai</h1>
                    <section className=' flex justify-between font-bold'>
                        <h1>2021 - 2024</h1>
                        <h1>92.20%</h1>
                    </section>
                </section>
            </motion.div>
        </div>
    )
}

export default About