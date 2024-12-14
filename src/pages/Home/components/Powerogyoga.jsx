import React from "react";
import SpaIcon from "@mui/icons-material/Spa"; // Import the new icon
import { motion } from "framer-motion";
import Power from "../components/assets/Home/power.png"; // New image source
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="md:my-[5rem]">
        {/* Image and Text in the Same Row for Larger Screens */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-center p-6 sm:p-12"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Section */}
          <motion.div
            className="flex justify-center sm:justify-start sm:mr-8"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Power}
              alt="Yoga hero"
              className="w-[300px] h-[300px] rounded-full object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="mt-6 sm:mt-0 sm:text-left text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Embrace Inner Peace and Wellness
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
              className="new-content mt-4 sm:mt-8 w-full sm:w-[80ch] text-lg sm:text-xl font-Poynter Oldstyle Display font-['poppins']"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SpaIcon style={{ color: "blue" }} /> Imagine stepping into a serene space where the worries of the world melt away. Our studio is designed to be a haven of tranquility, inviting you to leave behind the hustle and bustle of daily life and immerse yourself in the calming practice of yoga.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              className="new-content mt-6 sm:mt-8 w-full sm:w-[80ch] text-lg sm:text-xl font-Poynter Oldstyle Display font-['poppins']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <SpaIcon style={{ color: "blue" }} /> Our dedicated instructors bring a wealth of experience and a deep passion for yoga. They are here to support you every step of the way, whether you're taking your very first class or are an experienced yogi looking to deepen your practice. Each session is crafted to help you connect with your body, quiet your mind, and nourish your spirit.
            </motion.p>

            {/* Added new content */}
            <motion.p
              className="new-content mt-6 sm:mt-8 w-full sm:w-[80ch] text-lg sm:text-xl font-Poynter Oldstyle Display font-['poppins']"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SpaIcon style={{ color: "blue" }} /> At D.A.Y.S Yoga, we believe that yoga is more than just a series of postures. It's a path to inner peace, greater self-awareness, and a healthier, more balanced life. Our classes incorporate not just the physical aspects of yoga but also mindful breathing and meditation, creating a comprehensive approach to wellness.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Button Section */}
        <motion.div
          className="flex justify-center sm:justify-start mt-8 mb-12" // Added mb-12 for bottom margin
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="contact"> Learn More </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
