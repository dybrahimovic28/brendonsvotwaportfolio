import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', background: 'var(--bg-main)' }}>
      <div className="container">
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
          &copy; {new Date().getFullYear()} Brendon Svotwa. All rights reserved. <br/>
          Building the future, one line of code at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
