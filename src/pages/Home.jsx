import React from 'react'
import Banner from '../Componentes/Banner'
import BlogPage from '../Componentes/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home
