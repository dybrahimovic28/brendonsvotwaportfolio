import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1rem 0',
          borderBottom: '1px solid var(--border-color)',
          borderTop: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: 0
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>
            BRENDON SVOTWA PORTFOLIO<span style={{ color: 'var(--primary-gold)' }}>.</span>
          </a>
          
          <ul className="hidden-mobile" style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
            <li><a href="#about">About</a></li>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <a href="#contact" className="btn btn-secondary hidden-mobile" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Get In Touch
          </a>

          <button 
            className="hidden-desktop" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-primary)', 
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="hidden-desktop glass"
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              zIndex: 99,
              padding: '2rem',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <li><a href="#about" onClick={() => setIsOpen(false)} style={{ fontSize: '1.125rem', padding: '0.5rem', display: 'block' }}>About</a></li>
              <li><a href="#vision" onClick={() => setIsOpen(false)} style={{ fontSize: '1.125rem', padding: '0.5rem', display: 'block' }}>Vision</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)} style={{ fontSize: '1.125rem', padding: '0.5rem', display: 'block' }}>Projects</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)} style={{ fontSize: '1.125rem', padding: '0.5rem', display: 'block' }}>Contact</a></li>
              <li style={{ marginTop: '1rem' }}>
                <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary" style={{ width: '100%' }}>
                  Get In Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
