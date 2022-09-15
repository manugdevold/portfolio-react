import React from 'react'

const About = () => {
  return (
    <section name='about' className='w-full min-h-screen sm:h-screen'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#1481BA]'>About</p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='text-3xl font-bold'>
            <p>
              Hi, I'm Manuel, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className='text-xl'>
            <p>
              I am 26 years old, I am from Quilmes, Buenos Aires, Argentina.
              I graduated from a technical high school, I studied industrial engineering for three years until I finally decided to follow my true path... programming. In 2019 I started a computer science degree at the National University of Quilmes, and I started taking courses at institutions such as Udemy, Alura LATAM, FreeCodeCamp, Scrimba, openBootcamp, etc.
              Today I changed universities, now I study at the 21st Century Business University, the same career and I continue to improve myself, doing projects, internships in search of my first IT job.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
