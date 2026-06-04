import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--bg-surface-elevated)', borderRadius: '24px' }}
        >
          <span style={{ color: 'var(--primary-gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Core Philosophy</span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginTop: '1.5rem', lineHeight: 1.3, fontFamily: 'var(--font-heading)', maxWidth: '800px', margin: '1.5rem auto 0', color: 'var(--text-primary)' }}>
            "Technology should <span style={{ color: 'var(--accent-blue)' }}>empower people</span>, <br/>simplify complexity, and create <span style={{ color: 'var(--primary-gold)' }}>opportunities</span>."
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
