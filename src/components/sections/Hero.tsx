import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        
        {/* Left Side: Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '3/4',
            backgroundColor: 'var(--bg-surface-elevated)',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            position: 'relative'
          }}>
            {/* Founder Portrait */}
            <img 
              src="/brendon-svotwa-pc.jpeg" 
              alt="Brendon Svotwa" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.9, filter: 'contrast(1.05) saturate(1.05)' }}
            />
            {/* Overlay Gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-main) 0%, transparent 50%)'
            }} />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-gold)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            Brendon Svotwa
          </h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Software Engineer <br/>
            <span className="text-gradient">& Future Tech Founder</span>
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '480px' }}>
            I build scalable software ecosystems, intelligent AI products, and next-generation operating platforms from Africa to the world.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
          </div>

          {/* Quick Statistics */}
          <div className="grid-3" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>10+</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Projects Deployed</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>4</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Future Products</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>100%</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Founder Vision</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
