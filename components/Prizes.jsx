"use client"

import React from 'react'
import { motion } from 'framer-motion'

const prizes = [
  {
    title: "Gold",
    award: "LKR 60 000",
    gradient: "gold"
  },
  {
    title: "Silver",
    award: "LKR 40 000",
    gradient: "silver"
  },
  {
    title: "Bronze",
    award: "LKR 20 000",
    gradient: "bronze"
  },
]

const Prizes = () => {
  return (
    <section className='bg-primary-black py-20 space-y-10'>
      <div>
        <h3 className='font-secondary text-primary-white text-4xl text-center'>Prizes</h3>
      </div>

      <div className='flex md:flex-row flex-col items-center justify-around px-4 gap-4'>
        {prizes.map(({title, award, gradient}, index) =>(

          <motion.div 
            className={`md:w-[350px] w-[200px] aspect-square bg-gray-300 flex flex-col items-center justify-center ${gradient}`}
          >
            <p className='md:text-4xl text-2xl font-bold'> {title}</p>
            <p className='md:text-3xl text-lg'>{award}</p>
          </motion.div>

        ))}
      </div>
    </section>
  )
}

export default Prizes