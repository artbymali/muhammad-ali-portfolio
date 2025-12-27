'use client';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <>
      {/* White overlay that covers the screen then fades out */}
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.3, delay: 1.1, ease: 'easeInOut'}}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#ffffff', zIndex: 9999, pointerEvents: 'none'}}
      />
        {children}
    </>
  );
}