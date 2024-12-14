import React from 'react';
import { motion } from 'framer-motion';

const Offerings = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center px-4">
        {/* Heading Section */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Yoga Offerings
        </motion.h2>

        {/* Grid of Offerings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Hatha Yoga */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Hatha Yoga</h3>
            <p className="text-gray-600 mb-4">
              A foundational yoga practice focused on posture and breathing techniques to build strength, flexibility, and balance.
            </p>
          </motion.div>

          {/* Vinyasa Flow */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Vinyasa Flow</h3>
            <p className="text-gray-600 mb-4">
              A dynamic and flowing practice that links breath with movement to build stamina, flexibility, and mental clarity.
            </p>
          </motion.div>

          {/* Power Yoga */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Power Yoga</h3>
            <p className="text-gray-600 mb-4">
              A high-intensity yoga practice designed to build strength and endurance through vigorous movement and postures.
            </p>
          </motion.div>

          {/* Yin Yoga */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Yin Yoga</h3>
            <p className="text-gray-600 mb-4">
              A slow-paced yoga practice where postures are held for extended periods, focusing on deep stretching and flexibility.
            </p>
          </motion.div>

          {/* Restorative Yoga */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Restorative Yoga</h3>
            <p className="text-gray-600 mb-4">
              A gentle and relaxing yoga practice that uses props to support the body and promote deep relaxation and healing.
            </p>
          </motion.div>

          {/* Meditation & Pranayama */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Meditation & Pranayama</h3>
            <p className="text-gray-600 mb-4">
              Guided meditation and breathing techniques to calm the mind, reduce stress, and enhance overall well-being.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
