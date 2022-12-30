import React from 'react'
import pic1 from './pic1.jpg'
// import pic1 from './pic2.jpg'
import { useState } from 'react';

// import React from 'react'

// import ReactJsAlert from "reactjs-alert"
import { useEffect } from 'react';

const Content = () => {

    const [status, setStatus] = useState(false);
const [type, setType] = useState("success");
const [title, setTitle] = useState("This is a alert");


    
  return (
    <div>


  


<div className='cards h-52 w-56 shadow-2xl mx-auto my-10 hover:w-64  '>
    <img src={pic1} className='rounded-2xl' />
    

</div>

    <div className='md:mx-96 md:my-32 mx-10 my-20'>
        <h1 className='md:text-4xl my-5  text-2xl text-white'>Welcome</h1>
        <p className='md:text-lg my-2 text-white'>My Name is Md Faizan Ahmad . My Skills are html,css,javascript,React js,tailwindcss,bootstrap,and node js  </p>
    </div>

        <div className='flex justify-center'>

            <h1 className='text-3xl text-white my-8'>My Projects</h1>

        </div>
    <div className='projects   flex md:flex-row flex-col items-center flex-wrap justify-center '>

       <div className='cards h-52 w-64 mx-1 shadow-6xl hover:w-96 border-bl bg-gray-50 my-2'>
        <div className='flex justify-center'>
            {/* <div className='bg-black'> */}
        <h1 className='text-xl'>Hotel Booking Website</h1>

            {/* </div> */}
        </div>
    <hr className='text-gray-900'/>
<div className='flex flex-col items-center'>

    <div className='flex flex-col gap-14 '>


          <div className='text-center'>
        <h2 className='my-2'>Technology Used:</h2>
        <p>html,css,tailwind,react,nodejs</p>

          </div>


        {/* <h2>link:</h2> */}
       <a href='https://frontend-hotel-booking-roan.vercel.app/' className='bg-black text-white rounded-md text-xl my-2'>Go to Hotel Booking</a>
    </div>

</div>

       </div>

       
       <div className='cards h-52 w-64 mx-1 shadow-6xl hover:w-96 border-bl bg-gray-50 my-2'>
        <div className='flex justify-center'>

       <h1  className='text-xl '>Expense Tracker</h1>
        </div>
    <hr/>
<div className='flex flex-col items-center gap-14'>

    <div className='flex flex-col items-center'>


<h2 className='my-2'>Technology Used:</h2>
<p>html,css,tailwind,react,nodejs</p>
       {/* <h2 className='my-1'></h2> */}

    </div>
       <a href='https://faizan72560.github.io/Expense-Tracker/' className='bg-black text-white rounded-md text-xl my-2'>Go to Expense Tracker</a>
</div>

       </div>
       
       <div className='cards h-52 w-64 mx-1 shadow-6xl hover:w-96 border-bl bg-gray-50 my-2'>
       <div className='flex justify-center'>

        <h1  className='text-xl '>Ecommerce Website</h1>

       </div>
    <hr/>
    <div className='flex flex-col items-center gap-14'>

   <div className='flex flex-col items-center'>

<h2 className='my-2'>Technology Used:</h2>
<p className='text-center'>html,css,tailwind,react,nodejs</p>
        {/* <h2>link:</h2> */}

   </div>
       <a href='https://ecommerce-frontend-blond.vercel.app/' className='bg-black text-white rounded-md text-xl my-2'>Go to Ecommerce Website</a>

    </div>

       </div>
       
       <div className='cards h-52 w-64 mx-1 shadow-6xl hover:w-96 border-bl bg-gray-50 my-2'>
       <div className='flex justify-center'>

        <h1  className='text-xl'>Simple Blog Website</h1>
       </div>

    <hr/>
<div className='flex flex-col items-center gap-14'>


 <div className='text-center'>

<h2 className='my-2'>Technology Used:</h2>
<p>html,css,tailwind,react,nodejs</p>

 </div>
 <a href='https://blogwebsite-frontend.vercel.app/' className='bg-black text-white rounded-md text-xl my-2'>Go to Simple Blogwebsite</a>

        {/* <h2>link:</h2> */}
</div>

       </div>


       <div className='cards h-52 w-64 mx-1 shadow-6xl hover:w-96 border-bl bg-gray-50 my-2'>
       <div className='flex justify-center'>

        <h1  className='text-xl'>Cart app</h1>
       </div>

    <hr/>

<div className='flex flex-col items-center gap-14'>

<div className='text-center'>
<h2 className='my-2'>Technology Used:</h2>
<p>html,css,material ui,react</p>
{/* <p>react</p> */}

</div>

<a href='https://myntra-mini.vercel.app/' className='bg-black text-white rounded-md text-xl my-2'>Go to Cart App</a>

        {/* <h2>link:</h2> */}
</div>

       </div>
       
       <div className='cards h-52 w-64 mx-1 shadow-6xl hover:w-96 border-bl bg-gray-50 my-2'>
       <div className='flex justify-center'>

        <h1  className='text-xl'>weather Forcasting</h1>
       </div>

    <hr/>

<div className='flex flex-col items-center gap-14'>

<div className='text-center'>

<h2 className='my-2'>Technology Used:</h2>
<p>html,css,tailwind,react,nodejs</p>
</div>
<a href='https://faizan72560.github.io/Weather-Forcasting/' className='bg-black text-white rounded-md text-xl my-2'>Go to Weather Forcasting</a>

        {/* <h2>link:</h2> */}
</div>

       </div>





    </div>
    </div>
  )
}

export default Content