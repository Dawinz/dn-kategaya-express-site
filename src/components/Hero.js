import React, { useState, useEffect } from 'react';
import { getImagePathPublic, IMAGES } from '../utils/imageUtils';
import SearchForm from './SearchForm';

const Hero = ({ setIsBookingDialogOpen, prefillData }) => {
  const [ctaImage, setCtaImage] = useState(IMAGES.CTA_DESKTOP);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Responsive image selection and screen size detection
  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1200);
      
      if (width < 768) {
        setCtaImage(IMAGES.CTA_MOBILE);
      } else if (width < 1200) {
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
    <section style={{
      backgroundImage: `url(${getImagePathPublic(ctaImage)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      color: 'white',
      padding: isMobile ? '0' : '4rem 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? '100vh' : '100vh',
      width: '100%'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 0,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0' : '0 2rem',
        display: 'flex',
        justifyContent: isMobile ? 'center' : 'flex-end',
        alignItems: isMobile ? 'flex-start' : 'center',
        minHeight: isMobile ? '100vh' : '400px',
        paddingTop: isMobile ? '1rem' : '0'
      }}>
        <div style={{
          transform: isMobile ? 'scale(1)' : isTablet ? 'scale(0.8)' : 'scale(0.9)',
          transformOrigin: 'center',
          maxWidth: isMobile ? '100%' : '500px',
          width: isMobile ? '100%' : 'auto',
          padding: isMobile ? '2rem 1rem' : '0'
        }}>
          <SearchForm setIsBookingDialogOpen={setIsBookingDialogOpen} prefillData={prefillData} />
        </div>
      </div>
    </section>
  );
};

export default Hero;