import React, { useState, useEffect } from 'react';
import { getImagePathPublic, IMAGES } from '../utils/imageUtils';
import SearchForm from './SearchForm';

const Hero = ({ setIsBookingDialogOpen }) => {
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
    <section style={{
      backgroundImage: `url(${getImagePathPublic(ctaImage)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      width: '100%'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 0,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        minHeight: '400px'
      }}>
        <div style={{
          transform: 'scale(0.9)',
          transformOrigin: 'center',
          maxWidth: '500px'
        }}>
          <SearchForm setIsBookingDialogOpen={setIsBookingDialogOpen} />
        </div>
      </div>
    </section>
  );
};

export default Hero;