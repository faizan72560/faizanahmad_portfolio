import React, { useState } from 'react'
import phone1 from './pic3.jpg'
import gmail from './download.png'
import github from './download1.png'
import { Link } from 'react-router-dom'

const Send='Send'
const Loading='loading...'

const Contact = () => {

    const [email,setemail]=useState('')
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [phone,setphone]=useState()
    const [message,setmessage]=useState('')
    const [invalidemail,setinvalidemail]=useState(false)
    const [invalidphone,setinvalidphone]=useState(false)
    const [send, setsend] = useState(false)
    const [data, setdata] = useState([])

    const submithandler=(e)=>{
      e.preventDefault()
      console.log(data)
      
      const obj={email,firstname,lastname,phone,message}
      console.log(obj,data)
      setdata([...data,obj])
      
      console.log(data)
      localStorage.setItem('data',JSON.stringify(data))
      setsend(true)

      setTimeout(()=>{
        
        setsend(false)
        alert("Data Sent Successfully")

      },2000)





    }



    function Email(e){
      console.log(data)

        setemail(e.target.value)
        console.log(email)
        let regEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if(!regEmail.test(email)){
            setinvalidemail(true)
          }
          else{
            setinvalidemail(false)


          }

    }

    
    function Phone(e){

        setphone(e.target.value)
        console.log(phone)
        let regEmail =/^\d{9}$/

        if(!regEmail.test(phone)){
            setinvalidphone(true)
          }
          else{
            setinvalidphone(false)


          }

    }

    




  return (
    <div>

        <form >
        <div  className='flex justify-center  flex-col shadow-2xl mx-auto w-96 h-full my-24 p-2'>
          <div className='my-4 flex justify-center'>

            <h1 className='text-6xl mx-auto my-6 text-white'>Contact</h1>
          </div>
          <div className='my-1'>

            <input type='text' className='w-96 h-9 rounded-md' placeholder='Enter first name' value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/><br/>
            
          </div>

          <div className='my-1'>

            <input type='text' className='w-96 h-9 rounded-md' placeholder='Enter last name'   value={lastname} onChange={(e)=>{setlastname(e.target.value)}} /><br/>
          </div>
          <div className='my-1'>

            <input type='email' className='w-96 h-9 rounded-md' placeholder='Enter email' value={email} onChange={Email} />
            {invalidemail&&<span className='text-red-700 font-bold'>please provide valid email</span>}
          </div>

          <div className='my-1'>

            <input type='number' className='w-96 h-9 rounded-md' placeholder='Enter phone number' value={phone} onChange={Phone} /><br/>
            {invalidphone&&<span className='text-red-700 font-bold'>please provide valid phone Number</span>}
          </div>

          <div className='my-1'>

            <textarea type='text' className='w-96  rounded-md' placeholder='Enter a message' rows={4}  value={message} onChange={(e)=>{setmessage(e.target.value)}}/><br/>
          </div>

          <div >



          {(invalidemail || invalidphone)?

<button onClick={submithandler} className='flex justify-center w-96 h-9 rounded-md disabled:bg-emerald-200 bg-emerald-400 hover:bg-green-600 w-full justify-center items-center mx-auto' disabled>{!send?Send:Loading}</button>:<button onClick={submithandler} className=' w-96 h-9 rounded-md my-auto items-center text-white font-bold text-xl flex justify-center bg-emerald-400 hover:bg-green-600 '>{!send?Send:Loading}</button>
          } 
          </div>
            

            

        </div>
        </form>

        {/* <div className='flex md:flex-row flex-col justify-between'>

            <div className=' my-2' >
            <img src={github} className='rounded-md h-12 w-20 mx-auto'/>

            <div className='flex justify-center'>

            <p className='md:text-xl mx-3 text-white'>faizanahmad72560@gmail.com</p>
            </div>
        
            </div>

            <div  className=' my-2 '>
            <img src={phone1} className='rounded-md h-12 w-14  mx-auto'/>

            <div className='flex justify-center'>

            
            <p className='md:text-xl mx-3 text-white'>7256013760</p>
            </div>
            </div>

            <div  className='  my-2'>

            <img src={gmail} className='rounded-md h-12 w-24  mx-auto'/>

            <div className='flex justify-center'>

            <p className='md:text-xl mx-3 text-white'>faizan72560</p>
            </div>

        
            <Link to='https://github.com/faizan72560' className='md:text-2xl text-white hover:text-blue-700'>Go to Github</Link>
            </div>




        </div> */}
    </div>
  )
}

export default Contact