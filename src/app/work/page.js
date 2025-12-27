import React from 'react'
import WorkHero from './workHero/WorkHero'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import PageTransition from '@/pageTransition/pageTransition'

function page() {
  return (
    <div>
      <PageTransition>
        <Header theme='dark'/>
        <WorkHero/>
        <Footer/>
      </PageTransition>
    </div>
  )
}

export default page
