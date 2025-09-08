import React from 'react'
import Dashbord from '../assets/Dashbord.jpg'
import Ecommerce from '../assets/Ecommerce.jpg'
import FullStack from '../assets/FullStack.jpg'

const Projects = () => {
    const config = {
        Projects:[
            {
                image: ' ',
                description:'',
            },
             {
                image: ' ',
                description:'',
            }
            
        ]
    }
  return (
    <section id='project' className='flex flex-col py-5 px-5 justify-center bg-primery text-white'>
        <div className='w-full'>
        <div className='flex flex-col px-10 py-5 '>
           <h1 className="text-4xl text-white border-b-4 border-white mb-5 w-[140px] font-bold text-left
           ">
  Projects
</h1> 
<p>These are some of my best projects. I have built with React,MERN and MySql,CSS.    </p>

           </div>
        </div>
        <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
        <div className='relative '> 
             <img className='h-[200px]' src={Dashbord}></img>
              <div className='project-desc'>
                <p className='text-center px-5 py-5'>A Dashbord Website. Built With ReactJs.</p>
             </div>
        </div>    
        <div className='relative '>
             <img className='h-[200px]' src={Ecommerce}></img>
             <div className='project-desc'>
                <p className='text-center px-5 py-5'>A Ecommerce Website. Built With Mern stack.</p>
             </div>
        </div>  
        <div className='relative '>
            <img className='h-[200px]' src={FullStack}></img>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'>Tamilnadu Cleanliness Welfare Form Portal Build With Full Stack project</p>
             </div>
        </div>  

       
        
         
        </div>
        
        </div>
    </section>
  )
}

export default Projects