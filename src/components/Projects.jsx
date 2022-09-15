import React from 'react'
import ProjectItem from './ProjectItem'
import WeatherApp from '../assets/mockups/WeatherApp.webp'
import RecipeApp from '../assets/mockups/RecipeApp.webp'
import CountryFlag from '../assets/mockups/CountryFlag.webp'

const Projects = () => {
  return (
    <section name='projects' className='w-full min-h-screen sm:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#1481BA]'>Projects</p>
          <p className='py-6 text-2xl'>Check out some of my recent work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <ProjectItem img={WeatherApp} name='Weather App' demo='https://weatherappmg.netlify.app/' code='https://github.com/manugdev/WeatherApp' />
          <ProjectItem img={RecipeApp} name='Recipe App' demo='https://recipe-app-manugdev.netlify.app/' code='https://github.com/manugdev/RecipeApp' />
          <ProjectItem img={CountryFlag} name='Country Flag' demo='https://country-flag-manugdev.netlify.app/' code='https://github.com/manugdev/country-flags' />
        </div>
      </div>
    </section>
  )
}

export default Projects
