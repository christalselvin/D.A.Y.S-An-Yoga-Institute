import React from "react";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="md:my-[5rem]">
        <motion.p
          className="md:text-3xl text-2xl p-12 m-1 font-Poynter Oldstyle Display font-['poppins'] relative top-[70px] right-[28px]"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Yoga is really the art of waking up.
        </motion.p>
      </div>
      <motion.p
        className="new-content relative top-[-40px] right-[-99px] md:right-[-50px] md:w-[70ch] w-[90ch] text-lg font-Poynter Oldstyle Display font-['poppins']"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Getting back to the true you. It can be that simple. Yoga offers up a way for us to see a world that is working for you instead of against you.
      </motion.p>
      <motion.p
        className="new-content relative top-[-20px] right-[-99px] md:right-[-50px] md:w-[70ch] w-[90ch] text-lg font-Poynter Oldstyle Display font-['poppins']"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Yoga reminds me that everything is connected so we must live, act, breathe with awareness. The process is the candy.
      </motion.p>
      {/* New content block */}
      <motion.p
        className="new-content relative top-[-5px] right-[-99px] md:right-[-50px] md:w-[70ch] w-[90ch] text-lg font-Poynter Oldstyle Display font-['poppins']"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Embrace mindfulness and inner peace through yoga. Our practice encourages balance, strength, and clarity, helping you find harmony in your daily life.
      </motion.p>
      <motion.div
        className="flex justify-end relative top-[-200px] left-[-100px]"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Adjust image size for small and medium view */}
        <img src="/path/to/hero.png" alt="Yoga hero" className="w-[150px] h-auto md:w-[300px] lg:w-[450px]" />
      </motion.div>
      <motion.div
        className="relative top-[-4000px] left-[-200px] text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-full transform hover:scale-105 hover:bg-green-500 transition duration-300 ease-in-out shadow-lg">
          <Link to="contact">Contact Us</Link>
        </button>
      </motion.div>
    </div>
  );
}
