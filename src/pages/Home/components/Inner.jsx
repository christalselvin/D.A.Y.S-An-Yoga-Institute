import React from 'react';

// Card Component for Each Yoga Offering
const OfferingCard = ({ title, description, icon }) => {
  return (
    <div className="group relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-blue-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-8 z-10">
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-indigo-600 rounded-full text-white text-3xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Model 5: Card Grid for Yoga Offerings
const OfferingModel5 = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-8 lg:px-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-12">
  Find Your Inner Peace with Our Yoga Classes
</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <OfferingCard
          title="Hatha Yoga"
          description="A foundational practice focusing on posture and breathing techniques to build strength and flexibility."
          icon="🧘‍♀️"
        />
        <OfferingCard
          title="Vinyasa Flow"
          description="A dynamic flow of movement linked with breath, helping to build stamina, flexibility, and balance."
          icon="🌊"
        />
        <OfferingCard
          title="Power Yoga"
          description="A fast-paced, high-intensity practice that builds strength and endurance while improving cardiovascular health."
          icon="💪"
        />
        <OfferingCard
          title="Yin Yoga"
          description="A slow-paced practice focusing on deep stretching and holding postures for a longer duration to enhance flexibility."
          icon="🌙"
        />
        <OfferingCard
          title="Restorative Yoga"
          description="A gentle, soothing practice designed to relax and restore your body with the use of props for support."
          icon="🌸"
        />
        <OfferingCard
          title="Meditation & Pranayama"
          description="Guided meditation and breathing techniques to calm the mind, reduce stress, and promote emotional balance."
          icon="🧘"
        />
      </div>
    </div>
  );
};

// Main Page Component
const OurOfferings = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <OfferingModel5 />
    </div>
  );
};

export default OurOfferings;
