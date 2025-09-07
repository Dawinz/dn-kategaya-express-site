import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <footer style={{
      background: '#1a1a1a',
      color: 'white',
      padding: isMobile ? '2rem 0 1rem 0' : '3rem 0 1rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 1rem' : '0 2rem'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: isMobile ? '1.5rem' : '2rem',
          marginBottom: '2rem'
        }}>
          
          {/* Company Info Section */}
          <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: isMobile ? '0.5rem' : '0.75rem',
              marginBottom: '1rem',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '0.5rem' : '1rem',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}>
                <img
                  src={`${window.location.origin}/images/logo.jpeg`}
                  alt="DNKategaya Express Logo"
                  style={{
                    width: isMobile ? '40px' : '50px',
                    height: isMobile ? '40px' : '50px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
                <h3 style={{
                  fontSize: isMobile ? '1.2rem' : '1.5rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #E10600, #FFD700, #0057FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  margin: 0
                }}>
                  DNKategaya Express
                </h3>
              </div>
              <p style={{ 
                fontSize: isMobile ? '0.7rem' : '0.8rem', 
                color: '#999', 
                margin: 0,
                fontStyle: 'italic',
                fontWeight: '500',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                {t('yourJourneyPriority')}
              </p>
            </div>
            <p style={{
              color: '#ccc',
              fontWeight: 500,
              marginBottom: '1rem',
              fontSize: '1.1rem'
            }}>
              {t('premiumJourneys')}
            </p>
            <p style={{
              color: '#999',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}>
              {t('companyDescription')}
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#FFD700'
            }}>
              {t('quickLinks')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/" style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  {t('home')}
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/routes" style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  {t('routes')}
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/gallery" style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  {t('gallery')}
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/contact" style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#FFD700'
            }}>
              {t('contactInfo')}
            </h4>
            <div style={{ fontSize: '0.9rem' }}>
              {/* Phone */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <svg style={{ width: '16px', height: '16px', fill: '#FFD700' }} viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="tel:+255743655381" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>+255 743 655 381</a>
                  <a href="tel:+255767894284" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }}>+255 767 894 284</a>
                </div>
              </div>

              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <svg style={{ width: '16px', height: '16px', fill: '#FFD700' }} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@dnkategayaexpress.com" style={{
                  color: '#ccc',
                  textDecoration: 'none',
                  transition: 'color 0.3s'
                }}>
                  info@dnkategayaexpress.com
                </a>
              </div>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <svg style={{ width: '16px', height: '16px', fill: '#FFD700' }} viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span style={{ color: '#ccc' }}>
                  P.O.Box 210, Karagwe
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center'
          }}>
            
            {/* Social Media Links */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{ color: '#999', fontSize: '0.9rem' }}>{t('followUs')}</span>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/255743655381" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#25D366',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s'
                }}
              >
                📱
              </a>
              
              {/* Facebook */}
              <a 
                href="https://facebook.com/dnkategayaexpress" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#1877F2',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s'
                }}
              >
                📘
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/dnkategayaexpress" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#E4405F',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s'
                }}
              >
                📷
              </a>
            </div>
            
            {/* Copyright */}
            <div style={{ color: '#999', fontSize: '0.9rem' }}>
              © {new Date().getFullYear()} DNKategaya Express. {t('allRightsReserved')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;