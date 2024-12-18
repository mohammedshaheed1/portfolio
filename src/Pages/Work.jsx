import React from 'react'
import work_image from '../assets/work-1.png'
import work_image2 from '../assets/work-2.png'
import work_image3 from '../assets/work-3.png'
import work_image4 from '../assets/work-4.png'
import send_icon from '../assets/send-icon.png'
import right_arrow_bold from '../assets/right-arrow-bold.png'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo '>My Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo '>My Latest Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo '>Welcome to my web development portfolio! Explore collection of projects showcasing my expertise in front-end development </p>
      <div className='grid grid-cols-auto my-10 gap-5'>
        <div className='aspect-square  bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${work_image})` }}>
          <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
              <h2 className='font-semibold'>Frontend Project</h2>
              <p className='text-sm text-gray-700'>web design</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
              <img src={send_icon} alt="" className='w-5' />
            </div>
          </div>
        </div>
        <div className='aspect-square  bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${work_image2})` }}>
          <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
              <h2 className='font-semibold'>Frontend Project</h2>
              <p className='text-sm text-gray-700'>web design</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
              <img src={send_icon} alt="" className='w-5' />
            </div>
          </div>
        </div>
        <div className='aspect-square  bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${work_image3})` }}>
          <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
              <h2 className='font-semibold'>Frontend Project</h2>
              <p className='text-sm text-gray-700'>web design</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
              <img src={send_icon} alt="" className='w-5' />
            </div>
          </div>
        </div>


        <div className='aspect-square  bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${work_image4})` }}>
          <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
            <div>
              <h2 className='font-semibold'>Frontend Project</h2>
              <p className='text-sm text-gray-700'>web design</p>
            </div>
            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
              <img src={send_icon} alt="" className='w-5' />
            </div>
          </div>
        </div>
      </div>
     
     <a href="#" className='w-max flex items-center justify-center gap-2  text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3  px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500'>Show More
      <img src={right_arrow_bold} alt="" className='w-4' />
     </a>
      
    </div>
  )
}

export default Work
