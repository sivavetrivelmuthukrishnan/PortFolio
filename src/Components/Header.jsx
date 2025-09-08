import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
   const [toggle,setToggle]=useState(false)
  return (
     <>
     <header className='flex justify-between px-5 py-5 bg-primery  '>
        <a className='font-bold text-black text-2xl ' href='#'>SIVAVETRIVEL M</a>
        <nav className='hidden md:block'>

        <ul className='flex text-white'>
            <li><a href='/' className='hover:text-black'>Home</a></li>
            <li><a href='#about'  className='hover:text-black'>About</a></li>
            <li><a href='#project'  className='hover:text-black'>Projects</a></li>
            <li><a href='#resume'  className='hover:text-black'>Resume</a></li> 
            <li><a href='#contact'  className='hover:text-black'>Contact</a></li>
        </ul>
        </nav>
       { toggle && <nav className='block md:hidden mobile'>
        <ul onClick={()=>setToggle(!toggle)} className='flex flex-col text-white'>
            <li><a href='/' className='hover:text-black'>Home</a></li>
            <li><a href='#about'  className='hover:text-black'>About</a></li>
            <li><a href='#project'  className='hover:text-black'>Projects</a></li>
           
            <li><a href='#contact'  className='hover:text-black'>Contact</a></li>
        </ul>
        </nav>}
        <button  onClick={()=>setToggle(!toggle)} className='block md:hidden'><Bars3Icon className='text-white  h-10'/></button>
     </header>
     </>
  )
}

export default Header