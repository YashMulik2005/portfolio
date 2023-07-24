import React from 'react'
import forum from '../assets/forum.png'
import news from '../assets/news.png'
import notes from '../assets/notes.png'
import themehook from './ThemeContext'

function Projects() {
    const { theme, setheight } = themehook()

    const handlenav = () => {
        setheight(false)
    }
    return (
        <div className={`${theme == "dark" ? "bg-[#0E0B0B]" : "bg-slate-300"}  p-5 sm:h-[65vh] flex flex-col justify-center items-center `} id="project" onClick={handlenav}>
            <h1 className=' text-center text-3xl font-bold mt-5'>My Projects</h1>
            <div className=' flex flex-col sm:flex-row p-2'>
                <div className=' sm:w-1/3 w-full  m-2 p-3'>
                    <img src={news} alt="" className=' w-full sm:h-[82%] h-40 rounded-md' />
                    <section className=' flex justify-center p-3'>
                        <button className=' bg-green-800 text-white py-1 px-5 m-2 rounded-md font-bold'><a href="https://news020202.netlify.app/">Visit</a></button>
                        <button className=' bg-green-800 text-white py-1 px-5 m-2 rounded-md font-bold'><a href=" https://github.com/YashMulik2005/News_app.git">Github</a></button>
                    </section>
                </div>
                <div className={` sm:w-1/3 w-full m-2 p-3  `} >
                    <img src={notes} alt="" className=' w-full sm:h-[82%] h-40 rounded-md' />
                    <section className=' flex justify-center p-3'>
                        <button className=' bg-green-800 text-white py-1 px-5 m-2 rounded-md font-bold'><a href='https://notes-app-ym.netlify.app/'>Visit</a></button>
                        <button className=' bg-green-800 text-white py-1 px-5 m-2 rounded-md font-bold'><a href='https://github.com/YashMulik2005/Notes_App.git'>Github</a></button>
                    </section>
                </div>
                <div className=' sm:w-1/3 w-full m-2 p-3'>
                    <img src={forum} alt="" className=' w-full sm:h-[82%] h-40 rounded-md' />
                    <section className=' flex justify-center p-3'>
                        <button className=' bg-green-800 text-white py-1 px-5 m-2 rounded-md font-bold'><a href='http://codingsolutions.great-site.net'>Visit</a></button>
                        <button className=' bg-green-800 text-white py-1 px-5 m-2 rounded-md font-bold'><a href='https://github.com/YashMulik2005/Forum_YM.git'>Github</a></button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Projects