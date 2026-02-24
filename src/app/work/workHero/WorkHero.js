'use client';
import React from 'react'
import './WorkHero.css'
import { motion } from 'framer-motion';
import { IoMdArrowDown } from "react-icons/io";

function WorkHero() {
  return (
    <motion.section initial={{ y: 25, opacity: 0}}  animate={{ y: 0, opacity: 1 }}  transition={{ duration: .7, delay: 1, ease: "easeOut" }} className="workHero">
      <div className="workHeroContainer">
        <div className="workHeroHeading">
          <p>My Work</p>
          <h2>Designing and building digital products that push boundaries and create impact.</h2>
          {/* <p>Designing and building digital products that push boundaries and create impact.</p> */}
        </div>
        <div className="workHeroContent">
          <button>All</button>
          <div className="cardParent">
            <div className="card">
              <div className="workCard">
                <img src="./cataloggg.webp" alt="catalog" />
              </div>
              <a href="https://alchemixadvisors.com/" target='_blank'><h3>ALCHEMIX ADVISORS <span><IoMdArrowDown/></span></h3></a>
              <div className="cardInfo">
                <p>Design & Development</p>
                <p>2025</p>
              </div>
            </div>
            <div className="card">
              <div className="workCard">
                <img src="./catto.jpg" alt="catalog" />
              </div>
              <a href="https://chromewebstore.google.com/detail/cdieinmhbcomhkhmackkpgngaecijnpe?utm_source=item-share-cb/" target='_blank'><h3>TYPBLE <span><IoMdArrowDown/></span></h3></a>
              <div className="cardInfo">
                <p>Design & Development</p>
                <p>2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default WorkHero

