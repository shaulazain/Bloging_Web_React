import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// React icon
import { FaBars, FaFacebook } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Modal from './Modal';






const Navbar = () => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [isModalOpen , setIsModalOpen] = useState(false)

    const toggelMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
     //Nav item
     const navitems = [

        {path: "/", Link: "Home"},
        {path: "/services", Link: "Services"},
        {path: "/about", Link: "About"},
        {path: "/blogs", Link: "Blogs"},
        {path: "/contact", Link: "Contact"},
     ]

     //modal deytails for login page more for details

     const openModal = () =>{
      setIsModalOpen(true);
     }

     const closeModal = () => {
      setIsModalOpen(false);
     }


  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
      <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
        <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></a>

        {/* Nav items for large size */}

        <ul className='md:flex gap-12 text-lg hidden'>
            {
                navitems.map(({path, Link}) => <li className='text-white' key={path}>
                    <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    } to={path}>{Link}</NavLink>
                </li>)
            }
        </ul>

        {/* menu icon  */}
        <div className='text-white lg:flex items-center gap-4 hidden'>
            <a href="/" className='hover:text-orange-500 transition-all duration-200 ease-in'><FaFacebook /></a>
            <a href="/" className='hover:text-orange-500  transition-all duration-200 ease-in'><FaDribbble /></a>
            <a href="/" className='hover:text-orange-500  transition-all duration-200 ease-in'><FaTwitter /></a>
            <button onClick={openModal} className='bg-orange-500 text-white px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500
            transition-all duration-200 ease-in'>Log In</button>
            </div>

            {/* modal  */}

            <Modal isOpen={isModalOpen} onClose={closeModal}/>

            {/* mobile screen only  */}
              <div className='md:hidden'>
            <button className='cursor-pointer' onClick={toggelMenu}> 
            {
                isMenuOpen ?  <FaXmark className='w-5 h-5'/>:<FaBars className='w-5 h-5'/>
            }
            
            </button>
            </div>


      </nav>

      {/* nav items only for mobie  */}

      <div>
        <ul className={`md:hidden gap-12 text-lg space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all duration-150 ease-out" : "hidden"}`}>
            {
                navitems.map(({path, Link}) => <li className='text-black hover:text-orange-500 transition-all duration-200 ease-in' key={path}>
                    <NavLink  onClick={toggelMenu} to={path}>{Link}</NavLink>
                </li>)
            }
        </ul>
      </div>
    </header>
  )
}

export default Navbar
