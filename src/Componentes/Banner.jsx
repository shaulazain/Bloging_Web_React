import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";


const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
      <div className='text-center text-white'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome To Our Blog</h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>Start your blog today and join a community of writters and readers who are passionate about
            sharing their stories and ideas. we offer everything you need to get started, from helpful tips and teturiols.
        </p>
        <div>
            <Link to="/" className='font-bold hover:text-orange-500 transition-all duration-200 ease-in inline-flex items-center py-1'>Learn more <FaArrowRightLong 
            className='mt-1 ml-2' /></Link>
            
        </div>
      </div>

    </div>
  )
}

export default Banner
