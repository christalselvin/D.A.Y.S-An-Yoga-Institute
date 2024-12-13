import React from 'react';

const Offerings = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center px-4">
        {/* Heading Section */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          Our Yoga Offerings
        </h2>

        {/* Grid of Offerings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Hatha Yoga */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Hatha Yoga</h3>
            <p className="text-gray-600 mb-4">
              A foundational yoga practice focused on posture and breathing techniques to build strength, flexibility, and balance.
            </p>
          </div>

          {/* Vinyasa Flow */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Vinyasa Flow</h3>
            <p className="text-gray-600 mb-4">
              A dynamic and flowing practice that links breath with movement to build stamina, flexibility, and mental clarity.
            </p>
          </div>

          {/* Power Yoga */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Power Yoga</h3>
            <p className="text-gray-600 mb-4">
              A high-intensity yoga practice designed to build strength and endurance through vigorous movement and postures.
            </p>
          </div>

          {/* Yin Yoga */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Yin Yoga</h3>
            <p className="text-gray-600 mb-4">
              A slow-paced yoga practice where postures are held for extended periods, focusing on deep stretching and flexibility.
            </p>
          </div>

          {/* Restorative Yoga */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Restorative Yoga</h3>
            <p className="text-gray-600 mb-4">
              A gentle and relaxing yoga practice that uses props to support the body and promote deep relaxation and healing.
            </p>
          </div>

          {/* Meditation & Pranayama */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Meditation & Pranayama</h3>
            <p className="text-gray-600 mb-4">
              Guided meditation and breathing techniques to calm the mind, reduce stress, and enhance overall well-being.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offerings;
