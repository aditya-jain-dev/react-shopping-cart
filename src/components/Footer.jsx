import React from 'react'
import { FaLinkedin, FaGithub } from'react-icons/fa';
import { BsGlobe } from'react-icons/bs';
import { Link } from'react-router-dom' 

const Footer = () => {
  return (
    <footer className='flex justify-between items-center h-10 max-w-6xl mx-auto py-2 px-4 text-white'>
        <p className='text-xs sm:text-sm'>Made by Aditya Jain</p>

        <div className='flex gap-x-2'>
            <Link to pathname="https://adityaportfolio.live/" target="_blank">
                <BsGlobe />
            </Link>
            <Link to pathname="https://www.linkedin.com/in/aditya-jain-6497a0240/" target="_blank">
                <FaLinkedin />
            </Link>
            <Link to pathname="https://github.com/aditya-jain-dev" target="_blank">
                <FaGithub />
            </Link>
        </div>
    </footer>
  )
}

export default Footer