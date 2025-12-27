'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './Testimonials.css'

function Testimonials() {
  return (
    <section className="testimonial">
        <motion.div initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .6, ease: 'easeOut'}} viewport={{ once: true, amount: 0.15 }} className="testimonialContainer">
            <div className="testimonialHeading">
                <h2>WHAT OUR <span>CLIENT</span> SAY</h2>
            </div>
            <div className="testimonialContent">
                <div className="testimonialCard">
                    <div className="testimonialCardTop">
                        <div className="cardCricle">
                            <h2>K</h2>
                        </div>
                        <div className="testimonialCardInfo">
                            <h3>Engineer Khair Muhammad</h3>
                            <p>Chemical Engineer</p>
                        </div>
                    </div>
                    <div className="testimonialCardContent">
                        <p>"It was a great experience working with Muhammad Ali on the development of my website, Alchemix Advisors. He is highly professional, detail-oriented, and committed to delivering excellence. His expertise in Front-End, Back-End, Web Design, and Layout is truly impressive. From transforming the initial idea into a fully launched website, he handled every step with precision and perfection. I am extremely satisfied with his work and would strongly recommend him to anyone seeking a skilled and reliable web developer."</p>
                    </div>
                    <div className="testimonialCardBottom">
                        <div className="ratings">
                            <p>5.0</p>
                            <div className="star">
                                <img src="./icon.svg" alt="star" />
                                <img src="./icon.svg" alt="star" />
                                <img src="./icon.svg" alt="star" />
                                <img src="./icon.svg" alt="star" />
                                <img src="./icon.svg" alt="star" />
                            </div>
                        </div>
                        <div className="cardLogo">
                            <img src="./upwork.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Testimonials
