import React from 'react'
import photo from '../assets/contact.png'

function Contact() {
    return (
        <div className=' flex flex-col sm:flex-row m-5' id='contact'>
            <div className=' sm:w-1/2 w-full p-5'>
                <img src={photo} alt="" className=' w-[90%] h-[90%] bg-contain' />
            </div>
            <div className=' sm:w-1/2 w-full p-5 flex justify-center items-center'>
                <div className=' w-full '>
                    <form>
                        <h1 className=' text-center text-2xl font-bold'>Contact</h1>
                        <label className=' text-lg font-semibold m-1'>Name:</label><br />
                        <input type='text' className=' w-full sm:w-[90%] rounded-sm p-2 m-1' /><br />
                        <label className=' text-lg font-semibold m-1'>Email:</label><br />
                        <input type='email' className=' w-full sm:w-[90%] rounded-sm p-2 m-1' /><br />
                        <label className=' text-lg font-semibold m-1'>Message:</label><br />
                        <textarea rows={8} className=' w-full sm:w-[90%] rounded-sm p-2 m-1'></textarea><br />
                        <button className=' bg-green-800 text-white rounded-sm py-1 px-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact