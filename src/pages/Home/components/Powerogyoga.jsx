import React from "react";
import SpaIcon from "@mui/icons-material/Spa"; // Import the new icon
import { motion } from "framer-motion";
import Power from "../components/assets/power.png"; // New image source
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen overflow-x-hidden min-h-screen">
      <div className="md:my-[5rem]">
        <motion.p
          className="md:text-3xl p-12 m-1 font-Poynter Oldstyle Display font-['poppins'] relative top-[120px] right-[28px]"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SpaIcon style={{ color: "blue" }} /> Embrace Inner Peace and Wellness.
        </motion.p>
      </div>
      <motion.p
        className="new-content relative top-[40px] right-[-99px] w-[80ch] text-lg font-Poynter Oldstyle Display font-['poppins'] relative"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SpaIcon style={{ color: "blue" }} /> Imagine stepping into a serene space where the worries of the world melt away. Our studio is designed to be a haven of tranquility, inviting you to leave behind the hustle and bustle of daily life and immerse yourself in the calming practice of yoga.
      </motion.p>
      <motion.p
        className="new-content relative top-[80px] right-[-99px] w-[90ch] text-lg font-Poynter Oldstyle Display font-['poppins'] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SpaIcon style={{ color: "blue" }} /> Our dedicated instructors bring a wealth of experience and a deep passion for yoga. They are here to support you every step of the way, whether you're taking your very first class or are an experienced yogi looking to deepen your practice. Each session is crafted to help you connect with your body, quiet your mind, and nourish your spirit.
      </motion.p>
      {/* Added new content */}
      <motion.p
        className="new-content relative top-[120px] right-[-99px] w-[90ch] text-lg font-Poynter Oldstyle Display font-['poppins'] relative"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SpaIcon style={{ color: "blue" }} /> At D.A.Y.S Yoga, we believe that yoga is more than just a series of postures. It's a path to inner peace, greater self-awareness, and a healthier, more balanced life. Our classes incorporate not just the physical aspects of yoga but also mindful breathing and meditation, creating a comprehensive approach to wellness.
      </motion.p>
      <motion.div
        className="flex justify-end relative top-[-150px] left-[-100px]"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* New image with increased size */}
        <img src={Power} alt="Yoga hero" className="w-[500px] h-auto" /> {/* Increased size */}
      </motion.div>
      <motion.div
        className="relative top-[-190px] left-[-200px] text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg relative top-[60px] right-[-100px]">
          <Link to="contact"> Learn More </Link>
        </button>
      </motion.div>
    </div>
  );
}
