import React from 'react'
import Header from '../components/landing/Header'
import Hero from '../components/landing/Hero'
import AboutUs from '../components/landing/AboutUs'
import HowItWorks from '../components/landing/HowItWorks'
import Services from '../components/landing/Services'
import Footer from '../components/landing/Footer'

export default function LandingPage() {
  return (
    <div className='relative min-h-[150vh]  bg-[#F7F7F9] max-w-[1600px] mx-auto'>
        <Header/>
        <Hero/>
        <AboutUs/>
        <HowItWorks/>
        <Services/>
        <Footer/>
    </div>
  )
}
