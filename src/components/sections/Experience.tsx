import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const timeline = [
    {
      year: "MID 2024",
      title: "Freelance Software Engineer",
      description: "Building scalable web applications, real estate platforms, and event management systems for local businesses."
    },
    {
      year: "MID 2025",
      title: "Full Stack Developer Trainee",
      description: "Expanded my skills through continuous self-learning and practical development. Studied modern web technologies through Tonyck Solutions (https://tonyck2000.com/) and independent learning via YouTube. Gained hands-on experience with React, Node.js, APIs, databases, and modern web architectures while building real-world and personal projects that strengthened my software engineering foundation."
    },
    {
      year: "Late 2025 - Present Day",
      title: "UI/UX Design & Frontend Fundamentals",
      description: "Started my software engineering journey during my first year at Eden University Zambia, learning the foundations of web development including HTML, CSS, JavaScript, and the principles of user experience design. This period laid the groundwork for my passion for building digital products and solving real-world problems through technology."
    }
  ];

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 className="section-title">Journey & Evolution</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>My path from learning the basics to architecting full-stack ecosystems.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-grid"
            >
              <div style={{ color: 'var(--primary-gold)', fontWeight: 600, fontSize: '1.125rem', paddingTop: '0.25rem' }}>
                {item.year}
              </div>
              <div className="timeline-content" style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '2rem', position: 'relative' }}>
                <div className="timeline-dot" style={{
                  position: 'absolute',
                  left: '-5px',
                  top: '0.6rem',
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: 'var(--accent-blue)'
                }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
