'use client'
import './ContactHero.css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MegnaticEffect from '@/components/MegnaticEffect';
import { IoMdArrowDown } from "react-icons/io";

function Contact() {
  return (
    <section className="contact">
      <motion.div initial={{ y: 25, opacity: 0}}  animate={{ y: 0, opacity: 1 }}  transition={{ duration: .7, delay: 1.6, ease: "easeOut" }} className="contactContainer">
        <div className="contactContent">
          <p>From idea to execution—let’s begin.</p>
          <h1>LET'S CONNECT</h1>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=artbymali770@gmail.com" target="_blank" rel="noopener noreferrer" className="gmailButton">WRITE A MESSAGE <span><IoMdArrowDown/></span></a>
        </div>
      </motion.div>
      <motion.div initial={{ y: 25, opacity: 0}}  animate={{ y: 0, opacity: 1 }}  transition={{ duration: .7, delay: 1.6, ease: "easeOut" }} className="contactBottom">
        <p>Feel free to contect with me.</p>
        <ul className="contactSocial">
          <li initial={{ opacity: 0, scale: 0.5 }}>
            <MegnaticEffect strength={0.5}> <Link href="https://www.linkedin.com/in/muhammad-ali-717255386/" target='_blank'>LinkedIn</Link> </MegnaticEffect>
          </li>
          <li initial={{ opacity: 0, scale: 0.5 }}>
            <MegnaticEffect strength={0.5}> <Link href="https://github.com/artbymali" target='_blank'>GitHub</Link> </MegnaticEffect>
          </li>
          <li initial={{ opacity: 0, scale: 0.5 }}>
            <MegnaticEffect strength={0.5}> <Link href="https://x.com/MuhammadNiz" target='_blank'>Twitter</Link> </MegnaticEffect>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}//

export default Contact