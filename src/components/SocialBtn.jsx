import React from 'react'

const SocialBtn = (props) => {
  return (
    <li className={`${props.bg} w-[150px] h-[50px] mb-4 flex justify-between items-center rounded-md hover:shadow-lg hover:shadow-[#000D19] sm:hover:animate-bounce`}>
      <a className='w-full flex justify-between items-center' href={`${props.link}`} target='_blank' rel='noreferrer'>
        {props.name} {props.icon}
      </a>
    </li>
  )
}

export default SocialBtn
