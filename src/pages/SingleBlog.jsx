import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser} from 'react-icons/fa'
import { FaClock} from 'react-icons/fa6'
import SideBar from '../Componentes/SideBar'

const SingleBlog = () => {
    const data = useLoaderData();
    const {title , image , author, published_date, reading_time, content} = data[0];
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-4'>
    <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Single Blog page</h2>
      </div> 


      {/* blog detail  */}

      <div className='my-12 mx-auto max-w-7xl flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div>
                <img src={image} alt="" className='w-full mx-auto rounded'/>
            </div>
            <h2 className='text-3xl font-bold mb-4 text-blue-500 mt-8'>{title}</h2>
            <p className='text-gray-600 font-medium mb-2'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
            <p className='text-gray-600 font-medium'><FaClock className='inline-flex items-center mr-2' />{reading_time}</p>
            <p className='text-gray-500 mb-6 text-base'>{content}</p>
            <div className='text-gray-500  text-base'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p><br />
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p><br />
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p><br />
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p><br />
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p><br />
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p><br />
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p><br />
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt hic velit laboriosam. Saepe inventore vel repellendus ducimus natus voluptates sapiente,
             ab voluptate aliquam? Dolore molestias, ad iusto illum laboriosam facere.</p>
            </div>


        </div>
        <div className='lg:w-1/2'>
            <SideBar/>
        </div>

      </div>
      </div>
  )
}

export default SingleBlog