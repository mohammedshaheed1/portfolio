import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Arrow_icon from '../assets/arrow-icon.png'
import moon_icon from '../assets/moon_icon.png'
import header_bg from '../assets/header-bg-color.png'
import menu_black from '../assets/menu-black.png'
import close_back from '../assets/close-black.png'
import sun_icon from '../assets/sun_icon.png'

const Navbar = ({ darkMode }) => {

    const [close, setClose] = useState(true);
    const [scrolling, setScrolling] = useState(false);  // Track if the page is scrolling

    useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolling
            if (window.scrollY > 50) {
                setScrolling(true);  // If scrolled more than 50px, hide menu
            } else {
                setScrolling(false); // Otherwise, show menu
            }
        };

        // Add event listener on scroll
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <img src={header_bg} alt="" className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${scrolling ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                {/* <img src={logo} alt="" className='w-28 cursor-ponter mr-14' /> */}
                <p class=" text-3xl italic border px-5 py-2  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:text-white mr-14">
                    SHAHEED
                </p>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-Ovo  ${scrolling ? '' : 'bg-white shadow-sm bg-opacity-50  dark:border dark:border-white/50 dark:bg-transparent'}`}>
                    <a href='#Home'>HOME</a>
                    <a href="#about">ABOUT ME</a>
                    <a href='#services'>SERVICES</a>
                    <a href='#work'>MY WORK</a>
                    <a href='#contact'>CONTACT ME</a>
                </ul>
                <div className='flex items-center gap-4 font-Ovo '>
                    <button onClick={darkMode}>
                        <img className='w-6 dark:hidden' src={moon_icon} alt="" />
                        <img className='w-6 hidden dark:block' src={sun_icon} alt="" />
                    </button>
                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>CONTACT <img className='w-3' src={Arrow_icon} alt="" /></a>

                    <button className='block md:hidden ml-3' onClick={() => setClose((prev => !prev))}><img src={menu_black} alt="" className='w-6' /></button>
                </div>
                {/* ------------mobileMenu--------------- */}
                <ul id='side-menu' className={`flex md:hidden gap-4 flex-col py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-[#2a004a] dark:text-white ${close ? 'hidden' : ''}`}>
                    <div className='absolute right-6 top-6'>
                        <img src={close_back} alt="" onClick={() => setClose(prevClose => !prevClose)} className='w-5 cursor-pointer' />
                    </div>
                    <a href='#Home'>HOME</a>
                    <a href="#about">ABOUT ME</a>
                    <a href='#services'>SERVICES</a>
                    <a href='#work'>MY WORK</a>
                    <a href='#contact'>CONTACT ME</a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
