import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getImagePathAbsolute, IMAGES } from '../utils/imageUtils';

const Hero = () => {
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
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          fontSize: window.innerWidth < 768 ? '2.5rem' : window.innerWidth < 1200 ? '3rem' : '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          {t('travelAcrossTanzania')}
        </h1>
        <p style={{
          fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem',
          marginBottom: '0.5rem',
          opacity: 0.95,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          {t('trustedPartner')}
        </p>
        <p style={{
          fontSize: window.innerWidth < 768 ? '0.9rem' : '1rem',
          opacity: 0.9,
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          {t('experienceBeauty')}
        </p>
      </div>
    </section>
  );
};

export default Hero;