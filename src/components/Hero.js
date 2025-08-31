import React from 'react';

const Hero = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #E10600, #FFD700, #0057FF)',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Travel Across Tanzania
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '0.5rem',
          opacity: 0.9
        }}>
          Your trusted partner for safe and comfortable bus transportation across Tanzania
        </p>
        <p style={{
          fontSize: '1rem',
          opacity: 0.8
        }}>
          Experience the beauty of Tanzania with reliable, punctual, and comfortable bus services
        </p>
      </div>
    </section>
  );
};

export default Hero;