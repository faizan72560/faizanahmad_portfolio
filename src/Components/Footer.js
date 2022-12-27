import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-blue-900 h-20 w-screen'>

        <div className='flex justify-between'>


        <div className='flex flex-col'>
            <h1 className='text-white'>Home</h1>
            <h1 className='text-white'>Contact</h1>
            <h1 className='text-white'>Projects</h1>

            


        </div>
        <div>

        <AiFillLinkedin type="message" style={{ fontSize: '16px', color: '#08c',width:'20rem' }} />
        </div>
        </div>




    </div>
  )
}

export default Footer