import React from 'react';

const Support = () => {
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
            Customer Support
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            We're here to help you with any questions or concerns about your journey
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          
          {/* Contact Information */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              Contact Information
            </h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
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

            <div style={{ marginBottom: '1.5rem' }}>
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
          </div>

          {/* Business Hours */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              Business Hours
            </h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#E10600'
              }}>
                Office Hours
              </h3>
              <div style={{ color: '#666' }}>
                <p style={{ marginBottom: '0.25rem' }}><strong>Monday - Friday:</strong> 7:00 AM - 8:00 PM</p>
                <p style={{ marginBottom: '0.25rem' }}><strong>Saturday:</strong> 7:00 AM - 6:00 PM</p>
                <p style={{ marginBottom: '0.25rem' }}><strong>Sunday:</strong> 8:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#E10600'
              }}>
                Emergency Support
              </h3>
              <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                For urgent matters outside business hours:
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
          </div>

          {/* Social Media */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              Follow Us
            </h2>
            
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              Stay updated with our latest news and announcements:
            </p>

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

        {/* FAQ Section */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            textAlign: 'center',
            color: '#333'
          }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#E10600'
              }}>
                How do I book a ticket?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                You can book tickets through our website using the search form on the homepage, or call us directly at +255 755 478 744 for assistance.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#E10600'
              }}>
                What is your cancellation policy?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Cancellations made 24 hours before departure are eligible for a full refund. Cancellations within 24 hours may incur charges. Please contact us for specific details.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#E10600'
              }}>
                Do you offer luggage storage?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Yes, we provide secure luggage storage facilities. Each passenger is allowed one large bag and one small carry-on item. Additional luggage may incur extra charges.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#E10600'
              }}>
                Are your buses air-conditioned?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Yes, all our buses are equipped with air conditioning for your comfort during the journey.
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#E10600'
              }}>
                What safety measures do you have?
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                We maintain strict safety standards with regular vehicle maintenance, professional drivers, and comprehensive insurance coverage for all passengers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
