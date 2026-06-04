import React from 'react';
import { motion } from 'framer-motion';

const FutureProducts = () => {
  const products = [
    {
      name: "Mulatrack App",
      mission: "Tracks spending, categorizes expenses, and builds smart budgets daily.",
      impact: "Works seamlessly across Android, iOS, Windows, and other major operating systems.",
      roadmap: "Phase 5: Testing and Maintenance"
    },
    {
      name: "EDEN RECRUITMENT",
      mission: "A global student recruitment platform.",
      impact: "Enables international agents to recruit students through a streamlined online admissions process.",
      roadmap: "Phase 5: Testing and Maintenance"
    },
    {
      name: "STARLINK ULTRA",
      mission: "Monitors customer payments, expiry dates, account balances, and subscription activity.",
      impact: "Provides a centralized management system for seamless operations.",
      roadmap: "Phase 5: Testing and Maintenance"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 className="section-title">Product Roadmap</h2>
          <p className="section-subtitle">A deep dive into the technologies I am building for the future.</p>
        </motion.div>

        <div className="grid-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
              style={{ borderTop: '4px solid var(--accent-blue)' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{product.name}</h3>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Mission</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0' }}>{product.mission}</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Impact</strong>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0.25rem 0 0' }}>{product.impact}</p>
              </div>
              <div style={{ background: 'rgba(0, 194, 255, 0.1)', padding: '0.5rem 1rem', borderRadius: '4px', display: 'inline-block', marginTop: 'auto' }}>
                <span style={{ color: 'var(--accent-blue)', fontSize: '0.75rem', fontWeight: 600 }}>{product.roadmap}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureProducts;
