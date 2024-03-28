import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const SideBar = () => {
    const [popularBlogs , setPopularBlogs] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data.slice(0,15)))

    }, [])
    
  return (
    <div>
        <div>
            <h3 className='px-4 font-semibold text-2xl'>Latest Blogs</h3>
            <div>
                {
                    popularBlogs.slice(0,5).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to="/" className='text-base pb-2 hover:text-orange-500 transition-all duration-200 ease-in inline-flex items-center py-1'>Read more <FaArrowRightLong 
            className='mt-1 ml-2' /></Link>

                    </div>)
                }
            </div>
        </div>

        {/* popular  */}

        <div>
            <h3 className='px-4 font-semibold text-2xl mt-20'>Popular Blogs</h3>
            <div>
                {
                    popularBlogs.slice(6,10).map(blog => <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                        <h4 className='font-medium mb-2'>{blog.title}</h4>
                        <Link to="/" className='text-base pb-2 hover:text-orange-500 transition-all duration-200 ease-in inline-flex items-center py-1'>Read more <FaArrowRightLong 
            className='mt-1 ml-2' /></Link>

                    </div>)
                }
            </div>
        </div>


    </div>
  )
}

export default SideBar