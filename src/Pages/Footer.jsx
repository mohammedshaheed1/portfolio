import React from 'react'
import log_image from '../assets/logo.png'
import mail_icon from '../assets/mail_icon.png'

const Footer = () => {
  return (
    <div className='mt-20'>
         <div className='text-center'>
         <p class=" text-3xl italic  px-5 py-2  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-white mr-25">
                    SHAHEED
                </p>
          <div className='w-max flex items-center gap-2 mx-auto'>
             <img src={mail_icon} alt="" className='w-6' />
             shaheedshanu100@gmail.com
          </div>
         </div>
         <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mt-[10%] my-12 py-6'>
           <p>@ 2024 shaheed.All rights reserved.</p>
           <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
             {/* <li><a href="htpps://instagram.com/shaheedshanu">Instagram</a></li> */}
             <li><a href="htpps://instagram.com/shaheedshanu">GitHub</a></li>
             <li><a href="htpps://instagram.com/shaheedshanu">LinkedIn</a></li>
             <li><a href="htpps://instagram.com/shaheedshanu">Twitter</a></li>
           </ul>
         </div>
    </div>
  )
}

export default Footer
