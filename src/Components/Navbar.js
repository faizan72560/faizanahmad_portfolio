import React from 'react'
import pic1 from './pic2.jpg'
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
// import useEffect

const Navbar = () => {

    const [alert, setalert] = useState(true)

useEffect(() => {
    setTimeout(()=>{
        setalert(false)

    },3000)
 
}, [])
  return (
    <div>

        
{alert && <div className="bg-blue-100 border border-green-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  
  <div className='flex gap-4'>
    
    <strong className="text-black font-bold">Welcome!</strong>
  <span className="text-black block sm:inline">Go on Contact Page if you want to work with me</span>
  
    </div>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg className="fill-current h-6 w-6 text-blue-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
  </span>
</div>}
        <nav >
            <ul className='flex  justify-center'>
                <li>
                    <img src={pic1} className='rounded-full md:h-12 h-9 my-1 hover:h-14' />
                </li>
                <Link to='/'><li className='md:mx-20  mx-6 my-3 font-serif md:text-2xl hover:text-3xl  cursor-pointer text-purple-50 '>
                    Home

                </li>
                </Link>
                <Link to='/project'> 

                <li className='md:mx-20  mx-6 my-3 font-serif md:text-2xl  hover:text-3xl cursor-pointer text-purple-50'>
                    Projects

                </li>
                </Link>
                <Link to='/contact'><li className='md:mx-20 mx-6 my-3 font-serif md:text-2xl  hover:text-3xl cursor-pointer  text-purple-50'>
                    Contact 

                </li>
            </Link>
                
            </ul>
           
        </nav>

    </div>
  )
}

export default Navbar