import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f3e5f5 0%, #e3f2fd 25%, #f8f9fa 50%, #e8f5e8 75%, #fff3e0 100%)' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #E10600, #FFD700, #0057FF)',
        color: 'white',
        padding: '2.5rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '0.75rem'
          }}>
            {t('contactUs')}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9
          }}>
            {t('getInTouchQuestions')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem'
        }}>
          
          {/* Contact Form */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(225,6,0,0.95), rgba(255,215,0,0.95), rgba(0,87,255,0.95))',
            color: 'white',
            padding: '2rem',
            borderRadius: '16px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#333'
            }}>
              {t('sendMessage')}
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'white',
                  fontSize: '0.9rem'
                }}>
                  {t('fullName')} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid transparent',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'box-shadow 0.3s, transform 0.2s',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FFD700, #E10600) border-box',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
                  }}
                  placeholder={t('enterFullName')}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'white',
                  fontSize: '0.9rem'
                }}>
                  {t('emailAddress')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid transparent',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'box-shadow 0.3s, transform 0.2s',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FFD700, #0057FF) border-box',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
                  }}
                  placeholder={t('enterEmail')}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'white',
                  fontSize: '0.9rem'
                }}>
                  {t('phoneNumber')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid transparent',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'box-shadow 0.3s, transform 0.2s',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #E10600, #FFD700) border-box',
                    boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
                  }}
                  placeholder={t('enterPhone')}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'white',
                  fontSize: '0.9rem'
                }}>
                  {t('message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid transparent',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'box-shadow 0.3s, transform 0.2s',
                    resize: 'vertical',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #0057FF, #FFD700) border-box',
                    boxShadow: '0 8px 22px rgba(0,0,0,0.12)'
                  }}
                  placeholder={t('enterMessage')}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #FFD700, #E10600, #0057FF)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2.25rem',
                  borderRadius: '999px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.3s',
                  boxShadow: '0 10px 24px rgba(0,0,0,0.18)'
                }}
              >
                {t('sendMessageBtn')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#333'
            }}>
              {t('contactInformation')}
            </h2>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#E10600'
                }}>
                  {t('phoneSupport')}
                </h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  {t('callDirectly')}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="tel:+255743655381" style={{ color: '#E10600', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}>+255 743 655 381</a>
                  <a href="tel:+255767894284" style={{ color: '#E10600', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600' }}>+255 767 894 284</a>
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#E10600'
                }}>
                  {t('emailSupport')}
                </h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  {t('sendEmail')}
                </p>
                <a href="mailto:info@dnkategayaexpress.com" style={{
                  color: '#E10600',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  info@dnkategayaexpress.com
                </a>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#E10600'
                }}>
                  {t('officeLocation')}
                </h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  {t('visitOffice')}
                </p>
                <p style={{ color: '#333', fontWeight: '500' }}>
                  P.O.Box 210, Karagwe
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#E10600'
                }}>
                  {t('businessHours')}
                </h3>
                <div style={{ color: '#666' }}>
                  <p style={{ marginBottom: '0.25rem' }}><strong>{t('mondayFriday')}</strong></p>
                  <p style={{ marginBottom: '0.25rem' }}><strong>{t('saturday')}</strong></p>
                  <p style={{ marginBottom: '0.25rem' }}><strong>{t('sunday')}</strong></p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#E10600'
              }}>
                {t('followUs')}
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://wa.me/255743655381" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: '#25D366',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'transform 0.3s'
                }}>
                  {t('whatsapp')}
                </a>
                
                <a href="https://facebook.com/dnkategayaexpress" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: '#1877F2',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  transition: 'transform 0.3s'
                }}>
                  {t('facebook')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;