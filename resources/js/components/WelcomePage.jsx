import React, { useState, useEffect } from 'react';
import DarkVeil from './DarkVeil';
import TextType from './TextType';
import GooeyNav from './GooeyNav';
import ClickSpark from './ClickSpark';
import MagicButton from './MagicButton';
import Loader from './Loader';


//  Buttons nav / update with your own items
const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Stock", href: "/stock"},
];

const WelcomePage = () => {
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
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <DarkVeil />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10
        }}>
          <TextType
            text={["Hello Dr. Asghar ! , Hope you are fine .", "Let,s cure the Patients"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          height: 'auto',
          zIndex: 20
        }}>
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30
        }}>
          <MagicButton href="/medicine">
            Go to Medicine Page
          </MagicButton>
        </div>

      </div>
    </ClickSpark>
  );
};

export default WelcomePage;
