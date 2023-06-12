import React from 'react'
import photo from '../assets/react.svg'

function About() {
    return (
        <div className='flex flex-col-reverse sm:mt-[-10px] sm:flex-row py-7 sm:py-0 bg-black'>
            <div className=' sm:w-1/2 h-[70vh] w-full'>
                <img src={photo} alt="" className=' w-full h-full p-10' />
            </div>
            <div className=' sm:w-1/2 h-[70h] flex flex-col justify-center sm:items-start px-7 w-full items-center'>
                <h1 className=' text-4xl font-bold'>About Me</h1>
                <h1 className=' text-xl text-green-500 font-bold'>Web Developer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic possimus deserunt commodi, debitis officiis
                    voluptatem voluptates expedita explicabo necessitatibus reiciendis molestiae doloribus sequi illum ad excepturi
                    cum voluptate totam accusamus numquam! Sint quibusdam enim dignissimos eos perferendis consequuntur maiores
                    architecto harum, pariatur consequatur</p>
                <button className=' bg-green-500 text-white rounded-sm py-1 px-2 font-semibold w-40 my-4'>More Information</button>
            </div>
        </div>
    )
}

export default About