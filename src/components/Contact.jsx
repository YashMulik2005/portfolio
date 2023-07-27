import React from 'react'
import photo from '../assets/contact.png'
import themehook from './ThemeContext'
import { BsFillTelephoneFill, BsGoogle, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import pdf from '../assets/Resume.pdf'

function Contact() {
    const { setheight } = themehook()

    const handlenav = () => {
        setheight(false)
    }
    return (
        <div className=' flex flex-col sm:flex-row m-5 sm:px-20' id='contact' onClick={handlenav}>
            <div className=' sm:w-1/2 w-full p-5 flex flex-col justify-center items-start'>
                <h1 className=' text-center text-[40px] sm:text-[60px] font-bold'>Contact Me</h1>
                <section>
                    <section className=' flex'>
                        <BsGoogle size={25} className=' m-2 text-green-700' />
                        <h1 className=' m-2 text-lg' >yashmulik95@gmail.com</h1>
                    </section>
                    <section className=' flex'>
                        <BsFillTelephoneFill size={25} className=' m-2 text-green-700' />
                        <h1 className=' m-2 text-lg'>9359515989</h1>
                    </section>
                </section>
                <section className=' flex my-3'>
                    <a href="" target='blank'><BsInstagram size={27} className=' m-2' /></a>
                    <a href="" target='blank'><BsLinkedin size={27} className=' m-2' /></a>
                    <a href="" target='blank'><BsGithub size={27} className=' m-2' /></a>
                </section>
                <a href={pdf}><button className=' bg-green-700 text-white py-2 px-7 rounded-md m-2 font-semibold'>Download Resume</button></a>
            </div>
            <div className=' sm:w-1/2 w-full p-5 flex justify-center items-center'>
                <div className=' w-full '>
                    <form>
                        <input type='text' className=' w-full sm:w-[90%] rounded-md p-2 m-2 focus:bg-white text-black' placeholder=' name' /><br />
                        <input type='email' className=' w-full sm:w-[90%] rounded-md p-2 m-2 focus:bg-white text-black' placeholder='email' /><br />
                        <textarea rows={8} className=' w-full sm:w-[90%] rounded-md p-2 m-2 focus:bg-white text-black' placeholder='message'></textarea><br />
                        <button className=' bg-green-700 text-white rounded-md py-2 px-7 m-2 font-semibold'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact