import React from 'react'
import SocialBtn from './SocialBtn'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Hi from '../assets/Hi.png'

const Home = () => {
  return (
    <section name='home' className='w-full h-screen flex items-center sm:justify-center'>
      {/* Container */}
      <div className='max-w-[1000px] flex flex-col justify-center h-full p-4'>
        <h2 className='text-4xl lg:text-5xl xl:text-7xl mt-12 sm:mt-0'>Hi, my name is</h2>
        <h1 className='text-4xl lg:text-5xl xl:text-7xl font-bold text-[#1481BA]'>Manuel Garcia</h1>
        <h2 className='text-4xl lg:text-5xl xl:text-7xl'>I'm a Frontend Developer.</h2>
        <p className='py-8 max-w-[700px] text-xl'>
        I'm a dedicated person, lover of details. I really enjoy creating projects that live on the internet and always looking to create innovative and incredible digital experiences.
        </p>
        <div className='max-w-[500px] flex'>
          <ul className='w-full h-full flex flex-wrap justify-around sm:justify-between sm:flex-row'>
            <SocialBtn bg="bg-[#1481BA]" name="LinkedIn" icon={<FaLinkedin size={30} />} link="https://www.linkedin.com/in/manugdev/" />
            <SocialBtn bg="bg-black" name="GitHub" icon={<FaGithub size={30} />} link="https://github.com/manugdev" />
            <SocialBtn bg="bg-[#3F51B5]" name="Resume" icon={<BsFillPersonLinesFill size={30} />} link="https://rxresu.me/r/VQQL6ngJ" />
          </ul>
        </div>
      </div>
      <picture className='hidden lg:flex'>
        <img src={Hi} alt="Say Hi" />
      </picture>
    </section>
  )
}

export default Home