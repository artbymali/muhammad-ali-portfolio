'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import './Projects.css';

function Projects() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);
  const animationRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setTargetPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const animate = () => {
      setCursorPos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.15,
        y: prev.y + (targetPos.y - prev.y) * 0.15
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    if (isHovering) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetPos, isHovering]);

  return (
    <motion.section className='projects' initial={{ width: '100%', borderRadius: '0px' }} whileInView={{ width: 'calc(100% - 25px)', borderRadius: "80px" }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
      <div className="projectsContainer">
        <Link href='https://alchemixadvisors.com/' target='_blank'>
            <motion.div className="projectsCard" ref={cardRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            initial={{ borderRadius: '0px' }} whileInView={{ borderRadius: '20px' }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true, amount: 0.2 }}>
            <img src="./cataloggg.webp" alt="image" />
          
            {isHovering && (
              <div className="cursorFollower" style={{  left: `${cursorPos.x}px`,  top: `${cursorPos.y}px` }}> 
                <p>Visit</p>
              </div>
            )}
          </motion.div>
        </Link>
        <h3>ALCHEMIX ADVISORS</h3>
        <div className="projectInfo">
          <p>Design & Development</p>
          <p>2025</p>
        </div>
      </div>
      <Link href='./work'><button>View Projects</button></Link>
    </motion.section>
  );
}

export default Projects;