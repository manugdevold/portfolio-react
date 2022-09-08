import React, { useState } from 'react'
import NavbarItemXL from './NavbarItemXL'
import NavbarItemSM from './NavbarItemSM'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#021B2D] border-b-2 border-[#011627]'>
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h2 className='text-2xl font-semibold tracking-tighter text-[#10739E] cursor-pointer'>manugdev</h2>
        </Link>
      </div>
      <ul className='hidden md:flex'>
        <NavbarItemXL to={"home"} name="Home" />
        <NavbarItemXL to={"about"} name="About" />
        <NavbarItemXL to={"skills"} name="Skills" />
        <NavbarItemXL to={"projects"} name="Projects" />
        <NavbarItemXL to={"contact"} name="Contact" />
      </ul>
      {/* Hamburguer */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#021B2D] flex flex-col justify-center items-center'}>
        <NavbarItemSM onClick={handleClick} to={"home"} name="Home" />
        <NavbarItemSM onClick={handleClick} to={"about"} name="About" />
        <NavbarItemSM onClick={handleClick} to={"skills"} name="Skills" />
        <NavbarItemSM onClick={handleClick} to={"projects"} name="Projects" />
        <NavbarItemSM onClick={handleClick} to={"contact"} name="Contact" />
      </ul>
    </nav>
  )
}

export default Navbar