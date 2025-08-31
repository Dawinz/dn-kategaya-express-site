import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src={`${window.location.origin}/images/logo.jpeg`}
            alt="DN Kategaya Express Logo"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '8px',
              objectFit: 'cover'
            }}
          />
          <div>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #E10600, #FFD700, #0057FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0
            }}>
              DN Kategaya Express
            </h1>
            <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>
              Your Journey, Our Priority
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Home</Link>
          <Link to="/support" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Support</Link>
          <Link to="/policy/terms" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Terms</Link>
          <Link to="/policy/privacy" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>Privacy</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;