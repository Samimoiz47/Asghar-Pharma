import React, { useState, useEffect } from 'react';
import Spotlight from './Spotlight';
import { CardHoverEffect } from './PulseCard';
import BorderBeam from './BorderBeam';
import GooeyNav from './GooeyNav';
import MagicButton from './MagicButton';
import DarkVeil from './DarkVeil';
import Loader from './Loader';

// update with your own items
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#" },
];

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}>
        <Loader />
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100vw', minHeight: '100vh' }}>
      <DarkVeil />
      <Spotlight />
      <div style={{
        position: 'fixed',
        top: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        height: 'auto',
        zIndex: 20,
        paddingTop: '0.5rem'
      }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={1}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          maxWidth: '1400px',
          width: '100%'
        }}>
          <div style={{ position: 'relative' }}>
            <CardHoverEffect
              icon={<span>🏥</span>}
              title="Our Mission"
              description="Providing compassionate and high-quality healthcare to our community with dedication and expertise."
              variant="emerald"
            />
            <BorderBeam size={50} duration={6} colorFrom="#10b981" colorTo="#059669" />
          </div>
          <div style={{ position: 'relative' }}>
            <CardHoverEffect
              icon={<span>👨‍⚕️</span>}
              title="Expert Team"
              description="Our experienced doctors and staff are committed to your health and well-being."
              variant="blue"
            />
            <BorderBeam size={50} duration={6} colorFrom="#3b82f6" colorTo="#1d4ed8" />
          </div>
          <div style={{ position: 'relative' }}>
            <CardHoverEffect
              icon={<span>💊</span>}
              title="Modern Facilities"
              description="Equipped with the latest medical technology to ensure the best care possible."
              variant="purple"
            />
            <BorderBeam size={50} duration={6} colorFrom="#8b5cf6" colorTo="#7c3aed" />
          </div>
          <div style={{ position: 'relative' }}>
            <CardHoverEffect
              icon={<span>❤️</span>}
              title="Patient Care"
              description="We prioritize patient comfort and provide personalized care for every individual."
              variant="rose"
            />
            <BorderBeam size={50} duration={6} colorFrom="#f43f5e" colorTo="#e11d48" />
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30
      }}>
        <MagicButton href="/">
          Back to Home
        </MagicButton>
      </div>
    </div>
  );
};

export default AboutPage;
