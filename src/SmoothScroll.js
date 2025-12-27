'use client';
import React from 'react'
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis';


function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1.2,
      touchMultiplier: 1,
      duration: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}

export default SmoothScroll
