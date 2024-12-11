import React from "react";
import CallMergeIcon from "@mui/icons-material/CallMerge";
import { motion } from "framer-motion";
import hero from "../components/assets/hero.jpg";
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
          <CallMergeIcon style={{ color: "blue" }} /> Yoga is really the art of waking up.
        </motion.p>
      </div>
      <motion.p
        className="new-content relative top-[40px] right-[-99px] w-[80ch] text-lg font-Poynter Oldstyle Display font-['poppins'] relative"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CallMergeIcon style={{ color: "blue" }} /> Getting back to the true you. It can be that simple. Yoga offers up a way for us to see a world that is working for you instead of against you.
      </motion.p>
      <motion.p
        className="new-content relative top-[80px] right-[-99px] w-[90ch] text-lg font-Poynter Oldstyle Display font-['poppins'] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CallMergeIcon style={{ color: "blue" }} /> Yoga reminds me that everything is connected so we must live, act, breathe with awareness. The process is the candy.
      </motion.p>
      <motion.div
        className="flex justify-end relative top-[-150px] left-[-100px]"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={hero} alt="Yoga hero" className="w-[290px] h-auto" />
      </motion.div>
      <motion.div
        className="relative top-[-190px] left-[-200px] text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg relative top-[60px] right-[-100px]">
         <Link to="contact"> Contact Us</Link>
        </button>
      </motion.div>
    </div>
  );
}
