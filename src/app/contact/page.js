import React from 'react'
import Header from '@/components/Header/Header'
import Contact from './contactHero/ContactHero'
import PageTransition from '@/pageTransition/pageTransition'

function page() {
  return (
    <div>
      <PageTransition>
        <Header/>
        <Contact/>
      </PageTransition>
    </div>
  )
}

export default page
