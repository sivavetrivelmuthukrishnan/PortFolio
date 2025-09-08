import React from 'react'
import HeroImg from '../assets/hero.png'
import { FaInstagramSquare,FaFacebook, FaGithub} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


const Hero = () => {
  const config = {
    subtitle:"Im a Full-stack developer"

  }
  return (
    <section className='flex flex-col md:flex-row py-32 bg-primery justify-center'>
      <div className='w-1/2 flex-col'>
        <h1 className=' text-white text-5xl font-hero'>Hi,<br/>Im <span className='text-black'>SIVAVETRIVEL M </span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10 '>
          <a href="https://www.instagram.com/vm_siva_krishnan/" target='blank' className='pr-5 hover:text-white'><FaInstagramSquare size={40} /></a>
          <a href="https://www.facebook.com/siva.361147/" target='blank' className='pr-5 hover:text-white'><FaFacebook size={40}  /></a>
           <a href="https://github.com/sivavetrivelmuthukrishnan" target='blank' className='pr-5 hover:text-white'><FaGithub size={40}  /></a>
              <a href="https://www.linkedin.com/in/sivavetrivel-m-213433249/" target='blank' className='pr-5 hover:text-white'><CiLinkedin  size={40} /></a>
            
        </div>
        </div>
        <img className='md:w-1/3 ' src={HeroImg} />
    </section>
  )
}

export default Hero