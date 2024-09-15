"use client";

import {useEffect, useState} from 'react'
import { useAnimate, motion, stagger } from 'framer-motion'
import Image from 'next/image';


const Grids = () => {
  const divs = Array.from({ length: 144 }).map((_, index) => {
    return(
    <motion.div 
      key={index} 
      className="text-white p-4 text-center aspect-square border border-primary-blue/20"
      style={{ backgroundColor: "#0C0C0C" }}
      whileHover={{ backgroundColor: "#22B2E9", color: "#000" }}
      transition={{ duration: 1 }} 
    >
    </motion.div>
  )});

  return (
    <div className="grid md:grid-cols-[repeat(16,1fr)] grid-rows-[repeat(9,1fr)] grid-cols-[repeat(8,1fr)] grid-rows-[repeat(9,1fr)">
      {divs}
    </div>
  );
};

const Hero = () => {


  return (
    <main className='h-screen'>
      <Grids/>

      <div className='w-full flex flex-col justify-center items-center h-screen absolute inset-0 px-2 pointer-events-none space-y-6 px-4'>

        <div className='w-full flex flex-col justify-center items-center space-y-3'>
            <h2 className='md:text-xl text-sm font-bold text-primary-white text-center'>By IEEE Student Branch of UCSC</h2>
            <h1 className='text-primary-white md:text-7xl text-5xl uppercase font-secondary text-gradient text-center'>
                MADHACK 3.0
            </h1>
        </div>

        <div>
            <p className='md:text-xl text-sm text-primary-white text-center'>Sri Lanka's First Ever Mobile App Development Hackathon</p>
        </div>

      </div>

    </main>
  )
}

export default Hero