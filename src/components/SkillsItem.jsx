import React from 'react'

const SkillsItem = (props) => {
  return (
    <div className='shadow-md shadow-[#000D19] hover:scale-110 duration-500 rounded-md'>
      <img className='my-4 w-20 mx-auto' src={props.img} alt='HTML Icon' />
      <p className='my-4 text-lg'>{props.name}</p>
    </div>
  )
}

export default SkillsItem
