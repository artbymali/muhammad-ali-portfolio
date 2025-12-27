'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import './Loading.css';

function Loading({ onHide, onFinish }) {
    const [index, setIndex] = useState(0);
    const greetings = ["HELLO", "привет", "你好", "Halo", "Bonjour", "Salam"];
    // const colors = ["#004632", "#FF6A00", "#FF6347", "#B42318", "#6A0DAD", "#314B98"];
    const colors = ["#0E0E0E", "#181818", "#0E0E0E", "#181818", "#0E0E0E", "#181818"];
    // const textColors = ["#BDD0A0", "#FEF8DD", "#F5F5DC", "#F9CEE1", "#FFE6FF", "#FEF8DD"];
    const textColors = ["#F5F5F5", "#CFCFCF", "#F5F5F5", "#CFCFCF", "#F5F5F5", "#CFCFCF"];
    const [hide, setHide] = useState(false);


  useEffect(() => {
    if (index < greetings.length - 1) {
      const duration = index === 0 ? 400 : 250;
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, duration);
      return () => clearTimeout(timer);
    } 
    else {
      const hideTimer = setTimeout(() => {
        setHide(true);
        onHide?.();
        setTimeout(() => onFinish?.(), 800);
      }, 800);
      return () => clearTimeout(hideTimer);
    }
  }, [index]);

    
  return (
    <div className={`Loader ${hide ? 'hide' : ''}`}>
        <div className="frameCurrent same" style={{ backgroundColor: colors[index] }}>
            <h1 style={{ color: textColors[index] }}>{greetings[index]}</h1>
        </div>
    </div>
  )
}

export default Loading
