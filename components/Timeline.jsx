"use client"

import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion'

const timeLine = [
  {
    title: "Awareness Session",
    mode: "Virtual",
    date: "Jan 6th"
  },
  {
    title: "Mobile App Designing Session",
    mode: "Virtual",
    date: "Jan 10th"
  },
  {
    title: "Workshop - Flutter Session - Basics",
    mode: "Virtual",
    date: "Feb 4th"
  },
  {
    title: "Workshop - Flutter Session - Advanced",
    mode: "Virtual",
    date: "Feb 18th"
  },
  {
    title: "Open Initial Round Submissions",
    mode: "",
    date: "March 4th"
  },
  {
    title: "Close Initial Round Submissions",
    mode: "",
    date: "March 16th"
  },
  {
    title: "Announcement of Finalists",
    mode: "Virtual",
    date: "Postponed"
  },
  {
    title: "Final Hackathon",
    mode: "Onsite",
    date: "Postponed"
  },
  {
    title: "Final Hackathon & Award Ceremony",
    mode: "Onsite",
    date: "Postponed"
  },
]

const Timeline = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end 0.9']
  })

  return (
    <section className='bg-primary-black md:px-20 px-6 py-20 space-y-6' ref={container}>
      <div>
        <h3 className='font-secondary text-primary-white text-4xl text-center'>Timeline</h3>
      </div>

      <div className='md:space-y-12 space-y-5'>
        {timeLine.map(({title, mode, date}, index) =>{

          const start = index * 1/timeLine.length;
          const end = start + 1/timeLine.length;

          const clip  = useTransform(scrollYProgress, [start,end], ["100%", "0%"])

          const clipPath1 = useMotionTemplate`inset(0 0 0 ${clip} round 2%)`;
          const clipPath2 = useMotionTemplate`inset(0 ${clip} 0 0 round 2%)`;

          return(
          <div className={`flex ${index%2==0? "justify-start": "justify-end"}`}>
            <motion.div
              key={index}
              className={`md:w-1/2 w-full flex flex-col ${index%2==0? "text-end items-end": "text-start"}`}
            >
              <motion.div 
                className='bg-primary-blue md:w-[550px] w-full px-8 md:py-6 py-2 rounded-md'
                style={{clipPath: index%2==0? clipPath1 :clipPath2}}
              >
                <p className='text-primary-white font-secondary md:text-2xl text-lg'>{title}</p>
                <p className='text-primary-white md:text-lg text-base'>{mode}</p>
                <p className='text-primary-white md:text-lg text-base'>{date}</p>
              </motion.div>

            </motion.div>
          </div>
        )})}
      </div>
    </section>
  )
}

export default Timeline