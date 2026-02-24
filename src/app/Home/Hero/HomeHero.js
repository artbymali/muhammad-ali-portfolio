'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import MegnaticEffect from '@/components/MegnaticEffect';
import Link from 'next/link';
import './HomeHero.css';

function HomeHero() {

  return (
    // this was an attempt to animate the section size through css for that we give the section a class of laded and will be handled in the css file
    <section className= "homeHero loaded"
      //initial={{ height: '100vh', width: '100%', margin: '0px'}}  animate={ loaderHiding ? { height: 'calc(100vh - 25px)', width: 'calc(100% - 25px)', margin: '13px',} : { height: '100vh', width: '100%', margin: '0px', } } transition={{ duration: .5, delay: 1.2, ease: 'easeOut',}} className='homeHero'
      >
      <motion.div initial={{ width: "100%", height: "100%", borderRadius: "0", margin: "0"}} animate={{ width: 'calc(100% - 25px)', height: "calc(100% - 25px)", borderRadius: "20px", margin: "12.5px" }} transition={{ duration: .5, delay: 1.2, ease: 'easeOut'}} className="heroContainer">
        <motion.img initial={{ y: 25, opacity: 0}}  animate={{ y: 0, opacity: 1 }}  transition={{ duration: .65, delay: 1.8, ease: "easeOut" }}  src="./personall.webp" alt="personal" />
        <motion.h1 initial={{ y: 25, opacity: 0 }}  animate={{ y: 0, opacity: 1 }}  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }} >Because your first impression should be unforgettable.</motion.h1>
        <ul className="heroSocials">
          <motion.li initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.55, duration: 0.3, ease: 'easeOut' }}>
            <MegnaticEffect strength={0.5}> <Link href="https://www.linkedin.com/in/muhammad-ali-717255386/" target='_blank'><IoLogoLinkedin /></Link> </MegnaticEffect>
          </motion.li>
          <motion.li initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}>
            <MegnaticEffect strength={0.5}> <Link href="https://github.com/artbymali" target='_blank'><FaGithub /></Link> </MegnaticEffect>
          </motion.li>
          <motion.li initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.65, duration: 0.3, ease: 'easeOut' }}>
            <MegnaticEffect strength={0.5}> <Link href="https://x.com/MuhammadNiz" target='_blank'><FaXTwitter /></Link> </MegnaticEffect>
          </motion.li>
        </ul >
      </motion.div>
    </section>
  );
} 

export default HomeHero;
