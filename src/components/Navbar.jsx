import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (label, href) => {
    setActiveLink(label);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(245,241,233,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid #E2DDD4' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 16px rgba(26,26,20,0.06)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}>
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('HOME', '#home')}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            {/* Leaf icon */}
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#1E4D33',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.2rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#1A1A14',
              }}>
                A<span style={{ color: '#1E4D33' }}>R</span>OMA
              </span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.45rem',
                letterSpacing: '0.22em',
                color: '#7A7666',
                fontWeight: 500,
                marginTop: '1px',
              }}>
                RESTAURANT
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href); }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.82rem',
                  fontWeight: activeLink === link.label ? 600 : 400,
                  letterSpacing: '0.02em',
                  textTransform: 'none',
                  color: activeLink === link.label ? '#1E4D33' : '#7A7666',
                  textDecoration: 'none',
                  position: 'relative',
                  paddingBottom: '4px',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => { if (activeLink !== link.label) e.target.style.color = '#1E4D33'; }}
                onMouseLeave={e => { if (activeLink !== link.label) e.target.style.color = '#7A7666'; }}
              >
                {link.label}
                {activeLink === link.label && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1.5px',
                      background: '#1E4D33',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {[Search, User].map((Icon, i) => (
              <button
                key={i}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#7A7666',
                  cursor: 'pointer',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#1E4D33'}
                onMouseLeave={e => e.currentTarget.style.color = '#7A7666'}
                className="desktop-nav"
              >
                <Icon size={18} strokeWidth={1.5} />
              </button>
            ))}

            {/* Order Online CTA button — like reference */}
            <button
              className="btn-primary desktop-nav"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ padding: '10px 22px', fontSize: '0.78rem' }}
            >
              Order Online
            </button>

            {/* Hamburger */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: 'none',
                border: '1.5px solid #E2DDD4',
                color: '#1E4D33',
                cursor: 'pointer',
                padding: '6px 8px',
                borderRadius: '8px',
                display: 'none',
                alignItems: 'center',
              }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '280px',
              zIndex: 2000,
              background: '#F5F1E9',
              backdropFilter: 'blur(16px)',
              borderLeft: '1px solid #E2DDD4',
              display: 'flex',
              flexDirection: 'column',
              padding: '80px 36px 36px',
              boxShadow: '-8px 0 40px rgba(26,26,20,0.1)',
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'none',
                border: 'none',
                color: '#7A7666',
                cursor: 'pointer',
              }}
            >
              <X size={22} />
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href); }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    color: activeLink === link.label ? '#1E4D33' : '#7A7666',
                    textDecoration: 'none',
                    borderBottom: '1px solid #E2DDD4',
                    paddingBottom: '16px',
                    transition: 'color 0.25s ease',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div style={{ marginTop: 'auto' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.4rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#1A1A14',
              }}>
                A<span style={{ color: '#1E4D33' }}>R</span>OMA
              </div>
              <p style={{ fontSize: '0.75rem', color: '#7A7666', marginTop: '6px', lineHeight: 1.6 }}>
                Where Every Flavor Tells a Story.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1999,
              background: 'rgba(26,26,20,0.3)',
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
