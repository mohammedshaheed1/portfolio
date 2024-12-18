import React from 'react'
import user_image from '../assets/profilenew.jpeg'
import code_icon from '../assets/code-icon.png'
import edu_icon from '../assets/edu-icon.png'
import project_icon from '../assets/project-icon.png'
import vs_code from '../assets/vscode.png'
import fir_ebase from '../assets/firebase.png'
import mongo_db from '../assets/mongodb.png'
import figma_ from '../assets/figma.png'
import git from '../assets/git.png'
import circular_txt from '../assets/circular-text.png'
import dev_icon from '../assets/dev-icon.png'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo '>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo '>About Me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='max-w-max mx-auto relative'>
          <img  src={user_image} alt="" className='w-64  sm:w-80 rounded-3xl max-w-none h-98' />
          <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
               <img src={circular_txt} alt="" className='w-full animate-spin_slow' />
               <img src={dev_icon} alt="" className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
          </div>
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor iure perferendis, aliquam mollitia a distinctio omnis officiis nemo ipsa officia.</p>
          <ul className='grid grid-col-1 sm:grid-cols-auto gap-6 max-w-2xl'>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img src={code_icon} alt="" className='w-7 mt-3' />
              <h3 className='my-4 font-semibold  text-gray-700'>Languages</h3>
              <p className='text-gray-600 text-sm'>HTML ,CSS,JavaScript,React Js,ReactNative</p>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img src={edu_icon} alt="" className='w-7 mt-3' />
              <h3 className='my-4 font-semibold  text-gray-700'>Education</h3>
              <p className='text-gray-600 text-sm'>B.Tech in Computer Science</p>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img src={project_icon} alt="" className='w-7 mt-3' />
              <h3 className='my-4 font-semibold  text-gray-700'>Projects</h3>
              <p className='text-gray-600 text-sm'>Built more than 5 project</p>
            </li>
          </ul>
          <h4 className='my-6 text-gray-700 font-Ovo '>Tools i use</h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={vs_code} alt="" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={fir_ebase} alt="" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={mongo_db} alt="" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={figma_} alt="" className='w-5 sm:w-7' />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img src={git} alt="" className='w-5 sm:w-7' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
