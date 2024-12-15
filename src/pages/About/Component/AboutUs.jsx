import React, { useState, useEffect, } from 'react';
import { motion } from 'framer-motion';
import Contact1 from "./assets/Contact/Contact1.png";
import Contact2 from "./assets/Contact/Contact2.png";
import Contact3 from "./assets/Contact/Contact3.png";
import Contact4 from "./assets/Contact/Contact4.png";
import Contact5 from "./assets/Contact/Contact5.png";
import Contact6 from "./assets/Contact/Contact6.png";
import Contact7 from "./assets/Contact/Contact7.png"; 
import Contact8 from "./assets/Contact/Contact8.png"; 

const AboutUs = () => {
  // Scroll position state
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrollingUp(true); // User is scrolling up
      } else {
        setScrollingUp(false); // User is scrolling down
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-full mx-auto px-6 py-12 overflow-x-hidden">
      {/* Title Section */}
      <motion.h1 
        className="text-4xl font-bold text-center text-gray-900 mb-10"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About Divy Ashish Yoga Sansthan
      </motion.h1>

      {/* Story Section */}
      <motion.section 
        className="mb-12 grid lg:grid-cols-2 gap-10"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="lg:order-2">
          <motion.img 
            src={Contact1} 
            alt="Yoga Center" 
            className="w-full rounded-lg max-w-full"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="lg:order-1">
          <motion.h2 
            className="text-3xl font-semibold text-gray-800 mb-4"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Divy Ashish Yoga Sansthan, a symbol of health, wellness, and holistic living, was founded by <strong>Ashish</strong> on <strong>February 29, 2016</strong>. Established with the mission of promoting the transformative power of yoga, this institution has grown steadily over the years, helping countless individuals improve their physical, mental, and emotional well-being.
          </motion.p>
          <motion.p 
            className="text-lg text-gray-600 mt-4"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Starting as a single yoga center, the Sansthan now proudly operates with <strong>two branches</strong>, providing a serene and nurturing environment where people of all ages can embrace the practice of yoga. The growth of the Sansthan is a testament to its founder’s vision and the unwavering dedication of its team.
          </motion.p>
          <motion.img 
            src={Contact3}
            alt="Yoga Sessions"
            className="w-full rounded-lg shadow-lg max-w-full"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="mb-12 grid lg:grid-cols-2 gap-10"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="lg:order-1">
          <motion.h2 
            className="text-3xl font-semibold text-gray-800 mb-4"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Divy Ashish Yoga Sansthan, we believe in promoting holistic health through the integration of mind, body, and spirit. Our core values include mindfulness, discipline, compassion, and a commitment to personal growth. These values guide every decision we make and drive us to create a supportive and inspiring environment for all our students.
          </motion.p>
        </div>
        <div className="lg:order-2">
          <motion.img 
            src={Contact2} 
            alt="Yoga Values" 
            className="w-full rounded-lg shadow-lg max-w-full"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section 
        className="mb-12 grid lg:grid-cols-2 gap-10"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="lg:order-1">
          <motion.h2 
            className="text-3xl font-semibold text-gray-800 mb-4"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Divy Ashish Yoga Sansthan offers a variety of yoga sessions designed to meet diverse needs, whether it’s for weight management, stress relief, improving flexibility, or overall well-being. Our experienced instructors teach different forms of yoga, including Hatha, Vinyasa, and Pranayama, to help students on their journey toward personal transformation.
          </motion.p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="mb-12 text-center"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-semibold text-gray-800 mb-6"
          initial={{ y: -50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Meet the Team
        </motion.h2>
        <div className="flex justify-center space-x-6">
          <motion.img 
            src={Contact4} 
            alt="Khushi" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.img 
            src={Contact5} 
            alt="Palak" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.img 
            src={Contact6} 
            alt="Anjali" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.img 
            src={Contact7} 
            alt="Swati" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.img 
            src={Contact8} 
            alt="Raj" 
            className="w-32 h-32 rounded-full object-cover shadow-lg"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="mb-12 text-center"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ x: -100, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-6"
          initial={{ x: -100, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          With our team of passionate and experienced instructors, personalized yoga programs, and a welcoming atmosphere, Divy Ashish Yoga Sansthan provides the best environment to support your health and wellness journey.
        </motion.p>
        <button />
      </motion.section>
    </div>
  );
};

export default AboutUs;
