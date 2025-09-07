import React, { useState, useEffect, useRef } from 'react';
import SafariYetuScrollManager from '../utils/safariYetuScrollManager';
import { useLanguage } from '../context/LanguageContext';

const SearchForm = ({ setIsBookingDialogOpen, prefillData }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    from: prefillData?.from || '',
    to: prefillData?.to || '',
    date: '',
    passengers: '1',
    operatorId: '2898390482'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const scrollManagerRef = useRef(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      setError(t('pleaseSelectDeparture'));
      return false;
    }
    if (!formData.to) {
      setError(t('pleaseSelectDestination'));
      return false;
    }
    if (formData.from === formData.to) {
      setError(t('citiesMustBeDifferent'));
      return false;
    }
    if (!formData.date) {
      setError(t('pleaseSelectDate'));
      return false;
    }
    if (!formData.passengers) {
      setError(t('pleaseSelectPassengers'));
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
        operatorId: formData.operatorId,
        onClose: () => {
          console.log('SafariYetu dialog closed via callback');
          setIsBookingDialogOpen(false);
          setIsLoading(false);
          setError(''); // Suppress any error when closing the panel
        }
      };

      // Create new scroll manager instance and set states
      scrollManagerRef.current = SafariYetuScrollManager.createInstance();
      setIsLoading(true);
      setIsBookingDialogOpen(true); // <-- show blur on app

      // Check if SafariPlus is loaded, handle development vs production
      if (typeof window.safariplus === 'undefined') {
        if (process.env.NODE_ENV === 'development') {
          // Development mock - still use scroll manager for testing
          scrollManagerRef.current.disableScroll();
          
          setTimeout(() => {
            alert(`Mock Booking Dialog:\nFrom: ${formData.from}\nTo: ${formData.to}\nDate: ${formData.date}\nPassengers: ${formData.passengers}\nOperator ID: ${formData.operatorId}\n\nIn production, this would open SafariYetu booking system.`);
            
            // Simulate dialog closing
            if (scrollManagerRef.current) {
              scrollManagerRef.current.enableScroll();
              scrollManagerRef.current.cleanup();
            }
            setIsLoading(false);
            setIsBookingDialogOpen(false); // <-- remove blur on app
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
    }
  };

  // Common routes for DNKategaya Express
  const popularRoutes = [
    { name: 'MWANZA MWZ', value: 'Mwanza' },
    { name: 'BUKOBA BKB', value: 'Bukoba' },
    { name: 'KARAGWE KRG', value: 'Karagwe' }
  ];

  // Remove unused variable

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(225,6,0,0.95), rgba(255,215,0,0.95), rgba(0,87,255,0.95))',
        padding: isMobile ? '2.5rem' : '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        maxWidth: isMobile ? '100%' : '800px',
        margin: '0 auto'
      }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: isMobile ? '1.25rem' : '0.75rem',
          marginBottom: '1rem'
        }}>
          {/* From */}
          <div>
            <label style={{
              display: 'block',
              fontWeight: 600,
              marginBottom: '0.4rem',
              color: 'white',
              fontSize: isMobile ? '1.2rem' : '0.85rem'
            }}>
              {t('from')}
            </label>
            <select
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: isMobile ? '1rem' : '0.6rem',
                border: '2px solid transparent',
                borderRadius: '8px',
                fontSize: isMobile ? '1.2rem' : '0.9rem',
                transition: 'box-shadow 0.3s, transform 0.2s',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FFD700, #E10600) border-box',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
              }}
            >
              <option value="">{t('selectDeparture')}</option>
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
              marginBottom: '0.4rem',
              color: 'white',
              fontSize: isMobile ? '1.2rem' : '0.85rem'
            }}>
              {t('to')}
            </label>
            <select
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: isMobile ? '1rem' : '0.75rem',
                border: '2px solid transparent',
                borderRadius: '10px',
                fontSize: isMobile ? '1.2rem' : '1rem',
                transition: 'box-shadow 0.3s, transform 0.2s',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #0057FF, #FFD700) border-box',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              <option value="">{t('selectDestination')}</option>
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
              marginBottom: '0.4rem',
              color: 'white',
              fontSize: isMobile ? '1.2rem' : '0.85rem'
            }}>
              {t('date')}
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              style={{
                width: '100%',
                padding: isMobile ? '1rem' : '0.75rem',
                border: '2px solid transparent',
                borderRadius: '10px',
                fontSize: isMobile ? '1.2rem' : '1rem',
                transition: 'box-shadow 0.3s, transform 0.2s',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #E10600, #FFD700) border-box',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            />
          </div>

          {/* Passengers */}
          <div>
            <label style={{
              display: 'block',
              fontWeight: 600,
              marginBottom: '0.4rem',
              color: 'white',
              fontSize: isMobile ? '1.2rem' : '0.85rem'
            }}>
              {t('passengers')}
            </label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: isMobile ? '1rem' : '0.75rem',
                border: '2px solid transparent',
                borderRadius: '10px',
                fontSize: isMobile ? '1.2rem' : '1rem',
                transition: 'box-shadow 0.3s, transform 0.2s',
                background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #FFD700, #0057FF) border-box',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? t('passenger') : t('passengers')}</option>
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
              background: isLoading ? '#ccc' : 'linear-gradient(135deg, #FFD700, #E10600, #0057FF)',
              color: 'white',
              border: 'none',
              padding: isMobile ? '1.2rem 2.5rem' : '0.8rem 1.8rem',
              borderRadius: '999px',
              fontSize: isMobile ? '1.3rem' : '1rem',
              fontWeight: 700,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s, box-shadow 0.3s',
              boxShadow: isLoading ? 'none' : '0 8px 18px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              margin: '0 auto',
              minWidth: '180px'
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
                {t('searching')}
              </span>
            ) : (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {t('searchBookNow')}
              </span>
            )}
          </button>
        </div>

        {/* Quick Tips */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'white',
          marginTop: '0.8rem'
        }}>
          <p>{t('tip')}</p>
        </div>

        {/* Popular Routes Quick Links */}
        <div style={{
          marginTop: '0.8rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: '#666',
            marginBottom: '0.4rem'
          }}>
            {t('popularRoutesLabel')}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            {[
              { route: 'Karagwe - Mwanza', from: 'Karagwe', to: 'Mwanza' },
              { route: 'Bukoba - Mwanza', from: 'Bukoba', to: 'Mwanza' },
              { route: 'Mwanza - Karagwe', from: 'Mwanza', to: 'Karagwe' },
              { route: 'Mwanza - Bukoba', from: 'Mwanza', to: 'Bukoba' }
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
                  fontSize: '0.75rem',
                  background: '#f8f9fa',
                  border: '1px solid #e1e5e9',
                  color: '#333',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '16px',
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
      </div>
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