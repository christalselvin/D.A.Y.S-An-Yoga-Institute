import React, { useState, useEffect } from 'react';
import anime1 from "../components/assets/Anime/anime1.png"
import anime2 from "../components/assets/Anime/anime2.png"
import anime3 from "../components/assets/Anime/anime3.png"
import anime4 from "../components/assets/Anime/anime4.png"
import anime5 from "../components/assets/Anime/anime5.png"
import anime6 from "../components/assets/Anime/anime6.png"
import anime7 from "../components/assets/Anime/anime7.png"
import anime8 from "../components/assets/Anime/anime8.png"
const testimonials = [
  {
    "id": 1,
    "name": "Aarti",
    "text": "Yoga at D.A.Y.S Institute has truly transformed my life. It brings balance, enhances my focus, and energizes me every single day. The physical benefits are evident in my improved flexibility, but the mental clarity and reduced stress have been the most remarkable changes.",
    "img": anime1
  },
  {
    "id": 2,
    "name": "Rajesh Kumar",
    "text": "Joining D.A.Y.S Yoga has been life-changing. Every session improves my flexibility, reduces my stress levels, and builds my physical strength. The instructors are highly knowledgeable, and the calm, peaceful atmosphere makes each class an enriching experience.",
    "img": anime2
  },
  {
    "id": 3,
    "name": "Simran Kaur",
    "text": "I’ve been practicing yoga for years, but joining D.A.Y.S has deepened my connection to both my body and mind. I feel more mindful, less anxious, and the peace and tranquility I experience after each session are truly profound. It’s an essential part of my routine now.",
    "img": anime3
  },
  {
    "id": 4,
    "name": "Anjali Desai",
    "text": "The yoga classes at D.A.Y.S have been a game changer. I feel physically stronger, and my mental clarity has improved. The holistic approach to yoga has helped me find balance in my life, and each session leaves me feeling rejuvenated, both inside and out.",
    "img": anime4
  },
  {
    "id": 5,
    "name": "Vikram Singh",
    "text": "Yoga at D.A.Y.S has truly transformed my well-being. It has not only improved my physical strength and flexibility but also equipped me with tools to stay calm and centered during stressful times. I feel more balanced, grounded, and in tune with my body and mind.",
    "img": anime5
  },
  {
    "id": 6,
    "name": "Lalitha Sharma",
    "text": "Joining D.A.Y.S has been one of the best decisions I’ve made. The classes have helped me improve my flexibility, manage stress, and maintain focus throughout the day. It’s not just physical exercise, but a holistic experience that nurtures both my body and mind.",
    "img": anime6
  },
  {
    "id": 7,
    "name": "Arjun Patel",
    "text": "Yoga at D.A.Y.S has been crucial in my recovery from an old injury. The instructors are attentive and modify poses to suit my needs. The classes not only strengthen my body but also enhance my mental well-being, allowing me to feel more centered and at peace with myself.",
    "img": anime7
  },
  {
    "id": 8,
    "name": "Neha Gupta",
    "text": "Yoga at D.A.Y.S has transformed my outlook on wellness. The combination of physical practice and mindfulness has brought me a sense of peace and presence in my daily life. The calming atmosphere of the studio makes every session feel like a retreat for my body and soul.",
    "img": anime8
  }
  
];


const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Interval is 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-24 py-1  -mt-4 w-auto">
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
