import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import { useLanguage } from '../context/LanguageContext';
import { getImagePathAbsolute, IMAGES } from '../utils/imageUtils';

const Home = ({ setIsBookingDialogOpen }) => {
  const location = useLocation();
  const prefillData = location.state?.prefillForm;
  const { t } = useLanguage();
  const [ctaImage, setCtaImage] = useState(IMAGES.CTA_DESKTOP);

  // Responsive image selection
  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 768) {
        setCtaImage(IMAGES.CTA_MOBILE);
      } else if (window.innerWidth < 1200) {
        setCtaImage(IMAGES.CTA_TABLET);
      } else {
        setCtaImage(IMAGES.CTA_DESKTOP);
      }
    };

    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Search Section */}
      <section style={{
        background: '#f8f9fa',
        padding: '3rem 0'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              color: '#333'
            }}>
              {t('findPerfectJourney')}
            </h2>
            <SearchForm setIsBookingDialogOpen={setIsBookingDialogOpen} prefillData={prefillData} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: '4rem 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              {t('whyChooseUs')}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666'
            }}>
              {t('experienceDifference')}
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Feature 1 */}
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              border: '1px solid #e1e5e9',
              borderRadius: '12px',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#E10600',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                ✓
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#333'
              }}>
                {t('premiumComfort')}
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                {t('premiumComfortDesc')}
              </p>
            </div>
            
            {/* Feature 2 */}
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              border: '1px solid #e1e5e9',
              borderRadius: '12px',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#FFD700',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                ⏰
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#333'
              }}>
                {t('onTimeDeparture')}
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                {t('onTimeDepartureDesc')}
              </p>
            </div>
            
            {/* Feature 3 */}
            <div style={{
              textAlign: 'center',
              padding: '2rem',
              border: '1px solid #e1e5e9',
              borderRadius: '12px',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#0057FF',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                🛡️
              </div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#333'
              }}>
                {t('safeTravel')}
              </h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                {t('safeTravelDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Images Section */}
      <section style={{
        background: '#f8f9fa',
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              {t('ourModernFleet')}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666'
            }}>
              {t('travelInComfort')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              height: '250px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <img
                src={`${window.location.origin}/images/bus-fleet-10.jpeg`}
                alt="DN Kategaya Express Bus"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              height: '250px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <img
                src={`${window.location.origin}/images/bus-fleet-9.jpeg`}
                alt="DN Kategaya Express Bus Interior"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              height: '250px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <img
                src={`${window.location.origin}/images/bus-fleet-8.jpeg`}
                alt="DN Kategaya Express Bus Service"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes Section */}
      <section style={{
        padding: '4rem 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              {t('popularRoutes')}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666'
            }}>
              {t('travelToMajorCities')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { from: "Karagwe", to: "Mwanza" },
              { from: "Bukoba", to: "Mwanza" },
              { from: "Mwanza", to: "Karagwe" },
              { from: "Mwanza", to: "Bukoba" }
            ].map((route, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '1px solid #e1e5e9',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <div style={{
                  fontSize: '2rem',
                  color: '#E10600',
                  marginBottom: '0.75rem'
                }}>
                  🚌
                </div>
                <div style={{
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '0.25rem',
                  fontSize: '1rem'
                }}>
                  {route.from}
                </div>
                <div style={{
                  color: '#E10600',
                  fontSize: '1.2rem',
                  marginBottom: '0.5rem'
                }}>
                  →
                </div>
                <div style={{
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '1rem'
                }}>
                  {route.to}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '4rem 0',
        background: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}>
              {t('whatCustomersSay')}
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#666'
            }}>
              {t('joinSatisfiedTravelers')}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{
                    fontSize: '1.2rem',
                    color: '#FFD700',
                    marginRight: '0.25rem'
                  }}>
                    ⭐
                  </span>
                ))}
              </div>
              <p style={{
                color: '#666',
                marginBottom: '1rem',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}>
                "{t('excellentService')}"
              </p>
              <div style={{
                fontWeight: '600',
                color: '#333',
                fontSize: '0.9rem'
              }}>
                - Sarah M.
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{
                    fontSize: '1.2rem',
                    color: '#FFD700',
                    marginRight: '0.25rem'
                  }}>
                    ⭐
                  </span>
                ))}
              </div>
              <p style={{
                color: '#666',
                marginBottom: '1rem',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}>
                "{t('safeReliable')}"
              </p>
              <div style={{
                fontWeight: '600',
                color: '#333',
                fontSize: '0.9rem'
              }}>
                - John D.
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{
                    fontSize: '1.2rem',
                    color: '#FFD700',
                    marginRight: '0.25rem'
                  }}>
                    ⭐
                  </span>
                ))}
              </div>
              <p style={{
                color: '#666',
                marginBottom: '1rem',
                lineHeight: 1.6,
                fontSize: '1rem'
              }}>
                "{t('bestBusService')}"
              </p>
              <div style={{
                fontWeight: '600',
                color: '#333',
                fontSize: '0.9rem'
              }}>
                - Maria K.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{
        background: `linear-gradient(135deg, rgba(225,6,0,0.85), rgba(255,215,0,0.85)), url(${getImagePathAbsolute(ctaImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{
            fontSize: window.innerWidth < 768 ? '2rem' : window.innerWidth < 1200 ? '2.5rem' : '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            {t('readyToTravel')}
          </h2>
          <p style={{
            fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem',
            marginBottom: '2rem',
            opacity: 0.95,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            {t('bookYourJourney')}
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => {
                const searchSection = document.querySelector('section[style*="background: #f8f9fa"]');
                if (searchSection) {
                  searchSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                background: 'white',
                color: '#E10600',
                border: 'none',
                padding: window.innerWidth < 768 ? '0.8rem 1.5rem' : '1rem 2rem',
                borderRadius: '8px',
                fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              {t('bookNow')}
            </button>
            <a href="/contact" style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'white',
              padding: window.innerWidth < 768 ? '0.8rem 1.5rem' : '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem',
              fontWeight: '600',
              border: '2px solid white',
              transition: 'background-color 0.3s, transform 0.3s',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              {t('contactUs')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;