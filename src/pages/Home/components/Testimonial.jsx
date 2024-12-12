import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    text: 'This service is amazing. Highly recommended!',
    img: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    text: 'A game changer for my business. Excellent support.',
    img: 'https://via.placeholder.com/150', // Placeholder image URL
  },
  {
    id: 3,
    name: 'Emily Johnson',
    text: 'I love the simplicity and effectiveness of this product.',
    img: 'https://via.placeholder.com/150', // Placeholder image URL
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="bg-blue-100 shadow-2xl rounded-2xl p-40">
        <div className="flex items-center">
          <img
            src={testimonials[currentIndex].img}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-2xl text-red-800">{testimonials[currentIndex].text}</p>
            <p className="mt-2 text-gray-600">- {testimonials[currentIndex].name}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[-2rem]">
        {testimonials.map((testimonial, index) => (
          <span
            key={testimonial.id}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-red-800' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
