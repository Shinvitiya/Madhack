import React from 'react'
import Image from 'next/image'

import logo from "@/public/logo.png"

const Footer = () => {
  return (
    <footer className='bg-primary-black/80 py-20 px-20 flex flex-col items-center justify-center'>
      <div>
        <Image 
          src={logo}
          width={1200}
          height={1200}
          alt='Logo'
          className='w-[400px]'
        />
      </div>
    </footer>
  )
}

export default Footer