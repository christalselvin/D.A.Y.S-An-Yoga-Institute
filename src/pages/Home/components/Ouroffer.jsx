import React from 'react';

const Offerings = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Offerings</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Group Classes */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Group Classes</h3>
            <p className="text-gray-600 mb-4">
              Experience the energy and motivation of practicing yoga in a group setting. Our group classes are designed to challenge and inspire you, fostering a sense of camaraderie and support.
            </p>
          </div>

          {/* Private Sessions */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Private Sessions</h3>
            <p className="text-gray-600 mb-4">
              For those seeking a more personalized experience, we offer private yoga sessions tailored to your specific needs and goals. Work one-on-one with an instructor to deepen your practice and achieve your personal best.
            </p>
          </div>

          {/* Workshops & Retreats */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Workshops & Retreats</h3>
            <p className="text-gray-600 mb-4">
              Dive deeper into your practice with our special workshops and retreats. Explore advanced techniques, learn from guest instructors, and immerse yourself in the tranquil surroundings of our retreat locations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
