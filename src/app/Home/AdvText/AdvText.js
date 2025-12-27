'use client';
import React from 'react'
import { motion } from 'framer-motion'
import './AdvText.css'

function AdvText() {
  return (
    <div className="advTextContainer">
        <motion.h1 initial={{y: 35, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{ duration: .7, ease: 'easeOut'}} viewport={{ once: true, amount: 0.1 }}>Redefining logic, solving the unsolvable, building what’s next. Crafting a legacy in code—one breakthrough at a time, shaping tomorrow.</motion.h1>
    </div>
  )
}

export default AdvText
