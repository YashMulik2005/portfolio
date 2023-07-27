import React from 'react'
import forum from '../assets/forum.png'
import news from '../assets/news.png'
import notes from '../assets/notes.png'
import themehook from './ThemeContext'
import { BiLink } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

function Projects() {
    const { theme, setheight } = themehook()

    const handlenav = () => {
        setheight(false)
    }
    return (
        <div className={`${theme == "dark" ? "bg-[#0E0B0B]" : "bg-slate-300"}  p-5 sm:h-[65vh] flex flex-col justify-center items-center sm:px-20 `} id="project" onClick={handlenav}>
            <h1 className=' text-center text-3xl font-bold mt-5'>My Projects</h1>

            <div className=' flex flex-col sm:flex-row p-2'>
                <div className=' group sm:w-1/3 w-full m-2 p-3'>
                    <div className='group h-48 relative hover:scale-110 '>
                        <img src={news} alt="" className=' bg-grad w-full h-[100%] opacity-100 rounded-md group-hover:opacity-35' />

                        <div className=' flex absolute bottom-0 left-0 opacity-80 w-full h-0 group-hover:h-full bg-gradient-to-b from-green-400 to-green-950  justify-center items-center transition-all ease-linear duration-300 rounded ' >
                            <section className=' group-hover:flex justify-center p-3 hidden'>
                                <section className=' bg-white rounded-full mx-2'>
                                    <button className=' text-black m-2 '><a href="https://news020202.netlify.app/" target='black'><BiLink size={30} /></a></button>
                                </section>
                                <section className=' bg-white rounded-full mx-2'>
                                    <button className=' text-black m-2 '><a href=" https://github.com/YashMulik2005/News_app.git" target='black'><BsGithub size={30} /></a></button>
                                </section>
                            </section>
                        </div>
                    </div>

                </div>

                <div className={`sm:w-1/3 w-full m-2 p-3  `} >
                    <div className='group h-48 relative hover:scale-110 '>
                        <img src={notes} alt="" className=' bg-grad w-full h-[100%] opacity-100 rounded-md group-hover:opacity-35' />

                        <div className='flex absolute bottom-0 left-0 opacity-80 w-full h-0 group-hover:h-full bg-gradient-to-b from-green-400 to-green-950  justify-center items-center transition-all ease-linear duration-300 rounded '>
                            <section className=' group-hover:flex justify-center p-3 hidden'>
                                <section className=' bg-white rounded-full mx-2'>
                                    <button className=' text-black m-2 '><a href='https://notes-app-ym.netlify.app/' target='black'><BiLink size={30} /> </a></button>
                                </section>
                                <section className='bg-white rounded-full mx-2'>
                                    <button className=' text-black  m-2 '><a href='https://github.com/YashMulik2005/Notes_App.git' target='black'><BsGithub size={30} /></a></button>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>

                <div className=' sm:w-1/3 w-full m-2 p-3'>
                    <div className='group h-48 relative hover:scale-110 '>
                        <img src={forum} alt="" className='bg-grad w-full h-[100%] opacity-100 rounded-md group-hover:opacity-35' />

                        <div className='flex absolute bottom-0 left-0 opacity-80 w-full h-0 group-hover:h-full bg-gradient-to-b from-green-400 to-green-950  justify-center items-center transition-all ease-linear duration-300 rounded '>
                            <section className='group-hover:flex justify-center p-3 hidden'>
                                <section className='bg-white rounded-full mx-2'>
                                    <button className='text-black  m-2 '><a href='http://codingsolutions.great-site.net' target='black'><BiLink size={30} /> </a></button>
                                </section>
                                <section className='bg-white rounded-full mx-2'>
                                    <button className='text-black  m-2 '><a href='https://github.com/YashMulik2005/Forum_YM.git' target='black'><BsGithub size={30} /></a></button>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects