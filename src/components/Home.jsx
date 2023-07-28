import React, { useRef } from 'react'
import photo from '../assets/react.svg'
import yash from '../assets/profile.png'
import themehook from './ThemeContext'
import { motion, useInView } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Home() {
    const { theme, changetheme, fade, slideleft, setheight } = themehook()
    const handletheme = () => {
        changetheme()
    }

    const divfade = useRef(null)
    const divslide = useRef(null)

    const fadeview = useInView(divfade, { once: false })
    const slideview = useInView(divslide, { once: false })

    // const fade = {
    //     "hidden": { opacity: 0 },
    //     "visible": { opacity: 1 }
    // }

    // const slideleft = {
    //     "hidden": { opacity: 0, x: -40 },
    //     "visible": { opacity: 1, x: 10 }
    // }
    const scrollToProjects = () => {
        const aboutSection = document.getElementById('project');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    };

    const handlenav = () => {
        setheight(false)
    }

    return (
        <div className=' flex flex-col sm:flex-row mt-2 justify-center relative'>
            <motion.div className=' flex flex-col sm:w-2/3 items-centers justify-center h-[80vh] px-10 py-5 sm:py-0'
                ref={divfade}
                variants={fade}
                initial="hidden"
                animate={fadeview ? "visible" : "hidden"}
                transition={{
                    duration: 0.9
                }}
            >
                <h1 className=' text-xl sm:text-3xl font-bold'>hello I'am</h1>
                <motion.h1 className={` text-5xl sm:text-[60px] font-bold ${theme == "dark" ? "text-white" : "text-black"}`}
                    ref={divslide}
                    variants={slideleft}
                    initial="hidden"
                    animate={slideview ? "visible" : "hidden"}
                    transition={{
                        duration: 0.5,
                        delay: 0.65
                    }}
                >Yash Mulik</motion.h1>
                <h1 className=' text-2xl sm:text-3xl font-bold my-1'>Web <span className={`${theme == 'dark' ? ' text-green-500' : ' text-green-700'}`}>Developer .</span></h1>
                <h1 className=' text-lg my-2'>Web developer with passion for continuous learning,leveraging cutting-edage technologies and actively pursuing challenging projects to expand skillset.</h1>
                <span className=' flex'><button className={`${theme == 'dark' ? ' bg-green-700' : ' bg-green-800'} text-white py-1 px-3 rounded-sm m-2 text-lg font-bold`}><a href="mailto:yashmulik95@gmail.com">Send Email</a></button><h1 className='m-2 text-xl font-bold' onClick={scrollToProjects} ><u>See Project</u></h1></span>
            </motion.div>
            {/* <motion.div className=' sm:w-1/2 h-full sm:h-[88vh] flex justify-center items-center rounded-sm'

            >
                <LazyLoadImage src={photo} alt="" className=' w-[75vh] h-[65vh] p-6' effect='blur' />
            </motion.div> */}
            <label className="swap swap-rotate absolute right-5 top-2"  >
                <input type="checkbox" onClick={handletheme} className='w-4 h-4' checked={theme == 'dark' ? true : false} />
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
        </div>
    )
}

export default Home