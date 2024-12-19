 import React from 'react'
import Home from './home/Home'
import {Routes,Route} from "react-router-dom"
import Courses from './courses/Courses'
import SignUp from './component/SignUp'
import Contact from './component/Contact'

 
 const App = () => {
   return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Course' element={<Courses/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Contact' element={<Contact/>}/>

      
    </Routes>

   
    
    </>
   )
 }
 
 export default App
 