import React, { useState } from 'react'
import { useEffect } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesize = 12; //blogs per page
  const [selectedCategory, setselectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pagesize}`;

      // filter by catoary

      if (selectedCategory) {
        url += `&category = ${selectedCategory}`
        
      }

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }

    fetchBlogs();
  },[currentPage, pagesize , selectedCategory])



// page chnging btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }



  const handleCategoryChange = (category) =>{
    setselectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>
      {/* catogary section */}

      <div>
        <CategorySelection onSelectedCateory={handleCategoryChange} selectedCategory = {selectedCategory} activeCategory={activeCategory}/>
      </div>

      {/* blog card section */}
      <div className='flex flex-col gap-12 lg:flex-row'>
        {/* blog pae componet */}
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pagesize}/>

        {/* sidebar component */}

        <div>
          <SideBar/>
        </div>

      </div>

      {/* pagination */}
      <div>
        <Pagination blogs={blogs} currentPage={currentPage} pagesize={pagesize} onPageChange={handlePageChange}/>
      </div>
    </div>
  )
}

export default BlogPage