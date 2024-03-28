import React from 'react'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-4'>
            <div className='grid  lg:grid-cols-6'>
            <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                <div>
                    <p className='font-medium text-gray-300 tracking-wide'>Category</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
                        </li>
                    </ul>
                    </div>

                  



                    {/* category 2  */}

                    <div>
                    <p className='font-medium text-gray-300 tracking-wide'>Appels</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Ecommerce</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Bussines</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>UX & UI</a>
                        </li>

                       
                    </ul>
                    </div>

                    {/* category 3 */}

                    <div>
                    <p className='font-medium text-gray-300 tracking-wide'>Cherry</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brouchers</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>NonProfit</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                        </li>

                    </ul>
                    </div>


                    {/* category 4  */}

                    <div>
                    <p className='font-medium text-gray-300 tracking-wide'>Bussines</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Infopreneur</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                        </li>

                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                        </li>

                        
                    </ul>
                    </div>




            </div>

              {/* subscribe */}

              <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                    <p className='font-medium text-gray-300 tracking-wide'>Subscribe for News letter</p>
                   <form className='mt-4 flex-col  md:flex-row flex'>
                    <input type="email" name='email' id='email' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 border 
                    border-gray-300 rounded shadow-sm md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none bg-white aspect-auto' />
                    <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white
                    transition duration-200 rounded shadow-md hover:bg-orange-500 border'>
                        subscribe 
                    </button>
                   </form>
                   <p className='mt-4 text-sm text-gray-500' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ipsa. Minima ipsam ipsa architecto dolor.
                     Eius alias obcaecati vitae quod minus, doloremque hic numquam</p>
                    </div>

            </div>


            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                <p className='text-gray-500 text-sm'>© Copyright 2024 | All rights reserved</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-400 transition-all duration-200 hover:text-orange-400'> <FaTwitter className='h-6 w-6'/></a>
                    <a href="" className='text-gray-400 transition-all duration-200 hover:text-orange-400'> <FaInstagram className='h-6 w-6'/></a>
                    <a href="" className='text-gray-400 transition-all duration-200 hover:text-orange-400'> <FaGithub className='h-6 w-6'/></a>

                </div>
            </div>


        </div>
    </div>
  )
}

export default Footer