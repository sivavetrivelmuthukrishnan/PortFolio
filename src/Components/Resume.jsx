import React from 'react'
import about from '../assets/resume.jpg'
import '../App.css'

const Resume = () => {
  return (
    <section id='resume'  className='flex flex-col md:flex-row  bg-secondary px-5 '>
    <div className='py-5 md:w-1/2 flex justify-center'>
        <img className='w-[300px]' src={about}></img>
    </div>
    <div className='md:w-1/2 flex justify-center '>
    <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl text-white border-b-4 border-[] mb-5 w-[130px] font-bold'>Resume</h1>
       
        <p>You can view my resume <a className='btn' href='file:///C:/Users/Asus/Downloads/SIVAVETRIVEL%20Mern%20Resum.pdf'>Download</a></p>
    </div>
       
    </div>
    </section>
  )
}

export default Resume