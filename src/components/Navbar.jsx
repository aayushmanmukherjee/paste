import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-black to-blue-950 flex justify-center gap-5 lg:gap-10 h-20 items-center'>
      <NavLink to="/" className="hover:text-gray-400 transition-all duration-200 font-bold border rounded-md p-1 hover:p-2 w-40 text-center text-xl lg:text-3xl">home</NavLink>
      <NavLink to="/paste" className="hover:text-gray-400 transition-all duration-200 font-bold border rounded-md p-1 hover:p-2 w-40 text-center text-xl lg:text-3xl">pastes</NavLink>
    </nav>
  )
}

export default Navbar
