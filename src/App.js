import React from 'react'
import Contact from './Components/Contact'
import Content from './Components/Content'
import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Project from './Components/Project';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
       <Routes>

        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Content/>}/>
        <Route path="/project" element={<Project/>}/>



      
       </Routes>
       <div className='margin-top'>
       <Footer/>

       </div>
      </BrowserRouter>

    </div>
  )
}

export default App