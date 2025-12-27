'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MegnaticEffect from '../MegnaticEffect'
import "./Footer.css";

function Footer() {
  return (
    <motion.footer className='footer' initial={{ width: '100%' }} whileInView={{ width: 'calc(100% - 25px)' }} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.3 }}>
      <motion.div className="footerContainer" initial={{ borderRadius: '0px' }} whileInView={{ borderRadius: '20px' }} transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} viewport={{ once: true, amount: 0.3 }}>
        <div className="footerContent">
          <div className="footerContentTop">
            <div className="footerText">
              <div className="footerTextTop">
                <img src="./myLogo.svg" alt="logo" />
                <h3>Let's work</h3>
              </div>
              <h3>together</h3>
            </div>
            <div className="footerButton">
              <Link href='./contact'><button>Let's Start</button></Link>
            </div>
          </div>
          <div className="line"></div>
          <div className="footerContentBottom">
            <div className="email">
              <p>Email: </p>
              <button>artbymali770@gmail.com</button>
            </div>
            <div className="bottom">
              <p>© 2025 Muhammad Ali. All rights reserved.</p>
              <div className="links">
                <p>SOCIALS:</p>
                <ul className="socialsLink">
                  <li>
                    <MegnaticEffect strength={0.5}>
                      <Link href='https://www.linkedin.com/in/muhammad-ali-717255386/' target='_blank'>LinkedIn</Link>
                    </MegnaticEffect>
                  </li>
                  <li>
                    <MegnaticEffect strength={0.5}>
                      <Link href='https://github.com/artbymali' target='_blank'>Github</Link>
                    </MegnaticEffect>
                  </li>
                  <li>
                    <MegnaticEffect strength={0.5}>
                      <Link href='https://x.com/MuhammadNiz' target='_blank'>Twitter</Link>
                    </MegnaticEffect>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;