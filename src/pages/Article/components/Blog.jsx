import React from "react";
import { motion } from "framer-motion";
import { FaRegStar } from "react-icons/fa"; // Example icon
import { Link } from "react-router-dom";
import BlogIMage1 from "../components/assets/blog1.png";
import BlogIMage2 from "../components/assets/blog2.png";
import BlogIMage3 from "../components/assets/blog3.png";
import BlogIMage4 from "../components/assets/blog4.png";
import BlogIMage5 from "../components/assets/blog5.png";
import BlogIMage6 from "../components/assets/blog6.png";
import BlogIMage7 from "../components/assets/blog7.png";
import BlogIMage8 from "../components/assets/blog8.png";

export default function Blog() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = `${currentYear}-12-14`;

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 py-12">

        {/* Blog Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl font-extrabold text-gray-800 mb-6 leading-tight"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Yoga for Wellness: Transform Your Life
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Discover how yoga can improve your physical, mental, and emotional well-being, with practical tips and benefits.
          </motion.p>
          <motion.p
            className="text-sm sm:text-lg text-gray-500 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Last updated: {lastUpdated}
          </motion.p>
        </motion.div>

        {/* Main Blog Content */}
        <motion.div
          className="space-y-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Section 1 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-blue-500 fill-blue-500" />
              The Power of Yoga for Flexibility
            </motion.h2>
            <img
              src={BlogIMage1}
              alt="Yoga Flexibility - Stretching and Flexibility"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Yoga offers a holistic approach to flexibility, using postures that gently stretch and lengthen muscles. This practice gradually improves your flexibility and helps to alleviate stiffness in the body, especially in the hips, back, and shoulders. Yoga for flexibility can help you feel more agile and comfortable in your body, enhancing your range of motion and reducing discomfort.
            </p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-green-500 fill-green-500" />
              Building Strength through Yoga
            </motion.h2>
            <img
              src={BlogIMage2}
              alt="Yoga Strength - Building Core Strength"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Many yoga poses require you to support your own body weight, which builds strength and muscle tone. Whether it’s holding a plank or performing a warrior pose, yoga provides a full-body workout that increases strength and endurance. Yoga for strength allows you to enhance your overall fitness while increasing body awareness.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-red-500 fill-red-500" />
              Yoga for Stress Relief and Relaxation
            </motion.h2>
            <img
              src={BlogIMage3}
              alt="Yoga Relaxation - Stress Relief"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Yoga incorporates breathing exercises and meditation that activate the parasympathetic nervous system, helping to reduce stress and induce a state of calm. Practicing regularly can lower your levels of anxiety and tension, promoting mental clarity and relaxation. Yoga for stress relief is the ideal practice for anyone feeling overwhelmed in today's fast-paced world.
            </p>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-yellow-500 fill-yellow-500" />
              Boosting Mental Clarity and Focus
            </motion.h2>
            <img
              src={BlogIMage4}
              alt="Yoga Focus - Mental Clarity"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Through meditation, mindfulness, and focused breathing, yoga trains the mind to stay present. This enhanced mental clarity improves your ability to focus and helps you manage distractions, both on and off the mat. Yoga for focus and concentration enhances your ability to remain calm and productive.
            </p>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-purple-500 fill-purple-500" />
              The Healing Power of Yoga
            </motion.h2>
            <img
              src={BlogIMage5}
              alt="Yoga Healing - Natural Healing"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Yoga has long been recognized for its healing benefits. It improves circulation, reduces inflammation, and promotes better sleep patterns. The practice also helps with mental health conditions such as depression and anxiety, offering a natural, non-invasive way to heal the body and mind. Yoga for healing allows your body to regenerate and recover faster.
            </p>
          </motion.div>

          {/* Section 6 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-teal-500 fill-teal-500" />
              Enhancing Balance and Coordination
            </motion.h2>
            <img
              src={BlogIMage6}
              alt="Yoga Balance - Coordination Improvement"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Through various standing poses and balance exercises, yoga helps to improve coordination, stability, and balance. This is especially beneficial for older adults, as it reduces the risk of falls and enhances functional movement. Yoga for balance supports overall mobility and independence.
            </p>
          </motion.div>

          {/* Section 7 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-pink-500 fill-pink-500" />
              Yoga for Better Digestion
            </motion.h2>
            <img
              src={BlogIMage7}
              alt="Yoga Digestion - Digestion Improvement"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Certain yoga poses can help stimulate the digestive system and reduce bloating. Gentle twists and forward bends massage the abdominal organs, improve digestion, and help eliminate toxins from the body. Yoga for digestion helps with overall gut health and promotes better metabolism.
            </p>
          </motion.div>

          {/* Section 8 */}
          <motion.div
            className="text-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaRegStar className="mr-3 text-indigo-500 fill-indigo-500" />
              Creating Inner Peace through Yoga
            </motion.h2>
            <img
              src={BlogIMage8}
              alt="Yoga Inner Peace - Meditation"
              className="w-full sm:w-[80%] lg:w-[60%] mx-auto rounded-lg shadow-lg"
            />
            <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed tracking-wide">
              Yoga offers a sanctuary where you can escape the demands of daily life. By incorporating deep breathing and meditation into your practice, yoga helps create inner peace and emotional balance. It’s a journey that nurtures the mind, body, and soul. Yoga for inner peace enhances your sense of tranquility and mindfulness.
            </p>
          </motion.div>

        </motion.div>

        {/* Conclusion */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl sm:text-6xl font-semibold text-gray-800 mb-6">
            Begin Your Yoga Journey Today
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed tracking-wide">
            Whether you’re just starting or are looking to deepen your practice, yoga has something for everyone. Start your transformation today and join our yoga community. Visit our <Link to="/contact" className="text-blue-500 font-bold">Contact Page</Link> to learn more about how yoga can benefit you.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
