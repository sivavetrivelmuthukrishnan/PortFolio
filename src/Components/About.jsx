import React from 'react'
import about from '../assets/about.png'
import '../App.css'

const About = () => {
  const config={
    line1:'I am Siva Vetrivel M, a passionate full-stack developer with a background in computer applications. I recently completed my Master of Computer Applications and I am eager to start my career in the software industry. My interest in technology comes from my curiosity to solve problems and build useful solutions.'
  }
  return (
    <section className='flex flex-col md:flex-row  bg-secondary px-5 ' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={about}></img>
    </div>
    <div className='md:w-1/2 flex justify-center '>
    <div className='flex flex-col justify-center text-white'>
          <h1 className='text-4xl text-white border-b-4 border-[] mb-5 w-[180px] font-bold'>About Me</h1>
        <p className='pt-6'>{config.line1}</p>
        <p className='pt-6'>I have experience in both frontend and backend development, with knowledge of modern frameworks and tools. I enjoy creating responsive and user-friendly web applications.</p>
        <p className='pt-6'>In backend development, I know Node.js, Express.js, MongoDB, and MySQL. I have worked on projects like a College Placement System and Tamilnadu Cleanliness Welfare Form Portal , which showcase both my frontend and backend skills.</p>
    </div>
       
    </div>
    </section>
  )
}

export default About