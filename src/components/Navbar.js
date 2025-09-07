import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { t, toggleLanguage, getLanguageFlag, getLanguageName } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      padding: isMobile ? '0.5rem 0' : '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: isMobile ? '0.75rem' : '1rem' }}>
          <img
            src={`${window.location.origin}/images/logo.jpeg`}
            alt="DNKategaya Express Logo"
            style={{
              width: isMobile ? '50px' : '50px',
              height: isMobile ? '50px' : '50px',
              borderRadius: '10px',
              objectFit: 'cover',
              boxShadow: isMobile ? '0 2px 8px rgba(0,0,0,0.15)' : 'none'
            }}
          />
          {!isMobile && (
            <div style={{ textAlign: 'center', flex: 1 }}>
              <h1 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#E10600',
                margin: 0,
                lineHeight: '1.2'
              }}>
                DNKategaya Express
              </h1>
              <p style={{ 
                fontSize: '0.8rem', 
                color: '#555', 
                margin: '4px 0 0 0',
                fontStyle: 'italic',
                fontWeight: '400',
                lineHeight: '1.3'
              }}>
                {t('yourJourneyPriority')}
              </p>
            </div>
          )}
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
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
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Language Toggle Button for Mobile */}
            <button
              onClick={toggleLanguage}
              style={{
                background: 'linear-gradient(135deg, #E10600, #FFD700)',
                color: 'white',
                border: 'none',
                padding: '0.4rem 0.8rem',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <span>{getLanguageFlag()}</span>
              <span>{getLanguageName()}</span>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{
                width: '25px',
                height: '3px',
                background: '#333',
                transition: 'all 0.3s',
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
              }}></div>
              <div style={{
                width: '25px',
                height: '3px',
                background: '#333',
                transition: 'all 0.3s',
                opacity: isMobileMenuOpen ? 0 : 1
              }}></div>
              <div style={{
                width: '25px',
                height: '3px',
                background: '#333',
                transition: 'all 0.3s',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
              }}></div>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid #eee',
          padding: '1rem',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 99,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: '#333', 
                fontWeight: 500, 
                padding: '0.5rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/routes" 
              style={{ 
                textDecoration: 'none', 
                color: '#333', 
                fontWeight: 500, 
                padding: '0.5rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('routes')}
            </Link>
            <Link 
              to="/gallery" 
              style={{ 
                textDecoration: 'none', 
                color: '#333', 
                fontWeight: 500, 
                padding: '0.5rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('gallery')}
            </Link>
            <Link 
              to="/contact" 
              style={{ 
                textDecoration: 'none', 
                color: '#333', 
                fontWeight: 500, 
                padding: '0.5rem 0'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;