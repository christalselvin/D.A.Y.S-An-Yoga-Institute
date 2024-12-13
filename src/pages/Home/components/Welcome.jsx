import React from "react";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import { motion } from "framer-motion";
import hero from "../components/assets/hero.png";
import { Link } from "react-router-dom";

const AnimatedText = ({ children, initialY, delay }) => (
  <motion.p
    className="w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-Poynter Oldstyle Display font-['poppins'] mt-10"
    initial={{ y: initialY }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, delay: delay }}
  >
    <CallMergeIcon style={{ color: "blue" }} /> {children}
  </motion.p>
);

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-right overflow-x-hidden text-left text-right text-center text-justify px-4 lg:px-16">
      <motion.p
        className="text-sm sm:text-4xl font-bold text-center md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl p-10 m-1 font-Poynter Oldstyle Display font-['poppins'] mt-8 sm:p-4 md:p-6 lg:p-12 xl:p-16 text-g"
        initial={{ y: 1000 }}
        animate={{ y: 70 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Yoga is really the art of waking up</h1>
      </motion.p>

      <AnimatedText initialY={{ sm: 120, md: 150, lg: 180, xl: 200, '2xl': 250 }} delay={0.2}>
        Getting back to the true you. It can be that simple. Yoga offers up a way for us to see a world that is working for you instead of against you.
      </AnimatedText>

      <AnimatedText initialY={{ sm: 150, md: 180, lg: 210, xl: 240, '2xl': 290 }} delay={0.4}>
        Yoga reminds me that everything is connected so we must live, act, breathe with awareness. The process is the candy.
      </AnimatedText>

      <AnimatedText initialY={{ sm: 180, md: 210, lg: 240, xl: 270, '2xl': 320 }} delay={0.6}>
        Embrace mindfulness and inner peace through yoga. Our practice encourages balance, strength, and clarity, helping you find harmony in your daily life.
      </AnimatedText>

      {/* Button */}
      <motion.div
        className="text-center mt-8"
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-blue-500 text-white text-lg font-semibold rounded-full transform hover:scale-105 hover:bg-green-500 transition duration-300 ease-in-out shadow-lg"
          aria-label="Contact Us"
        >
          <Link to="contact" className="inline-block w-full h-full">Contact Us</Link>
        </button>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex justify-center mt-8 mx-auto max-w-80 md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px]"
        initial={{ y: 300, scale: 0.5 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={hero} alt="Yoga hero" className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
