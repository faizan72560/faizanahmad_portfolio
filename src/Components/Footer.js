import React from 'react'

import facebook from './facebook.png'
import twitter from './linkedin.png'
import linkdin from './twitter.png'



const Footer = () => {
  return (
    <footer className=' h-full w-full'>

    
    <div >

        <div className='flex justify-between'>


        <div className='flex flex-col'>
          
            <h1 className='text-white md:text-2xl md:my-1 my-2 font-serif'>Home</h1>
            <h1 className='text-white md:text-2xl md:my-1 my-2 font-serif'>Contact</h1>
            <h1 className='text-white md:text-2xl md:my-1 my-2 font-serif'>Projects</h1>

            


        </div>
        <div>

          <div className='flex flex-col md:mx-2'>
            <div className='flex my-1 gap-4'>
              <h1 className='text-white md:text-2xl font-serif' >Follow me on</h1>
              <img className='h-8 ' src={facebook}/>
            </div>

            <div className='flex my-1 gap-4'>
              <h1 className='text-white md:text-2xl font-serif'>Follow me on</h1>
              <img className='h-8 ' src={twitter}/>
            </div>
            <div className='flex my-1 gap-4'>
              <h1  className='text-white md:text-2xl font-serif'>Follow me on</h1>
              <img className='h-8 ' src={linkdin}/>
            </div>

          </div>

        
        </div>
        </div>




    </div>
    </footer>

  )
}

export default Footer