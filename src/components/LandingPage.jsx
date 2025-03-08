import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import About from './About';
import Navbar from './Navbar';
import Services from './Services';
import ImageComponent from './ImageComponent';
import CallToAction from './CallToAction'; // Import the CTA component

const LandingPage = () => {
  const backgroundStyle = {
    backgroundImage: `url('scripty-image.jpg')`, // Path to the image in the public folder
    backgroundSize: 'cover', // Ensure the image covers the entire background
    backgroundPosition: 'center', // Center the image
    minHeight: '100vh', // Ensure the background covers the full viewport height
    width: '100%', // Ensure the background covers the full width
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navbar />
      <main style={backgroundStyle}>
        {/* Home Section */}
        <motion.section
          className="hm-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          style={{ marginTop: 0 }} // Ensure no margin at the top
        >
          <ImageComponent />
        </motion.section>

        {/* About Section */}
        <motion.section
          className="about-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <About />
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="services-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <Services />
        </motion.section>

        {/* Call to Action Section */}
        <CallToAction />
      </main>
    </>
  );
};

export default LandingPage;