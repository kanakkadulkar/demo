import React from 'react';
import About from './About';
import Navbar from './Navbar';
import Services from './Services';
import ImageComponent from './ImageComponent';

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url('scripty-image.jpg')`, // Path to the image in the public folder
    backgroundSize: 'cover', // Ensure the image covers the entire background
    backgroundPosition: 'center', // Center the image
    minHeight: '100vh', // Ensure the background covers the full viewport height
    width: '100%', // Ensure the background covers the full width
  };

  return (
    <>
      <Navbar />
      <main style={backgroundStyle}>
        <section className="hm-section">
          <ImageComponent />
        </section>

        <section className="about-section">
          <About />
        </section>

        <section className="services-section">
          <Services />
        </section>
      </main>
    </>
  );
};

export default LandingPage;