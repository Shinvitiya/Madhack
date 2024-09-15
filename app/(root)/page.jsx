import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Prizes from '@/components/Prizes'
import Timeline from '@/components/Timeline'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Introduction/>
    <Timeline/>
    <Prizes/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default page