import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, PenTool, Wrench } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Code size={20} />,
      color: "var(--accent-blue)",
      skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Backend",
      icon: <Server size={20} />,
      color: "var(--primary-gold)",
      skills: ["Node.js", "REST APIs", "Databases", "Firebase", "Supabase"]
    },
    {
      title: "Design",
      icon: <PenTool size={20} />,
      color: "#ff6b6b",
      skills: ["Figma", "UI/UX", "Canva"]
    },
    {
      title: "Tools",
      icon: <Wrench size={20} />,
      color: "#20c997",
      skills: ["Git", "Vercel", "Netlify", "NPM", "VS Code"]
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
          <h2 className="section-title">Tech Arsenal</h2>
          <p className="section-subtitle">The tools and technologies I use to build digital ecosystems.</p>
        </motion.div>

        <div className="grid-4">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ color: cat.color, background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px' }}>
                  {cat.icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{cat.title}</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.skills.map((skill, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: cat.color }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
