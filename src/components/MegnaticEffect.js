'use client';
import React, { useRef, useState } from 'react';

function MegnaticEffect({ children, strength = 0.3 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    setPosition({
      x: distanceX * strength,
      y: distanceY * strength
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
    style={{ display: 'inline-block', transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 0.3s ease-out' }}>
      {children}
    </div>
  );
}

export default MegnaticEffect;