import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getImagePathAbsolute, IMAGES } from '../utils/imageUtils';
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
      background: `linear-gradient(135deg, rgba(225,6,0,0.6), rgba(255,215,0,0.6)), url(${getImagePathAbsolute(ctaImage)})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <SearchForm setIsBookingDialogOpen={setIsBookingDialogOpen} />
      </div>
    </section>
  );
};

export default Hero;