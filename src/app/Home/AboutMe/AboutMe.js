'use client';
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="aboutMeContainer">
        <div className="aboutMeContent">
            <motion.h2 initial={{y: 35, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .7, ease: 'easeOut'}} viewport={{ once: true, amount: 0.2 }}>Empowering brands to rise above the noise in a fast-moving digital world. Together, we’ll challenge conventions, redefine standards, and build a presence that commands attention. No fluff, no empty promises — just clarity, creativity, and results that push boundaries. Always forward, always on the cutting edge.</motion.h2>
            <Link href='./about'><button>About Me</button></Link>
        </div>
    </div>
  )
}

export default AboutMe
