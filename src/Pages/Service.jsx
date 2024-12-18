import React from 'react'
import web_icon from '../assets/web-icon.png'
import right_arrow from '../assets/right-arrow-dark.png'
import mobile_icon from '../assets/mobile-icon.png'
import ui_icon from '../assets/ui-icon.png'
import graphics_icon from '../assets/graphics-icon.png'

const Service = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
          <h4 className='text-center mb-2 text-lg font-Ovo '>What i offer</h4>
          <h2 className='text-center text-5xl font-Ovo '>My Services</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo '>Iam frontend developer from california USA with 10 years of experience in multiple companies like microsoft Tesla and Apple </p>

          <div className='grid grid-cols-auto gap-6 my-10'>
             <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <img src={web_icon} alt="" className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>Web Design</h3>
                <p className='text-sm text-gray-600 leading-5'>web development is the process of building,programming...</p>
                <a className='flex items-center gap-2 text-sm mt-5' href="">Read More <img src={right_arrow} alt=""  className='w-4'/></a>
             </div>
             <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <img src={mobile_icon} alt="" className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>Mobile App</h3>
                <p className='text-sm text-gray-600 leading-5'>web development is the process of building,programming...</p>
                <a className='flex items-center gap-2 text-sm mt-5' href="">Read More <img src={right_arrow} alt=""  className='w-4'/></a>
             </div>
             <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <img src={ui_icon} alt="" className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>UI /UX Design</h3>
                <p className='text-sm text-gray-600 leading-5'>web development is the process of building,programming...</p>
                <a className='flex items-center gap-2 text-sm mt-5' href="">Read More <img src={right_arrow} alt=""  className='w-4'/></a>
             </div>
             <div className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500'>
                <img src={graphics_icon} alt="" className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>Graphics Design</h3>
                <p className='text-sm text-gray-600 leading-5'>web development is the process of building,programming...</p>
                <a className='flex items-center gap-2 text-sm mt-5' href="">Read More <img src={right_arrow} alt=""  className='w-4'/></a>
             </div>
          </div>
    </div>
  )
}

export default Service
