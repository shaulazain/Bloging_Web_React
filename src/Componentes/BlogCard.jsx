import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";


const BlogCard = ({blogs,currentPage, selectedCategory, pagesize}) => {

    const filteredBlogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pagesize, currentPage * pagesize);
    console.log(filteredBlogs)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            filteredBlogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                <div>
                    <img src={blog.image} alt="" className='w-full' />
                </div>
                <h3 className='mb-2 mt-4 font-bold hover:text-blue-600'>{blog.title}</h3>
                <p className='mb-2 text-gray-600 '><FaUser className='mr-2 inline-flex text-center' />{blog.author}</p>
                <p className='text-sm text-gray-500'>Published: {blog.published_date}</p>
            </Link>)
        }
    </div>
  )
}

export default BlogCard