"use client"

import {useRef} from 'react'
import { useScroll, useTransform, useMotionTemplate ,motion } from 'framer-motion'
import Image from 'next/image'

import introduction from "@/public/introduction.png"

const Introduction = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })
  
  const clip = useTransform(scrollYProgress, [0,0.2], ["35%", "0%"]);
  const clipPath = useMotionTemplate`inset(${clip} ${clip} ${clip} ${clip} round 2%)`;

  return (
    <section className='min-h-screen bg-primary-black overflow-hidden flex md:flex-row flex-col gap-8 md:px-20 px-6 mt-20 items-center'>

      <motion.div 
        className='overflow-hidden rounded-lg w-full md:order-1 order-2'
        style={{clipPath:clipPath}}
      >
        <Image 
          src={introduction}
          width={1200}
          height={1200}
          placeholder='blur'
          alt='CTO image'
          className='w-full h-full object-contain'
        />
      </motion.div>

      <div className='w-full h-fit space-y-3 md:order-2 order-1'>
        <motion.h3 
          className='text-primary-white font-secondary text-4xl'
          whileInView={{y:[-20,0], opacity: [0,1]}}
          transition={{duration: 1}}
        >
          What is MADHACK?
        </motion.h3>
        <motion.p 
          whileInView={{y:[20,0], opacity: [0,1]}}
          transition={{duration: 1}}
          className='text-primary-white'
        >
          Introducing Sri Lanka's first mobile application development Hackathon, the IEEE Student Branch of UCSC proudly presents 'MADHACK', an inter-university hackathon followed by a series of workshops. MADHACK aims to let the participants put their creativity and innovation to the test by giving them the opportunity to develop in any platform of choice
        </motion.p>
      </div>

    </section>
  )
}

export default Introduction