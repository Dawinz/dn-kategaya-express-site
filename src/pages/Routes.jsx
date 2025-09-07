import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Routes = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleBookRoute = (from, to) => {
    // Navigate to homepage with pre-filled route data
    navigate('/', { 
      state: { 
        prefillData: { 
          from: from, 
          to: to 
        } 
      } 
    });
  };
  
  // Debug image path
  const imagePath = `${process.env.PUBLIC_URL || ''}/images/bus-fleet-2.jpeg`;
  console.log('Image path:', imagePath);
  const routes = [
    { from: 'Karagwe', to: 'Mwanza', duration: '2-3 hours', frequency: t('daily') },
    { from: 'Bukoba', to: 'Mwanza', duration: '3-4 hours', frequency: t('daily') },
    { from: 'Mwanza', to: 'Karagwe', duration: '2-3 hours', frequency: t('daily') },
    { from: 'Mwanza', to: 'Bukoba', duration: '3-4 hours', frequency: t('daily') }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 25%, #f5f5f5 50%, #e8f5e8 75%, #fff8e1 100%)' }}>
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
            {t('ourRoutes')}
          </h1>
          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9
          }}>
            {t('exploreNetwork')}
          </p>
        </div>
      </div>

      {/* Routes Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem'
      }}>
        {/* Routes Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {routes.map((route, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.5rem'
                  }}>🚌</span>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {route.from}
                  </span>
                </div>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#E10600'
                }}>→</span>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {route.to}
                  </span>
                  <span style={{
                    fontSize: '1.5rem'
                  }}>🏁</span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '1rem',
                marginTop: '1.5rem'
              }}>
                <div>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#666',
                    marginBottom: '0.25rem'
                  }}>
                    {t('duration')}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {route.duration}
                  </p>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#666',
                    marginBottom: '0.25rem'
                  }}>
                    {t('frequency')}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {route.frequency}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => handleBookRoute(route.from, route.to)}
                style={{
                  width: '100%',
                  background: '#E10600',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '1rem',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#c40505';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#E10600';
                }}
              >
                {t('bookThisRoute')}
              </button>
            </div>
          ))}
        </div>

        {/* Route Map Section */}
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
            color: '#333'
          }}>
            {t('routeNetwork')}
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            {t('extensiveNetwork')}
          </p>
          
          <div style={{
            background: '#f8f9fa',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img
                src={`${window.location.origin}/images/routes-image.jpeg`}
                alt="Route Network Map"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '300px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: `linear-gradient(135deg, rgba(225,6,0,0.85), rgba(255,215,0,0.85)), url('${imagePath}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: '12px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            {t('cantFindRoute')}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            {t('contactCustomRoutes')}
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/contact" style={{
              display: 'inline-block',
              background: 'white',
              color: '#E10600',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              transition: 'transform 0.3s'
            }}>
              {t('contactUs')}
            </a>
            <a href="/" style={{
              display: 'inline-block',
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem',
              border: '2px solid white',
              transition: 'background-color 0.3s'
            }}>
              {t('bookNow')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;