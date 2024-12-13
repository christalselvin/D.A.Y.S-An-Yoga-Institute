import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Aarti Mehta',
    text: 'Yoga at D.A.Y.S Institute has brought inner peace and balance to my life. I feel more focused, connected to myself, and energized every day. It’s helped me manage stress, and I’ve noticed improvement in my flexibility and mental clarity.',
    img: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    text: 'Joining D.A.Y.S Yoga has been transformative. The sessions helped me improve flexibility, reduce stress, and build strength. The instructors are deeply knowledgeable, and the calm atmosphere of the studio makes every class a deeply enriching experience.',
    img: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    id: 3,
    name: 'Simran Kaur',
    text: 'I’ve practiced yoga for years, but the teachings at D.A.Y.S have deepened my connection with my mind and body. I’ve become more mindful, less anxious, and have experienced a deeper sense of peace and tranquility in every session.',
    img: 'https://via.placeholder.com/150', // Placeholder image URL
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Interval is 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-24 py-1  -mt-4">
      {/* Testimonial Card */}
      <div className="bg-blue-100 shadow-2xl rounded-2xl p-6 sm:p-8 md:p-12 w-full max-w-lg">
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            src={testimonials[currentIndex].img}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          />
          <div>
            <p className="text-lg sm:text-xl md:text-2xl text-red-800">
              {testimonials[currentIndex].text}
            </p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              - {testimonials[currentIndex].name}
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {testimonials.map((testimonial, index) => (
          <span
            key={testimonial.id}
            className={`mx-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-red-800' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
