import React, { useState, useRef, useEffect } from 'react';
import { FreelanceServices } from './Components/FreelanceServices';

const FreelancerHome: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showServices && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showServices]);

  const handleButtonClick = () => {
    setShowServices(true);
    setIsClicked(true);
    // Scroll to the bottom of the page
    setTimeout(() => {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }, 300); // Wait for the transition to complete before scrolling
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: "url('/Images/BGWallpaper.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  };

  const contentStyle: React.CSSProperties = {
    marginTop: '90px',
    textAlign: 'center',
    color: 'white',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? '#221733' : isClicked ? '#000000' : '#000000',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '20px', 
    marginTop: '500px',
    transition: 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease', 
    boxShadow: isHovered ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none', 
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
  };

  return (
    <div className='.below-navbar'>
      <div style={backgroundStyle}>
        <div style={contentStyle}>
          <h1 style={{ fontSize: '64px' }}>Welcome to Freelancer Services</h1>
          <p style={{ fontSize: '24px' }}>Explore our services and find the perfect gig for your project.</p>
          <button
            style={buttonStyle}
            onClick={handleButtonClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get started {'>>'}
          </button>
        </div>
      </div>
      <div ref={servicesRef}>
        {showServices && (
          <div>
            <FreelanceServices />
          </div>
        )}
      </div>
    </div>
  );
};

export default FreelancerHome;