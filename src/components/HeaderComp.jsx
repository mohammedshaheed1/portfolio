import React from 'react'
import profile_image from '../assets/profilenew.jpeg'
import hand_icon from '../assets/hand-icon.png'
import { Link } from 'react-router-dom'
import rigt_arrow from '../assets/right-arrow-white.png'
import download_icon from '../assets/download-icon.png'

const HeaderComp = () => {
  return (
    <div id="Home" className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <img src={profile_image} alt="" className='rounded-full w-32'/>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>Hi! i'm Mohammed Shaheed SM <img src={hand_icon} className='w-6'/></h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo '>Frontend Web Developer Based in London.</h1>
        <p className='max-w-2xl mx-auto font-Ovo '>I am a frontend developer from california,USA with 10 years of experience in multiple companies like microsoft and tesla and apple</p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
           <a className='px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white  flex items-center gap-2 dark:border-transparent' href='#contact'>contact me <img src={rigt_arrow} className='w-4' alt="" /></a>
           <a className='px-10 py-3 border rounded-full border-gray-500   flex items-center gap-2 bg-white dark:text-black' href='../assets/logo.png' download='my_resume.png'>my resume  <img src={download_icon} className='w-4' alt="" /></a>
        </div>
    </div>
  )
}

export default HeaderComp
