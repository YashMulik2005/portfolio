import React from 'react'
import photo from '../assets/react.svg'
import themehook from './ThemeContext'

function Home() {
    const { theme } = themehook()
    return (
        <div className=' flex flex-col sm:flex-row mt-2'>
            <div className=' flex flex-col sm:w-1/2 items-centers sm:items-start justify-center sm:h-[88vh] px-10 py-5 sm:py-0'>
                <h1 className=' text-xl font-bold'>hello I'am</h1>
                <h1 className={`text-5xl font-bold ${theme == "dark" ? "text-white" : "text-black"}`}>Yash Mulik</h1>
                <h1 className=' text-2xl font-bold my-1'>Web <span className={`${theme == 'dark' ? ' text-green-500' : ' text-green-700'}`}>Developer .</span></h1>
                <h1 className=' text-lg my-2'>Lorem ipsum dolor sitfuga quos tempore vero atque ea, aperiam obcaecati non fugit sint rerum! Eveniet, nisi ipsum.</h1>
                <span className=' flex'><button className={`${theme == 'dark' ? ' bg-green-500' : ' bg-green-700'} text-white py-1 px-3 rounded-sm m-2 text-lg font-bold`}><a href="mailto:yashmulik95@gmail.com">Send Email</a></button><h1 className='m-2 text-xl font-bold'><u><a href='#project'>See Project</a></u></h1></span>
            </div>
            <div className=' sm:w-1/2 h-full sm:h-[88vh]'>
                <img src={photo} alt="" className=' w-full h-full p-6' />
            </div>
        </div>
    )
}

export default Home