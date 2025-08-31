import React from 'react';

const Routes = () => {
  const routes = [
    {
      from: 'Dar es Salaam',
      to: 'Mwanza',
      duration: '8-10 hours',
      frequency: 'Daily',
      price: 'From TZS 35,000'
    },
    {
      from: 'Mwanza',
      to: 'Dar es Salaam',
      duration: '8-10 hours',
      frequency: 'Daily',
      price: 'From TZS 35,000'
    },
    {
      from: 'Dar es Salaam',
      to: 'Arusha',
      duration: '6-7 hours',
      frequency: 'Daily',
      price: 'From TZS 25,000'
    },
    {
      from: 'Arusha',
      to: 'Dar es Salaam',
      duration: '6-7 hours',
      frequency: 'Daily',
      price: 'From TZS 25,000'
    },
    {
      from: 'Mwanza',
      to: 'Kahama',
      duration: '2-3 hours',
      frequency: 'Daily',
      price: 'From TZS 15,000'
    },
    {
      from: 'Kahama',
      to: 'Mwanza',
      duration: '2-3 hours',
      frequency: 'Daily',
      price: 'From TZS 15,000'
    },
    {
      from: 'Mwanza',
      to: 'Moshi',
      duration: '4-5 hours',
      frequency: 'Daily',
      price: 'From TZS 20,000'
    },
    {
      from: 'Moshi',
      to: 'Mwanza',
      duration: '4-5 hours',
      frequency: 'Daily',
      price: 'From TZS 20,000'
    }
  ];

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
            Our Routes
          </h1>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            Explore our network of routes across Tanzania
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
                    Duration
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
                    Frequency
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#333'
                  }}>
                    {route.frequency}
                  </p>
                </div>

                <div>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#666',
                    marginBottom: '0.25rem'
                  }}>
                    Price
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#E10600'
                  }}>
                    {route.price}
                  </p>
                </div>
              </div>

              <button style={{
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
              }}>
                Book This Route
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
            Route Network
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: '2rem',
            fontSize: '1.1rem'
          }}>
            Our extensive network covers major cities and towns across Tanzania
          </p>
          
          <div style={{
            background: '#f8f9fa',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '1rem'
            }}>
              🗺️
            </div>
            <p style={{
              color: '#666',
              fontSize: '1.1rem'
            }}>
              Interactive route map coming soon
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          background: 'linear-gradient(135deg, #E10600, #FFD700)',
          color: 'white',
          padding: '3rem 2rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Can't Find Your Route?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Contact us for custom routes and special arrangements
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
              Contact Us
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
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes;