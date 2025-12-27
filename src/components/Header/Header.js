'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import './Header.css';
import Link from 'next/link';
import MegnaticEffect from '../MegnaticEffect';

function Header({ theme = 'Light' }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 599);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        if (!isMobile) {
          setMenuOpen(false);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    }
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isAtTop = scrollY < 50;
  const showDarkTheme = isAtTop && theme === 'dark';

  return (
    <header className={showDarkTheme ? 'darkHeader' : 'lightHeader'}>
      <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: .4, delay: 1.6, ease: 'easeOut'}}>
        <div className="WebsiteLogo">
          <MegnaticEffect strength={0.3}>
            <Link href="/"><img src={showDarkTheme ? '/myLogoDark.svg' : '/myLogo.svg'} alt="Logo" /></Link>
          </MegnaticEffect>
        </div>
        <ul className={`desktopMenu ${showDarkTheme ? 'darkMenu' : 'lightMenu'}`}>
          <li className={isActive('/') ? 'active' : ''}>
            <MegnaticEffect strength={0.5}>
              <Link href="/">Home</Link>
            </MegnaticEffect>
          </li>
          <li className={isActive('/work') ? 'active' : ''}>
            <MegnaticEffect strength={0.5}>
              <Link href="/work">Work</Link>
            </MegnaticEffect>
          </li>
          <li className={isActive('/about') ? 'active' : ''}>
            <MegnaticEffect strength={0.5}>
              <Link href="/about">About</Link>
            </MegnaticEffect>
          </li>
          <li className={isActive('/contact') ? 'active' : ''}>
            <MegnaticEffect strength={0.5}>
              <Link href="/contact">Contact</Link>
            </MegnaticEffect>
          </li>
        </ul>

        {isMobile && (
          <div className="mobileHamburger">
            <button className={`mobileHamburgerButton ${showDarkTheme ? 'darkMenu' : 'lightMenu'}`} onClick={toggleMenu}>
              {/* <motion.div className="hamburgerIcon" animate={menuOpen ? 'open' : 'closed'}>
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 }}} transition={{ duration: 0.3 }}/>
                <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.3 }}/>
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} transition={{ duration: 0.3 }}/>
              </motion.div> */}
              <span>Menu.</span>
            </button>
          </div>
        )}
      </motion.nav>

      <AnimatePresence>
        {scrolled && !isMobile && (
          <motion.div className="hamburgerContainer" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
            <motion.button className="hamburgerButton" onClick={toggleMenu}>
              <motion.div className="hamburgerIcon" animate={menuOpen ? 'open' : 'closed'}>
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 }}} transition={{ duration: 0.3 }}/>
                <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.3 }}/>
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} transition={{ duration: 0.3 }}/>
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="menuBox"
                  initial={{ width: 60, height: 60, borderRadius: '50%',opacity: 0}}
                  animate={{ width: 330,  height: 330,  borderRadius: '30px', opacity: 1}}
                  exit={{ width: 60,  height: 60,  borderRadius: '50%', opacity: 0}}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >

                  <motion.div className="hamubrgerWebsiteLogo" initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}>
                    <img src="./myLogo.svg" alt="logo" />
                  </motion.div>

                  <motion.ul className="menuLinks">
                    <motion.div className="linksHeading" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ delay: 0.3, duration: 0.3, ease: 'easeOut' }}>
                      <p>NAVIGATION:</p>
                    </motion.div>
                    <motion.li className={isActive('/') ? 'active' : ''} initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: -25 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}>
                      <MegnaticEffect strength={0.5}> <Link href="/">Home</Link> </MegnaticEffect>
                    </motion.li>
                    <motion.li className={isActive('/work') ? 'active' : ''} initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: -25 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}>
                      <MegnaticEffect strength={0.5}> <Link href="/work">Work</Link> </MegnaticEffect>
                    </motion.li>
                    <motion.li className={isActive('/about') ? 'active' : ''} initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: -25 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }} >
                      <MegnaticEffect strength={0.5}> <Link href='./about'>About</Link> </MegnaticEffect>
                    </motion.li>
                    <motion.li initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0, x: -25 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}> 
                      <MegnaticEffect strength={0.5}> <Link href='./contact'>Contact</Link> </MegnaticEffect>
                    </motion.li>
                  </motion.ul>

                  <motion.div className="hamubrgerSocial" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}>
                    <p>SOCIALS:</p>
                    <div className="socialLinks">
                      <motion.li initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.55, duration: 0.3, ease: 'easeOut' }}>
                        <MegnaticEffect strength={0.5}> <Link href="https://www.linkedin.com/in/muhammad-ali-717255386/" target='_blank'>LinkedIn</Link> </MegnaticEffect>
                      </motion.li>
                      <motion.li initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.6, duration: 0.3, ease: 'easeOut' }}>
                        <MegnaticEffect strength={0.5}> <Link href="https://github.com/artbymali" target='_blank'>GitHub</Link> </MegnaticEffect>
                      </motion.li>
                      <motion.li initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ delay: 0.65, duration: 0.3, ease: 'easeOut' }}>
                        <MegnaticEffect strength={0.5}> <Link href="https://x.com/MuhammadNiz" target='_blank'>Twitter</Link> </MegnaticEffect>
                      </motion.li>
                    </div>
                  </motion.div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div className="mobileMenuOverlay" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
            <div className="mobileMenuContent">
              <motion.div className="mobileMenuLogo" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                <img src="./myLogo.svg" alt="logo" />
                <motion.button className="mobileCloseButton" onClick={toggleMenu} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.3 }}>
                  <motion.div className="hamburgerIcon" animate="open">
                    <motion.span variants={{ open: { rotate: 45, y: 8 }}} transition={{ duration: 0.3 }}/>
                    <motion.span variants={{ open: { opacity: 0 }}} transition={{ duration: 0.3 }}/>
                    <motion.span variants={{ open: { rotate: -45, y: -8 }}} transition={{ duration: 0.3 }}/>
                  </motion.div>
                </motion.button>
              </motion.div>

              <motion.ul className="mobileMenuLinks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
                <motion.div className="linksHeading" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
                  <p>NAVIGATION:</p>
                </motion.div>
                {/* Here we removed onClick={toggleMenu} from Link in li. Because they are removing the slider but we want. The prupose to remove is we want slider still when we click on another link but the slider will be removed when the next page stats. */}
                <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <Link className={isActive('/') ? 'active' : ''} href="/">Home</Link>
                </motion.li>
                <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <Link className={isActive('/work') ? 'active' : ''} href="/work">Work</Link>
                </motion.li>
                <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
                  <Link className={isActive('/about') ? 'active' : ''} href="/about">About</Link>
                </motion.li>
                <motion.li initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }}>
                  <Link className={isActive('/contact') ? 'active' : ''} href="/contact">Contact</Link>
                </motion.li>
              </motion.ul>

              <motion.div className="mobileSocials" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
                <p>SOCIALS:</p>
                <div className="mobileSocialLinks">
                  <motion.a href="https://instagram.com" target="_blank"  rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
                    Instagram
                  </motion.a>
                  <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.85 }}>
                    LinkedIn
                  </motion.a>
                  <motion.a href="https://x.com/MuhammadNiz" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }}>
                    Twitter
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobile && scrolled && (
          <motion.div className="mobileScrollHamburger" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
            <button className="mobileScrollHamburgerBtn" onClick={toggleMenu}>
              <motion.div className="hamburgerIcon" animate={menuOpen ? 'open' : 'closed'}>
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 8 }}} transition={{ duration: 0.3 }}/>
                <motion.span variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.3 }}/>
                <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -8 } }} transition={{ duration: 0.3 }}/>
              </motion.div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;