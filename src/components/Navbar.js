import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, toggleLanguage, getLanguageFlag, getLanguageName } = useLanguage();

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
              {t('yourJourneyPriority')}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{t('home')}</Link>
          <Link to="/routes" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{t('routes')}</Link>
          <Link to="/gallery" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{t('gallery')}</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>{t('contact')}</Link>
          
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            style={{
              background: 'linear-gradient(135deg, #E10600, #FFD700)',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            <span>{getLanguageFlag()}</span>
            <span>{getLanguageName()}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;