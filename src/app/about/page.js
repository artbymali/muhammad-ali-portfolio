import React from 'react'
import AboutHero from './aboutHero/AboutHero'
import AboutSkills from './aboutSkills/AboutSkills'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import AboutBuild from './aboutBuild/AboutBuild'
import Testimonials from '../Home/Testimonials/Testimonials'
import PageTransition from '@/pageTransition/pageTransition'

function page() {
  return (
    <div>
      <PageTransition>
        <Header theme='dark'/>
        <AboutHero/>
        {/* <AboutSkills/> */}
        <Testimonials/>
        <Footer/>
      </PageTransition>
      
    </div>
  )
}

export default page
