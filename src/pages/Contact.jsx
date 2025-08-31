import React, { useState } from 'react';

const Contact = () => {
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
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #E10600, #FFD700, #0057FF)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Get in touch with us for any questions or inquiries
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
              Send Message
            </h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  Full Name *
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
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  Email Address *
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
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s'
                  }}
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontSize: '0.9rem'
                }}>
                  Message *
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
                    border: '2px solid #e1e5e9',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    resize: 'vertical'
                  }}
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                style={{
                  background: '#E10600',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
              >
                Send Message
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
              Contact Information
            </h2>
            
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#E10600'
                }}>
                  Phone Support
                </h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  Call us directly for immediate assistance:
                </p>
                <a href="tel:+255755478744" style={{
                  color: '#E10600',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  +255 755 478 744
                </a>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#E10600'
                }}>
                  Email Support
                </h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  Send us an email for detailed inquiries:
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
                  Office Location
                </h3>
                <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                  Visit our office in Dar es Salaam:
                </p>
                <p style={{ color: '#333', fontWeight: '500' }}>
                  Dar es Salaam, Tanzania
                </p>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#E10600'
                }}>
                  Business Hours
                </h3>
                <div style={{ color: '#666' }}>
                  <p style={{ marginBottom: '0.25rem' }}><strong>Monday - Friday:</strong> 7:00 AM - 8:00 PM</p>
                  <p style={{ marginBottom: '0.25rem' }}><strong>Saturday:</strong> 7:00 AM - 6:00 PM</p>
                  <p style={{ marginBottom: '0.25rem' }}><strong>Sunday:</strong> 8:00 AM - 5:00 PM</p>
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
                Follow Us
              </h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://wa.me/255755478744" target="_blank" rel="noopener noreferrer" style={{
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
                  📱 WhatsApp
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
                  📘 Facebook
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