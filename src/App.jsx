import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Service from './Pages/Service'
import Work from './Pages/Work'
import Contact from './Pages/Contact'
// import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    
      {/* <Navbar/> */}
     <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/service' element={<Service/>}/>
         <Route path='/work' element={<Work/>}/>
         <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default App
