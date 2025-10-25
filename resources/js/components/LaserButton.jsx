import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const LaserButton = ({ children, onClick, href, className = '', ...props }) => {
  const buttonRef = useRef(null);
  const laserRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const laser = laserRef.current;
    const glow = glowRef.current;

    if (!button || !laser || !glow) return;

    const handleMouseEnter = () => {
      gsap.to(laser, {
        scaleX: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(glow, {
        opacity: 1,
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(laser, {
        scaleX: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
      gsap.to(glow, {
        opacity: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`laser-button ${className}`}
      style={{
        position: 'relative',
        padding: '15px 30px',
        background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)',
        border: 'none',
        borderRadius: '50px',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        overflow: 'hidden',
        boxShadow: '0 0 20px rgba(255, 0, 110, 0.5)',
        transition: 'all 0.3s ease'
      }}
      {...props}
    >
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)',
          borderRadius: '50px',
          opacity: 0,
          zIndex: 1
        }}
      />
      <div
        ref={laserRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
          transform: 'translate(-50%, -50%) scaleX(0)',
          transformOrigin: 'center',
          zIndex: 2,
          boxShadow: '0 0 10px #ffffff'
        }}
      />
      <span style={{ position: 'relative', zIndex: 3 }}>
        {children}
      </span>
    </button>
  );
};

export default LaserButton;
