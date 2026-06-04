import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.012 2C6.494 2 2.012 6.48 2.012 12c0 1.763.456 3.42 1.282 4.887L2 22l5.228-1.371c1.424.773 3.037 1.18 4.784 1.18 5.517 0 10-4.48 10-10S17.529 2 12.012 2zm0 18.188c-1.492 0-2.915-.386-4.175-1.077l-.3-.165-3.093.811.826-3.018-.182-.29C4.372 15.228 3.963 13.662 3.963 12c0-4.432 3.606-8.038 8.049-8.038 4.432 0 8.038 3.606 8.038 8.038s-3.606 8.049-8.038 8.049zm4.417-6.037c-.242-.121-1.433-.708-1.656-.789-.222-.081-.384-.121-.546.121-.162.242-.627.789-.768.951-.141.162-.283.182-.525.061-1.378-.696-2.42-1.229-3.342-2.825-.101-.176.104-.157.34-.627.081-.162.04-.303-.02-.424-.061-.121-.546-1.314-.748-1.799-.197-.474-.396-.409-.546-.416l-.465-.007c-.162 0-.424.061-.647.303-.222.242-.849.829-.849 2.022 0 1.193.87 2.345.991 2.507.121.162 1.708 2.608 4.14 3.659 1.579.684 2.222.738 3.056.626.702-.095 2.155-.883 2.458-1.737.303-.854.303-1.587.212-1.737-.09-.15-.333-.232-.575-.353z"/>
  </svg>
);

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const whatsappUrl = "https://wa.me/260973439282";
  const phoneUrl = "tel:+260779934886";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 25 } },
    exit: { opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.15 } }
  };

  return (
    <div 
      ref={menuRef}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '1rem'
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              alignItems: 'flex-end',
              marginBottom: '0.5rem'
            }}
          >
            <motion.a 
              variants={itemVariants}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '0.85rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.05rem',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
              }}
            >
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </motion.a>
            
            <motion.a 
              variants={itemVariants}
              href={phoneUrl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: '#1A1A1A',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.85rem 1.5rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.05rem',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
              }}
            >
              <Phone size={22} />
              <span>Phone Call</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          boxShadow: isOpen 
            ? '0 0 20px rgba(37, 211, 102, 0.6)' 
            : ['0 0 0px rgba(37, 211, 102, 0)', '0 0 25px rgba(37, 211, 102, 0.5)', '0 0 0px rgba(37, 211, 102, 0)'],
        }}
        transition={{
          boxShadow: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(37, 211, 102, 0.8)' }}
        whileTap={{ scale: 0.95 }}
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '9999px',
          fontWeight: 700,
          fontSize: '1.1rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 51,
          fontFamily: 'inherit',
          letterSpacing: '0.5px'
        }}
      >
        CONTACT US
      </motion.button>
    </div>
  );
};

export default FloatingContact;
