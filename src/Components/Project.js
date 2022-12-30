import React from 'react'
import pic1 from './Screenshot (2).png'
import pic2 from './Screenshot (7).png'
import pic3 from './Screenshot (8).png'
import pic4 from './Screenshot (9).png'
import pic5 from './Screenshot (10).png'
import pic6 from './Screenshot (12).png'
import { Link } from 'react-router-dom'



const Project = () => {
  return (
    <div>

      <div className='flex justify-center flex-wrap md:flex-row flex-col items-center my-7 '>

        <div className='md:h-30 md:w-1/4 rounded-2xl m-1 cursor-pointer '>
          <h1 className='text-2xl text-white text-center my-1'>Expense Tracker</h1>

        <a href='https://faizan72560.github.io/Expense-Tracker/'>
        <img className='md:h-52 md:w-screen rounded-md ' src={pic1}/>
        </a>

        </div>

        <div className='md:h-30 md:w-1/4 rounded-2xl m-1'>
        <h1 className='text-2xl text-white text-center my-1'>Cart App</h1>

<a href='https://faizan72560.github.io/Expense-Tracker/'>

<img className='md:h-52 md:w-screen rounded-md' src={pic2}/>
</a>

</div>
<div className='md:h-30 md:w-1/4 rounded-2xl m-1'>
<h1 className='text-2xl text-white text-center my-1'>Ecommerce Website</h1>

<a href='https://ecommerce-frontend-blond.vercel.app/'>

<img className='md:h-52 md:w-screen rounded-md' src={pic3}/>
</a>

</div>
<div className='md:h-30 md:w-1/4 rounded-2xl m-1'>
<h1 className='text-2xl text-white text-center my-1'>Hotel Booking Website</h1>

<a href='https://frontend-hotel-booking-roan.vercel.app/'>

<img className='md:h-52 md:w-screen rounded-md' src={pic4}/>
</a>

</div>
<div className='md:h-30 md:w-1/4 rounded-2xl m-1'>

<h1 className='text-2xl text-white text-center my-1'>Blog Website</h1>

  <a href='https://blogwebsite-frontend.vercel.app/'>

<img className='md:h-52 md:w-screen rounded-md' src={pic5}/>
  </a>

</div>
<div className='md:h-30 md:w-1/4 rounded-2xl m-1'>
<h1 className='text-2xl text-white text-center my-1'>Weather Application</h1>

<a href='https://faizan72560.github.io/Weather-Forcasting/'>

<img className='md:h-52 md:w-screen rounded-md' src={pic6}/>
</a>



</div>

      </div>



    </div>
  )
}

export default Project