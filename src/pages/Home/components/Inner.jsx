import React from 'react';

// Card Component for Each Offering
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

// Model 5: Card Grid for Offerings
const OfferingModel5 = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Find Your Inner Peace with Our Yoga Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <OfferingCard
          title="Custom Development"
          description="Tailored solutions to meet the specific needs of your business, with high-quality development."
          icon="💻"
        />
        <OfferingCard
          title="Consulting Services"
          description="Expert guidance to help your business grow and achieve its goals with strategic planning."
          icon="📈"
        />
        <OfferingCard
          title="24/7 Support"
          description="Our team is always available to provide support whenever you need it, ensuring uninterrupted service."
          icon="🛠️"
        />
        <OfferingCard
          title="Cloud Solutions"
          description="Reliable and secure cloud services for businesses, ensuring scalability and data protection."
          icon="☁️"
        />
        <OfferingCard
          title="Data Analytics"
          description="Unlock valuable insights with our data analytics services, driving decisions with real-time data."
          icon="📊"
        />
        <OfferingCard
          title="Cybersecurity"
          description="Protect your business from cyber threats with robust security measures and proactive solutions."
          icon="🔐"
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
