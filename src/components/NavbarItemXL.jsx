import React from 'react'
import { Link } from 'react-scroll'

const NavbarItem = (props) => {
  return (
    <li className='p-2 border-b-2 border-transparent hover:border-[#1481BA] duration-300'>
      <Link className='p-3' to={`${props.to}`} smooth={true} duration={500}>
        {props.name}
      </Link>
    </li>
  )
}

export default NavbarItem