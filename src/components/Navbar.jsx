import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-20 text-center md:text-left border-b border-gray-400/20 bg-gray-950 bg-opacity-5 backdrop-blur-lg backdrop-filter p-3 flex justify-between items-center drop-shadow-xl px-4">
        <h1 className="md:px-12 font-bold text-2xl md:text-4xl text-black dark:text-white flex flex-row justify-between items-center gap-2 md:gap-4">
          <Image src="/favicon.png" alt="" height={20} width={50} />
          <Link className="text-white" href='/'>DevSync</Link>
          </h1>
          <div className="flex flex-row gap-20 justify-center items-center">
            <div className="hidden lg:flex flex-row gap-6">
          
          </div>
          <div className="flex flex-row gap-4 items-center">
          </div> 
          </div>
    </nav>
  )
}

export default Navbar
