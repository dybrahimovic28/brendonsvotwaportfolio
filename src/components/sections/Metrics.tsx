import React from 'react';
import { motion } from 'framer-motion';

const Metrics = () => {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "15+", label: "Technologies Mastered" },
    { value: "4+", label: "Years Learning & Building" },
    { value: "4", label: "Future Products Planned" }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        <div className="grid-4" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '4rem 0' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--primary-gold)', fontFamily: 'var(--font-heading)', lineHeight: 1.2 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '1.125rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
