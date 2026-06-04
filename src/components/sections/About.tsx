import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Who Is Brendon?</h2>
          <p className="section-subtitle">A brief look into my background, focus, and ambitions.</p>
        </motion.div>

        <div className="grid-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
          >
            <h3 style={{ color: 'var(--primary-gold)' }}>Background & Journey</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              I started my journey into software engineering with a fascination for how technology can solve complex, real-world problems. Over the years, I've transitioned from building simple web interfaces to engineering full-stack applications and planning scalable architectures.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              My experience spans across frontend design, backend infrastructure, and UI/UX, allowing me to bridge the gap between aesthetic appeal and robust functionality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card"
          >
            <h3 style={{ color: 'var(--accent-blue)' }}>Current Focus & Ambitions</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Today, my focus is on building intelligent systems that connect people, businesses, and technology. I am heavily invested in AI integration, seamless user experiences, and high-performance applications.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              My long-term ambition extends beyond freelancing or standard employment. I am laying the groundwork to become one of Africa's leading technology entrepreneurs, creating global-scale digital ecosystems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
