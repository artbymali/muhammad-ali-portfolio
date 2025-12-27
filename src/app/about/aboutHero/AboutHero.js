'use client';
import React from 'react'
import { motion } from 'framer-motion';
import './AboutHero.css'

function AboutHero() {
  return (
    <section className='aboutHero'>
      <div className="aboutHeroContainer">
        <motion.div initial={{ y: 25, opacity: 0 }}  animate={{ y: 0, opacity: 1 }}  transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }} className="aboutHeroHeading">
          <h1><span>About me,</span> Helping brands transform ideas into digital success</h1>
          <p>With 3 years of development experience and 5 years in design, I specialize in crafting intuitive, user-centered interfaces and building reliable digital products across a wide range of platforms and experiences.</p>
        </motion.div>
        <motion.div initial={{ y: 25, opacity: 0 }}  animate={{ y: 0, opacity: 1 }}  transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }} className="aboutHeroImg">
          <img src="./personall.webp" alt="personalimage" />
        </motion.div>
        <motion.div initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut'}} viewport={{ once: true, amount: 0.2 }} className="aboutHeroContent">
          <div className="aboutHeroContentHeading">
            <h3>I’m a Full Stack Developer and UI/UX Designer with a deep understanding of user behavior, creating intuitive experiences that connect people and brands.</h3>
          </div>
          <div className="aboutHeroContentEx">
            <div className="aboutHeroContentLeft">
              <p>I work as a Full Stack Developer and UI/UX Designer, designing and developing end-to-end digital products. I create intuitive user interfaces, seamless user experiences, and scalable web applications. From wireframes and prototypes to clean, efficient code, I ensure every product is visually appealing, functional, and performance-driven.</p>
            </div>
            <div className="aboutHeroContentRight">
              <p>I help brands and businesses bring their ideas to life by understanding their goals and their users. By combining design thinking with technical expertise, I solve real problems, improve user engagement, and build products that create value, trust, and long-term growth.</p>
            </div>
          </div>
        </motion.div>
        <div className="aboutSkills">
          <motion.h2 initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut'}} viewport={{ once: true, amount: 0.2 }}>What i offer your..</motion.h2>
          <div className="aboutBox">
            <motion.div initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut', delay: 0.2}} viewport={{ once: true, amount: 0.2 }} className="aboutCard">
              <h5>01</h5>
              <h4>Development</h4>
              <p>With 3 years of experience in front-end and back-end development, I help clients transform ideas into reliable, SEO-friendly digital solutions that deliver real results.</p>
            </motion.div>
            <motion.div initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut', delay: 0.25}} viewport={{ once: true, amount: 0.2 }} className="aboutCard">
              <h5>02</h5>
              <h4>Design</h4>
              <p>With over 5 years of experience in graphic and web design, I create visually compelling, user-focused designs that strengthen brand identity and engagement.</p>
            </motion.div>
            <motion.div initial={{y: 10, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut', delay: 0.3}} viewport={{ once: true, amount: 0.2 }} className="aboutCard">
              <h5>03</h5>
              <h4>Full Packge</h4>
              <p>With experience in both design and development, I provide complete digital solutions—from brand visuals and logo design to fully functional, SEO-friendly websites.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
