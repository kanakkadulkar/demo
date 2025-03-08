import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section
      className="py-20 text-center"
      style={{ backgroundColor: '#005883', fontFamily: 'Macondo, cursive' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Writing?
        </h2>
        <p className="text-xl sm:text-2xl text-white mb-8">
          Join Scriptly today and experience the power of AI-driven content creation.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button
            className="px-8 py-3 bg-white text-sky-900 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-white text-white rounded-lg text-lg font-semibold hover:bg-white hover:text-sky-900 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;