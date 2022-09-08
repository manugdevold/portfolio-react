import React from 'react'

const ProjectItem = (props) => {
  return (
    <div style={{backgroundImage: `url(${props.img})`}} className='shadow-lg shadow-[#000D19] group container flex justify-center items-center mx-auto content-div rounded-md'>
      <div className='text-center opacity-0 group-hover:opacity-100 duration-300'>
        <span className='text-2xl font-bold tracking-wider'>
          {props.name}
        </span>
        <div className='pt-8 text-center'>
          <a href={`${props.demo}`} target='_blank'>
            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold text-lg border-2 border-[#063A51] hover:bg-[#063A51] hover:shadow-lg hover:shadow-[#000D19]'>Demo</button>
          </a>
          <a href={`${props.code}`} target='_blank'>
            <button className='text-center rounded-lg px-4 py-3 m-2 font-bold text-lg border-2 border-[#063A51] hover:bg-[#063A51] hover:shadow-lg hover:shadow-[#000D19]'>Code</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem