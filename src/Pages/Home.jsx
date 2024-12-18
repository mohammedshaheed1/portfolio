import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeaderComp from '../components/HeaderComp'
import About from './About'
import Service from './Service'
import Work from './Work'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {

  const [darkMode, setDarkMode] = useState(false);

  // Use useEffect to apply dark mode when the component mounts
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <div className='font-Outfit leading-8 dark:bg-darkTheme dark:text-white'>
       <Navbar darkMode={toggleDarkMode}/>
      <HeaderComp/>
      <About/>
      <Service/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
