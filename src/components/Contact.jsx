import React, { useState } from 'react'

const Contact = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  

  return (
    <section name='contact' className='w-full min-h-screen flex justify-center items-center p-4 mt-12 sm:mt-0 sm:h-screen'>
      <form onSubmit={handleClick} method='POST' action='https://getform.io/f/3809671f-38d4-40d3-ade7-eaf7bb3984dc' className='flex flex-col max-w-[1000px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#1481BA]'>Contact</p>
          <p className='text-2xl py-4'>Submit the form below or send me an email to <span className='font-bold text-[#1481BA]'>manug24696@gmail.com</span></p>
        </div>
        <div className='flex flex-col max-w-[600px] m-auto w-full'>
          <input className='p-3 bg-[#063A51] rounded-md focus:outline-none focus:ring' required type='text' placeholder='Name' name='name' pattern='/[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}+[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}+[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}/' />
          <input className='my-4 p-3 bg-[#063A51] rounded-md focus:outline-none focus:ring' required type='email' placeholder='Email' name='email' pattern='^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$' />
          <textarea className='bg-[#063A51] resize-none p-3 rounded-md focus:outline-none focus:ring' required name='message' rows='10' placeholder='Message'></textarea>
          <button className='border-2 border-[#063A51] px-10 py-2 mt-8 mx-auto flex items-center rounded-md hover:bg-[#063A51] hover:shadow-lg hover:shadow-[#000D19]'>
            { !nav ? '': 
              <svg aria-hidden='true' className='w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#1481BA]' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/>
                <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/>
              </svg>
            }
            Let's Communicate
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
