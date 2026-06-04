import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Brendon delivered the project ahead of schedule. The code quality and the communication throughout the process were exceptional.",
      author: "TonyCK",
      role: "CEO, Business"
    },
    {
      quote: "His ability to bridge the gap between complex backend logic and a seamless user experience makes him a rare talent.",
      author: "Sean Nyakutira",
      role: "Partnership Developer"
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Professional Endorsements</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>What others say about my work ethic and delivery.</p>
        </motion.div>

        <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card"
              style={{ position: 'relative', paddingTop: '3rem' }}
            >
              <div style={{ 
                position: 'absolute', 
                top: '-20px', 
                left: '2rem', 
                fontSize: '4rem', 
                color: 'var(--primary-gold-dim)', 
                fontFamily: 'serif', 
                lineHeight: 1 
              }}>
                "
              </div>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.125rem', marginBottom: '2rem', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                {item.quote}
              </p>
              <div>
                <h4 style={{ margin: 0, color: 'var(--primary-gold)' }}>{item.author}</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
