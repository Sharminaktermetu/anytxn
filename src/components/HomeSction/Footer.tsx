import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.svg'
const Footer = () => {
  return (
    <div className="bg-[#002045]">
      <footer className="footer max-w-6xl mx-auto text-neutral-content items-center p-4 py-14">
  <aside className="grid-flow-col items-center">
    <Image src={logo} alt='logo'/>
    <p className='lg:flex hidden'>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-lg font-semibold text-[#00E9EA] lg:flex hidden">
  <span className='border-r border-slate-300 pr-4'>Our Solutions</span>
  <span>AnyCacc</span>
  <span>AnyCacc</span>
  <span>AnyCacc</span>
  
    
  </nav>

</footer>
<footer className="bg-[#00152D] text-[#0015a4] p-4 font-bold">
  <div className='flex justify-between max-w-6xl mx-auto '>
    <p>©2023 All rights reserved. Any Technology Pte Ltd.</p>
    <p>Privacy Policy</p>
  </div>
</footer>
    </div>
  )
}

export default Footer
