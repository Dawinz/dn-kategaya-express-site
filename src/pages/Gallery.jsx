import React, { useState } from 'react';
import { getImagePath, IMAGES } from '../utils/imageUtils';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: getImagePath(IMAGES.LOGO),
      alt: 'DN Kategaya Express Logo',
      title: 'Company Logo'
    },
    {
      src: getImagePath(IMAGES.BUS_FLEET),
      alt: 'DN Kategaya Express Bus Fleet',
      title: 'Modern Bus Fleet'
    },
    {
      src: getImagePath(IMAGES.BUS_EXTERIOR),
      alt: 'DN Kategaya Express Bus Exterior',
      title: 'Premium Bus Exterior'
    },
    {
      src: getImagePath(IMAGES.BUS_SERVICE),
      alt: 'DN Kategaya Express Bus Service',
      title: 'Professional Service'
    },
    {
      src: getImagePath(IMAGES.BUS_INTERIOR),
      alt: 'DN Kategaya Express Bus Interior',
      title: 'Comfortable Interior'
    },
    {
      src: getImagePath(IMAGES.BUS_FEATURES),
      alt: 'DN Kategaya Express Bus Features',
      title: 'Advanced Features'
    },
    {
      src: getImagePath(IMAGES.BUS_DESIGN),
      alt: 'DN Kategaya Express Bus Design',
      title: 'Elegant Design'
    },
    {
      src: getImagePath(IMAGES.BUS_QUALITY),
      alt: 'DN Kategaya Express Bus Quality',
      title: 'Premium Quality'
    },
    {
      src: getImagePath(IMAGES.BUS_SAFETY),
      alt: 'DN Kategaya Express Bus Safety',
      title: 'Safety Features'
    },
    {
      src: getImagePath(IMAGES.BUS_COMFORT),
      alt: 'DN Kategaya Express Bus Comfort',
      title: 'Passenger Comfort'
    },
    {
      src: getImagePath(IMAGES.BUS_EXCELLENCE),
      alt: 'DN Kategaya Express Bus Excellence',
      title: 'Service Excellence'
    },
    {
      src: getImagePath(IMAGES.BUS_FLEET_OVERVIEW),
      alt: 'DN Kategaya Express Bus Fleet Overview',
      title: 'Fleet Overview'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #E10600, #FFD700, #0057FF)',
        color: 'white',
        padding: '5rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Our Gallery
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            lineHeight: 1.6
          }}>
            Discover our modern fleet and premium transportation services
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2.5rem',
          marginBottom: '4rem'
        }}>
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
              onClick={() => openModal(image)}
            >
              <div style={{
                height: '300px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '2rem 1.5rem 1.5rem',
                  color: 'white'
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div style={{
          background: 'white',
          padding: '4rem',
          borderRadius: '24px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            textAlign: 'center',
            color: '#333',
            background: 'linear-gradient(135deg, #E10600, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Why Choose DN Kategaya Express
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E10600, #FF6B6B)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                fontSize: '2.5rem',
                boxShadow: '0 8px 25px rgba(225, 6, 0, 0.3)'
              }}>
                🚌
              </div>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#333'
              }}>
                Modern Fleet
              </h3>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Our buses feature the latest amenities, climate control, and entertainment systems for ultimate comfort and safety
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                fontSize: '2.5rem',
                boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
              }}>
                ⏰
              </div>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#333'
              }}>
                Punctual Service
              </h3>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.1rem' }}>
                We value your time and ensure all departures and arrivals are on schedule with real-time tracking
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0057FF, #4A90E2)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                fontSize: '2.5rem',
                boxShadow: '0 8px 25px rgba(0, 87, 255, 0.3)'
              }}>
                🛡️
              </div>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: '#333'
              }}>
                Safety First
              </h3>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Professional drivers, regular maintenance, and advanced safety features for your complete peace of mind
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #E10600, #FFD700)',
          color: 'white',
          padding: '5rem 4rem',
          borderRadius: '24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '200px',
            height: '200px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-15%',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '50%'
          }}></div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            position: 'relative',
            zIndex: 1
          }}>
            Ready to Travel?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            opacity: 0.95,
            position: 'relative',
            zIndex: 1
          }}>
            Book your journey with DN Kategaya Express today and experience premium transportation
          </p>
          <a href="/" style={{
            display: 'inline-block',
            background: 'white',
            color: '#E10600',
            padding: '1.5rem 3rem',
            borderRadius: '15px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1.3rem',
            transition: 'all 0.3s',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            position: 'relative',
            zIndex: 1
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
          }}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '2rem',
          backdropFilter: 'blur(10px)'
        }}
        onClick={closeModal}
        >
          <div style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-60px',
                right: '0',
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '2.5rem',
                cursor: 'pointer',
                zIndex: 1001,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}
            />
            <div style={{
              background: 'rgba(255,255,255,0.95)',
              padding: '2rem',
              borderRadius: '12px',
              marginTop: '1.5rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#333'
              }}>
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;