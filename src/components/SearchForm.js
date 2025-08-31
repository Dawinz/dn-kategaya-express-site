import React, { useState, useEffect, useRef } from 'react';
import SafariYetuScrollManager from '../utils/safariYetuScrollManager';

const SearchForm = ({ setIsBookingDialogOpen, prefillData }) => {
  const [formData, setFormData] = useState({
    from: prefillData?.from || '',
    to: prefillData?.to || '',
    date: '',
    passengers: '1'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentBookingData, setCurrentBookingData] = useState({});
  const scrollManagerRef = useRef(null);

  // Cleanup scroll manager on component unmount
  useEffect(() => {
    return () => {
      if (scrollManagerRef.current) {
        scrollManagerRef.current.cleanup();
        scrollManagerRef.current = null;
      }
    };
  }, []);

  // Update form data when prefillData changes
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        from: prefillData.from || prev.from,
        to: prefillData.to || prev.to
      }));
    }
  }, [prefillData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.from) {
      setError('Please select departure city');
      return false;
    }
    if (!formData.to) {
      setError('Please select destination city');
      return false;
    }
    if (formData.from === formData.to) {
      setError('Departure and destination cities must be different');
      return false;
    }
    if (!formData.date) {
      setError('Please select travel date');
      return false;
    }
    if (!formData.passengers) {
      setError('Please select number of passengers');
      return false;
    }
    return true;
  };



    const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validate form data
    if (!validateForm()) {
      return;
    }

    // Clean up any existing scroll manager
    if (scrollManagerRef.current) {
      scrollManagerRef.current.cleanup();
    }

    try {
      // Prepare booking data
      const bookingData = {
        origin: formData.from,
        destination: formData.to,
        departureDate: formData.date,
        passengersCount: parseInt(formData.passengers),
        onClose: () => {
          console.log('SafariYetu dialog closed via callback');
          setIsBookingDialogOpen(false);
          setIsLoading(false);
          setCurrentBookingData({});
          setError(''); // Suppress any error when closing the panel
        }
      };

      // Create new scroll manager instance and set states
      scrollManagerRef.current = SafariYetuScrollManager.createInstance();
      setIsLoading(true);
      setIsBookingDialogOpen(true); // <-- show blur on app
      setCurrentBookingData(bookingData);

      // Check if SafariPlus is loaded, handle development vs production
      if (typeof window.safariplus === 'undefined') {
        if (process.env.NODE_ENV === 'development') {
          // Development mock - still use scroll manager for testing
          scrollManagerRef.current.disableScroll();
          
          setTimeout(() => {
            alert(`Mock Booking Dialog:\nFrom: ${formData.from}\nTo: ${formData.to}\nDate: ${formData.date}\nPassengers: ${formData.passengers}\n\nIn production, this would open SafariYetu booking system.`);
            
            // Simulate dialog closing
            if (scrollManagerRef.current) {
              scrollManagerRef.current.enableScroll();
              scrollManagerRef.current.cleanup();
            }
            setIsLoading(false);
            setIsBookingDialogOpen(false); // <-- remove blur on app
            setCurrentBookingData({});
          }, 1500);
          return;
        } else {
          throw new Error('SafariYetu booking system is loading. Please try again in a moment.');
        }
      }

      // Use scroll manager to open SafariYetu dialog
      await scrollManagerRef.current.openBookingDialog(bookingData);

    } catch (error) {
      console.error('SafariYetu booking error:', error);
      // Only show error if booking system failed to load, not if user closed the panel
      if (error.message && error.message.includes('loading')) {
        setError(error.message || 'Unable to load booking system. Please try again.');
      } else {
        setError(''); // Suppress other errors
      }
      
      // Clean up on error
      if (scrollManagerRef.current) {
        scrollManagerRef.current.cleanup();
        scrollManagerRef.current = null;
      }
      setIsLoading(false);
      setIsBookingDialogOpen(false); // <-- remove blur on app
      setCurrentBookingData({});
    }
  };

  // Common Tanzania routes for DN Kategaya Express with codes
  const popularRoutes = [
    { name: 'MWANZA MWZ', value: 'Mwanza' },
    { name: 'DAR ES SALAAM DAR', value: 'Dar es Salaam' },
    { name: 'KAHAMA KAH', value: 'Kahama' },
    { name: 'MOSHI MSH', value: 'Moshi' },
    { name: 'ARUSHA ARS', value: 'Arusha' }
  ];

  // Remove unused variable

  return (
    <div style={{ marginBottom: '2rem' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          {/* From */}
          <div>
            <label style={{
              display: 'block',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              FROM
            </label>
            <select
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'border-color 0.3s'
              }}
            >
              <option value="">Select departure...</option>
              {popularRoutes.map(route => (
                <option key={route.value} value={route.value}>{route.name}</option>
              ))}
            </select>
          </div>

          {/* To */}
          <div>
            <label style={{
              display: 'block',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              TO
            </label>
            <select
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'border-color 0.3s'
              }}
            >
              <option value="">Select destination...</option>
              {popularRoutes.map(route => (
                <option key={route.value} value={route.value}>{route.name}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label style={{
              display: 'block',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              TRAVEL DATE
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'border-color 0.3s'
              }}
            />
          </div>

          {/* Passengers */}
          <div>
            <label style={{
              display: 'block',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#333',
              fontSize: '0.9rem'
            }}>
              PASSENGERS
            </label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #e1e5e9',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'border-color 0.3s'
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            color: '#dc3545',
            fontSize: '0.9rem',
            textAlign: 'center',
            marginBottom: '1rem',
            padding: '0.5rem',
            backgroundColor: '#f8d7da',
            border: '1px solid #f5c6cb',
            borderRadius: '4px'
          }}>
            {error}
          </div>
        )}

        {/* Search Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: isLoading ? '#ccc' : '#E10600',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              margin: '0 auto',
              minWidth: '200px'
            }}
          >
            {isLoading ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid #ffffff',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginRight: '0.5rem'
                }}></div>
                Searching...
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                🔍 Search & Book Now
              </span>
            )}
          </button>
        </div>

        {/* Quick Tips */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#666',
          marginTop: '1rem'
        }}>
          <p>💡 <strong>Tip:</strong> Book early for the best prices and seat selection</p>
        </div>

        {/* Popular Routes Quick Links */}
        <div style={{
          marginTop: '1rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginBottom: '0.5rem'
          }}>
            Popular Routes:
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            {[
              { route: 'Dar es Salaam - Mwanza', from: 'Dar es Salaam', to: 'Mwanza' },
              { route: 'Mwanza - Kahama', from: 'Mwanza', to: 'Kahama' },
              { route: 'Mwanza - Moshi', from: 'Mwanza', to: 'Moshi' }
            ].map(({ route, from, to }) => (
              <button
                key={route}
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    from: from,
                    to: to,
                    date: new Date().toISOString().split('T')[0] // Today's date
                  }));
                  setError('');
                }}
                disabled={isLoading}
                style={{
                  fontSize: '0.8rem',
                  background: '#f8f9fa',
                  border: '1px solid #e1e5e9',
                  color: '#333',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {route}
              </button>
            ))}
          </div>
        </div>
            </form>

      {/* SafariPlus Modal Container */}
      <div id="safariplus-modal"></div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SearchForm;