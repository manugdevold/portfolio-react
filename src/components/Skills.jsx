import React from 'react'
import SkillsItem from './SkillsItem'
import Bootstrap from '../assets/technologies/bootstrap.png'
import Git from '../assets/technologies/git.png'
import JavaScript from '../assets/technologies/js.png'
import ReactImg from '../assets/technologies/react.png'
import Sass from '../assets/technologies/sass.png'
import Tailwind from '../assets/technologies/Tailwind_CSS_Logo.png'
import Node from '../assets/technologies/node-js.png'
import Github from '../assets/technologies/github.png'
import HTML from '../assets/technologies/html-5.png'
import CSS from '../assets/technologies/css-3.png'

const Skills = () => {
  return (
    <section name='skills' className='w-full min-h-screen mt-12 sm:mt-0 sm:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#1481BA]'>Skills</p>
          <p className='py-4 text-2xl'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8'>
          <SkillsItem img={ReactImg} name='React.js' />
          <SkillsItem img={Node} name='Node.js' />
          <SkillsItem img={JavaScript} name='JavaScript' />
          <SkillsItem img={Sass} name='SASS' />
          <SkillsItem img={Bootstrap} name='Bootstrap' />
          <SkillsItem img={Tailwind} name='Tailwind' />
          <SkillsItem img={HTML} name='HTML' />
          <SkillsItem img={CSS} name='CSS' />
          <SkillsItem img={Git} name='Git' />
          <SkillsItem img={Github} name='GitHub' />
        </div>
      </div>
    </section>
  )
}

export default Skills
