import React from 'react'
import photo from '../assets/contact.png'
import themehook from './ThemeContext'
import { BsFillTelephoneFill, BsGoogle, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import pdf from '../assets/Resume.pdf'
import { useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'

function Contact() {
    const { setheight } = themehook()
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [msg, setmsg] = useState("")
    const [sec, setsec] = useState(false)

    const handlenav = () => {
        setheight(false)
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        setname("")
        setmsg("")
        setemail("")

        setsec(true)
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
                    <a href="https://www.instagram.com/yash_mulik_95/" target='blank'><BsInstagram size={27} className=' m-2' /></a>
                    <a href="https://www.linkedin.com/in/yash-mulik-6727b2246/" target='blank'><BsLinkedin size={27} className=' m-2' /></a>
                    <a href="https://github.com/YashMulik2005" target='blank'><BsGithub size={27} className=' m-2' /></a>
                </section>
                <a href={pdf} download={pdf}><button className=' bg-green-700 text-white py-2 px-7 rounded-md m-2 font-semibold'>Download Resume</button></a>
            </div>
            <div className=' sm:w-1/2 w-full p-5 flex flex-col justify-center items-center'>
                <section className={` ${sec ? "flex" : "hidden"} bg-green-700 p-2 text-white rounded-lg m-2 flex justify-around w-[80%] `}>
                    <h1 className=' font-semibold'>Message send sucessfully!!!!</h1>
                    <section>
                        <ImCancelCircle size={25} onClick={() => {
                            setsec(false)
                        }} />
                    </section>
                </section>
                <div className=' w-full '>
                    <form onSubmit={handlesubmit}>
                        <input type='text' value={name} className=' w-full sm:w-[100%] rounded-md p-2 m-2 focus:bg-white focus:text-black' onChange={
                            (e) => {
                                setname(e.target.value)
                            }
                        } placeholder=' name' required /><br />
                        <input type='email' value={email} className=' w-full sm:w-[100%] rounded-md p-2 m-2 focus:bg-white focus:text-black'
                            onChange={(e) => {
                                setemail(e.target.value)
                            }} placeholder='email' required /><br />
                        <textarea rows={8} value={msg} className=' w-full sm:w-[100%] rounded-md p-2 m-2 focus:bg-white focus:text-black'
                            onChange={(e) => {
                                setmsg(e.target.value)
                            }} placeholder='message' required ></textarea><br />
                        <button className=' bg-green-700 text-white rounded-md py-2 px-7 m-2 font-semibold'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact