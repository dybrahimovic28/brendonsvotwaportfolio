import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Globe, Activity } from 'lucide-react';

const Vision = () => {
  return (
    <section id="vision" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title text-gradient">The Directive</h2>
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 500 }}>
            "I'm not just building websites. <br/> I'm building a future technology ecosystem."
          </h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem' }}>
            To forge an ecosystem of software, hardware, and AI systems under a unified brand. World-Class Tech, Made In Africa.
          </p>
        </motion.div>

        {/* Ecosystem Diagram */}
        <div style={{ position: 'relative', padding: '4rem 0' }}>
          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'var(--bg-main)',
              border: '2px solid var(--primary-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              position: 'relative',
              zIndex: 10,
              boxShadow: '0 0 40px var(--primary-gold-dim)',
              overflow: 'hidden'
            }}
          >
            <img src="/brendon-svotwa-pc.jpeg" alt="Brendon Svotwa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          {/* Connectors & Nodes */}
          <div className="grid-3" style={{
            marginTop: '2rem'
          }}>
            <EcosystemNode 
              icon={<Wallet size={24} />}
              title="Mulatrack App"
              desc="Tracks spending, categorizes expenses, and builds smart budgets daily. Works seamlessly across Android, iOS, Windows, and other major operating systems."
              align="left"
              delay={0.2}
            />
            <EcosystemNode 
              icon={<Globe size={24} />}
              title="EDEN RECRUITMENT"
              desc="A global student recruitment platform that enables international agents to recruit students through a streamlined online admissions process."
              align="left"
              delay={0.3}
            />
            <EcosystemNode 
              icon={<Activity size={24} />}
              title="STARLINK ULTRA"
              desc="Monitors customer payments, expiry dates, account balances, and subscription activity through a centralized management system."
              align="left"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const EcosystemNode = ({ icon, title, desc, align, delay }: any) => {
  const isRight = align === 'right';
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card vision-card ${isRight ? 'vision-card-right' : 'vision-card-left'}`}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
        marginTop: '4rem'
      }}
    >
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '12px',
        background: 'var(--bg-main)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--accent-blue)',
        flexShrink: 0
      }}>
        {icon}
      </div>
      <div>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{desc}</p>
      </div>
    </motion.div>
  );
}

export default Vision;
