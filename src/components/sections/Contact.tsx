import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, Briefcase, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-main)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="contact-grid">
          
          {/* Left Side: CV Preview & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Establish Uplink</h2>
            <p className="section-subtitle">Ready to collaborate? Download my CV or reach out directly.</p>

            {/* CV Preview Card */}
            <div className="glass-card" style={{ marginBottom: '2rem', padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary-gold)' }}>
                 <img src="/brendon-svotwa-pc.jpeg" alt="Brendon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.25rem', color: 'var(--text-primary)' }}>Brendon Svotwa</h4>
                <p style={{ margin: '0 0 0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Software Engineer • Full Stack Developer</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                   <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '4px', background: 'var(--bg-surface-elevated)' }}>React</span>
                   <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '4px', background: 'var(--bg-surface-elevated)' }}>Node.js</span>
                   <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '4px', background: 'var(--bg-surface-elevated)' }}>TypeScript</span>
                </div>
              </div>
            </div>



            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:dybrahimovic28@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <Mail size={20} color="var(--primary-gold)" /> dybrahimovic28@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <Phone size={20} color="var(--primary-gold)" /> +260 779934886 / +260 973439282
              </div>
              <a href="https://wa.me/260779934886" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="var(--primary-gold)" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                +260 779934886 / +260 973439282
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                <MapPin size={20} color="var(--primary-gold)" /> Lusaka, Zambia
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <a href="#" className="btn btn-secondary" style={{ padding: '0.75rem', borderRadius: '50%' }}>
                <Code size={20} />
              </a>
              <a href="#" className="btn btn-secondary" style={{ padding: '0.75rem', borderRadius: '50%' }}>
                <Briefcase size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card"
          >
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Send a Transmission</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }} placeholder="Your name" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }} placeholder="your@email.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Message</label>
                <textarea rows={4} style={{ width: '100%', padding: '1rem', borderRadius: '8px', background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', resize: 'none' }} placeholder="How can we build the future together?"></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
                Initiate Sequence
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
